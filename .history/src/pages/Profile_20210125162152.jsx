import { useContext, useEffect } from "react"
import { Link } from "react-router-dom"
import { Repos } from "../components/Repos"
import { GithubContext } from "../context/github/GithubContext"

export const Profile = ({match}) => {
  const {getUser, getRepos, loading, user, repos} = useContext(GithubContext)
  const urlNname = match.params.name

  useEffect(() => {
    getUser(urlNname)
    getRepos(urlNname)
    // eslint-disable-next-line
  },[])

  if (loading) {
    return <p className="text-center">Загрузка...</p>
  }

  const {
    name, company, avatar_url,
    location, bio, blog,
    login, html_url, followers,
    following, public_repos, public_gists
  } = user 
  
  return (
    <>
      <Link to="/" className="btn btn-link">На главную</Link>
      <div className="card mb-4">
        <div className="card-body">
          <div className="row">
            <div className="col-sm-3 text-center">
              <img style={{maxWidth: 150}} src={avatar_url} alt={name}/>
                <h1>{name}</h1>
                {location && <p>Местоположение {location}</p>}
            </div>
            <div className="col ml-5">
              {bio && <>
                        <h3>BIO</h3>
                        <p>{bio}</p>
                       </>}
              <a href={html_url} target="_blank" rel="noreferrer" className="btn btn-dark">Открыть профиль</a>
              <ul type="none" style={{padding: 0}}>
                {login && <li>
                             <strong>Username: </strong> {login}
                          </li>}

                {company && <li>
                             <strong>Компания: </strong> {company}
                            </li>}

                {blog && <li>
                           <strong>Website: </strong> {blog}
                         </li>}
              </ul>
              <div className="badge badge-primary">Подписчики: {followers}</div>
              <div className="badge badge-success mr-2">Подписан: {following}</div>
              <div className="badge badge-info mr-2">Репозитории: {public_repos}</div>
              <div className="badge badge-dark">Gists: {public_gists}</div>
            </div>
          </div>
        </div>
      </div>
      <Repos repos={repos}/>
    </>
  )
}

