import { useState } from "react"
import { useEffect } from "react/cjs/react.development";

function Axioa(){
    const[albums,setalbums]=useState([]);
    useEffect(()=>fetch("https://jsonplaceholder.typicode.com/albums").then((res)=>res.json()).then((response)=>setalbums(response)))
    return(
        <>
         {albums.map((val)=><div key={val.id}>{val.id}</div>)}
        </>
    )
}

export default Axioa;