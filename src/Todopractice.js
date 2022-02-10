// import { useState } from "react";

import { useState } from "react";


// function Todopractice(){
//     const[state,setstate]=useState();
//     const[state2,setstate2]=useState([]);
  
//     return(
//         <div>
//             <h1>Todo list</h1>
//             <input type="text" onChange={(e)=>setstate(e.target.value)}></input>    
//             <button onClick={()=>setstate2((old)=>[...old,state])}>Click me</button>
//             <h3>{state2.map((val,innd)=><li id={innd}>{val} <button onClick={()=>setstate2((old)=>{return old.filter((vall,indd)=>{return indd!==innd})})}>Delete</button></li>)}</h3>
            
//         </div>
//     )
// }


// export default Todopractice;

function Todopractice(){
    const[state,setstate]=useState();
    const[state2,setstate2]=useState([]);

    return(
        <div>
            <input type="text" onClick={(e)=>setstate(e.target.value)}></input>
            <button onClick={()=>setstate2((old)=>[...old,state])}>Click me</button>
            {state2.map((val,ind)=><li id={ind}>{val}<button onClick={()=>setstate2((olditem)=>olditem.filter((valll,indep)=>indep!=ind))}>delete</button></li>)}
        </div>
    )
}
export default Todopractice;

