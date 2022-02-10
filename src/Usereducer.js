import React,{useReducer} from "react";

const initialstate=0;

const reducer = (state,action)=>{
    if(action.type==="INC"){
        return state + 1;
    }
    if(action.type==="DEC"){
        
            return state -  1;
         
       
    }
}

function Usereducer(){
    const[state,dispatch]=useReducer(reducer,initialstate);

   return(
       <>
       <p>{state}</p>
       <button onClick={() => dispatch({type:"INC"})}>I</button>
       <button onClick={() => dispatch({type:"DEC"})}>D</button>
       </>
   )



    

     


}

export default Usereducer;