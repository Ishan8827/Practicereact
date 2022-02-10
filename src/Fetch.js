import react from "react";
import { useState } from "react/cjs/react.development";
import { useEffect } from "react";
import axios from "axios";


function Fetch(){
    const[state,setstate]=useState([]);
   useEffect(()=>{
    fetch("https://jsonplaceholder.typicode.com/use").then((res)=>{setstate(res.url)})
   });
    return(
       
       
        <div>
        <h1>{state}</h1>
       
        </div>
    )
}


export default Fetch;