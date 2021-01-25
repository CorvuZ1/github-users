import { useContext, useEffect } from "react"
import { GithubContext } from "../context/github/GithubContext"

export const Profile = ({match}) => {
  const github = useContext(GithubContext)
  const name = match.params.name

  useEffect(() => {
    // github.getUser(name)
    // github.getRepos(name)
    console.log("effect")
  },[])

  console.log(match)
  return (
    <div className="">
      <h1>Profile page</h1>
    </div>
  )
}