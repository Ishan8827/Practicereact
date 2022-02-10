import { useEffect, useMemo, useState } from "react/cjs/react.development";



function USemememo(){
const[state,setstate]=useState(1);
const[count,setCount]=useState(1);
const multimemo=useMemo(()=>(console.log("afsdfsf")),[state]);
console.log("bahar")
useEffect(()=>console.log("uiseefeect"))

    return(
        <div>
         <h1>{state}</h1>
         <button onClick={()=>setstate(state+1)}>S</button>
         
         <button onClick={()=>setCount(count+1)}>CO</button>
         
         <h1>{multimemo}</h1>
         
        </div>
    )   

}

export default USemememo;