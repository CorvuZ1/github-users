import { useContext, useState } from "react"
import { AlertContext } from "../context/alert/AlertContext"

export const Search = () => {
  const [value, setValue] = useState("")
  const {show} = useContext(AlertContext)

  const onSubmit = event => {
    if (event.key !== "Enter") {
      return
    }
    if (value.trim()) {
      console.log("MAKE REQUEST WITH", value)
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