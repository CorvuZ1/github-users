import { useReducer } from "react";
import axios from "axios";
import { GithubContext } from "./GithubContext"
import { GithubReducer } from "./GithubReducer";

const CLIENT_ID = process.env.REACT_APP_CLIENT_ID;
const CLIENT_SECRET = process.env.REACT_APP_CLIENT_SECRET;

export const GithubState = props => {
  const initialState = {
    user: {},
    users: [],
    loading: false,
    repos: []
  }
  const [state, dispatch] = useReducer(GithubReducer, initialState)

  const search = async value => {
    setLoading()

    const response = await axios.get(
      `https://api.github.com/search/users?q=${value}&client_id=${CLIENT_ID}&client_secret=${CLIENT_SECRET}`
    )

    dispatch({type: "SEARCH_USERS", payload: response.data.items})
  }

  const getUser = async (name) => {
    setLoading()
    dispatch({type: "GET_USER", payload: {}})
  }

  const getRepos = async (name) => {
    setLoading()
    dispatch({type: "GET_REPOS", payload: []})
  }

  const clearUsers = () => dispatch({type: "CLEAR_USERS"})

  const setLoading = () => dispatch({type: "SET_LOADING"})

  const {user, users, repos, lolading} = state 

  return (
    <GithubContext.Provider value={{
      setLoading, 
      search, 
      getUser, 
      getRepos, 
      clearUsers,
      user, users, repos, lolading
    }}>
      {props.children}
    </GithubContext.Provider>
  )
}