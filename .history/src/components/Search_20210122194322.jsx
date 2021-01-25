import { useContext, useState } from "react"
import { AlertContext } from "../context/alert/AlertContext"
import { GithubContext } from "../context/github/GithubContext"

export const Search = () => {
  const [value, setValue] = useState("")
  const {show} = useContext(AlertContext)
  const github = useContext(GithubContext)

  const onSubmit = event => {
    if (event.key !== "Enter") {
      return
    }

    console.log(github)

    if (value.trim()) {
      github.search(value.trim())
    } else {
      show("Введите данные пользователя")
    }
  }

  return (
    <div className="form-group">
      <input 
        type="text"
        className="form-control"
        placeholder="Введите ник пользователя..."
        onChange={event => setValue(event.target.value)}
        value={value}
        onKeyPress={onSubmit}
      />
    </div>
  )
}