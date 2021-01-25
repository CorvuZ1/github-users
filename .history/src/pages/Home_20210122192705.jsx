import {useContext} from "react"
import { Card } from "../components/Card"
import { Search } from "../components/Search"
import { GithubContext } from "../context/github/GithubContext"

export const Home = () => {
  const {loading, users} = useContext(GithubContext)

  return (
    <>
      <Search/>
      <div className="row">

        {
          loading
            ? <p className="text-center">Загрузка...</p>
            : cards.map(user => (
                <div className="col-sm-4 mb-4" key={user.id}>
                  <Card user={user}/>
                </div>
            ))
        }

        
      </div>
    </>
  )
}