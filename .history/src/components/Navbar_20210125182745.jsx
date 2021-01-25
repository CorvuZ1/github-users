import {useEffect, useRef} from "react"
import {NavLink} from "react-router-dom"

export const Navbar = () => {
  let mainPage = useRef("")
  
  useEffect(() => {
   console.log("effect") 
  })
  
  return (
    <nav className="navbar navbar-dark bg-primary navbar-expand-lg">
      <div className="navbar-brand">
        Github Поиск
      </div>
      <ul className="navbar-nav">
        <li className="nav-item">
          <NavLink exact to="/github-users" ref={mainPage} className="nav-link">Главная</NavLink>
        </li>
        <li className="nav-item">
          <NavLink to="/github-users/about" className="nav-link">Информация</NavLink>
        </li>
      </ul>
    </nav>
  )
}