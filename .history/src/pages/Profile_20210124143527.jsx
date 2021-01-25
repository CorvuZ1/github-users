import { useContext, useEffect } from "react"
import { Link } from "react-router-dom"
import { GithubContext } from "../context/github/GithubContext"

export const Profile = ({match}) => {
  const {getUser, getRepos, loading, user, repos} = useContext(GithubContext)
  const name = match.params.name

  useEffect(() => {
    getUser(name)
    getRepos(name)
  },[])

  if (loading) {
    return <p className="text-center">Загрузка...</p>
  }

  console.log(match)
  return (
    <>
      <Link to="/"></Link>
    </>
  )
}

