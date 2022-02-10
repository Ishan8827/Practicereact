import React,{useReducer} from "react"; 
const initialstate=0;
const reducer=(state,action)=>{
if(action.type==="INC"){
    return state+1
}
}
function Uareducer(){
    const [state,dispatch]=useReducer(reducer,initialstate)
    
    return(
        <div>
      <h1>{state}</h1>
      <button onClick={() => dispatch({type:"INC"})}>I</button>
        </div>
    )
}

export default Uareducer;