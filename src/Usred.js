import { useReducer } from "react";
import "./Usred.css"
let initialstate=0;
function reducer(state,action){
  if(action.type==="INC"){
    return state+1;
  }
  if(action.type==="DEC"){
    return state-1
  }
}
function Usred(){
  const[state,dispatch]=useReducer(reducer,initialstate)
  return(
    <>
 <h1>
   {state}
 </h1>
 <button onClick={()=>dispatch({type:"INC"})}></button>

    </>
  )
}

export default Usred;