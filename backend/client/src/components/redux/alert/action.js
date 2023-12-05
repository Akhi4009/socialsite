import { SET_ALERT,REMOVE_ALERT } from "./actionType";
import {v4 as uuidv4} from "uuid"



export const setAlert=(msg,alertType) =>dispatch =>{

    const id=uuidv4();
    console.log(id)

    dispatch({
        type:SET_ALERT,
        payload:{msg, alertType, id}
    })

    setTimeout(()=>dispatch({type:REMOVE_ALERT,payload:id}),1000)
    
}