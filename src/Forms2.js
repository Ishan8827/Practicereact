import { useRef } from "react";
import { useState } from "react/cjs/react.development";



function Forms2(){
  const myimg=useRef();
  const[state,setstate]=useState();

  const handleit=()=>{
    if(myimg.current.value.length<3){
      
      setstate("enter correct naming")
    }
    else{
      setstate("welcome "+myimg.current.value)
    }
  }
  
  return(
      <>
<input type="text" placeholder="Enter your name"  ref={myimg}></input>
<button onClick={handleit}>CLicke here</button>
<h1 id="one">{state}</h1>
      </>
  )
}

export default Forms2;	