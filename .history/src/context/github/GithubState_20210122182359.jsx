import { useReducer } from "react";
import { GithubContext } from "./GithubContext"
import { GithubReducer } from "./GithubReducer";

console.log(process.env.REACT_APP_CLIENT_CLIENT)

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
    dispatch({type: "SEARCH_USERS", payload: []})
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