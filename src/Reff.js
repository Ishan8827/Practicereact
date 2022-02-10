import { useRef,useEffect } from "react"

function Reff(){
    const myimg=useRef();
    useEffect(()=>console.log(myimg))
    return(
        <>
<input type="text" placeholder="Enter your name" value="sadasf" ref={myimg}></input>
        </>
    )
}

export default Reff;	