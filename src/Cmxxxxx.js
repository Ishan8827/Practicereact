import { useReducer } from "react";

const funk=(state,action)=>{
    if(action.type==="INC"){
        return state+1
    }
    
}

function Cmxxxxx(){
    const[state,dispatch]=useReducer(funk,1);
    return(
        <div>
            <h1>{state}</h1>
            <h1>This is it</h1>
            <button onClick={()=>dispatch({type:"INC"})}>Funk</button>
        </div>
    )
}

export default Cmxxxxx;
