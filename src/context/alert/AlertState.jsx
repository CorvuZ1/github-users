import {useReducer} from "react"
import { AlertContext } from "./AlertContext"
import { AlertReducer } from "./AlertReducer"

export const AlertState = props => {
  const [state, dispatch] = useReducer(AlertReducer,null)

  const hide = () => dispatch({type: "HIDE_ALERT"})
  const show = (text,type="secondary") => dispatch({
    type: "SHOW_ALERT",
    payload: {type,text}
  })

  return (
    <AlertContext.Provider value={{hide, show, alert:state}}>
      {props.children}
    </AlertContext.Provider>
  )
}