import React,{useEffect, useState} from "react";
    

function Useeffect(props){
   const[state,setstate]=useState()

   useEffect(()=> {
   console.log("usEeffect called")
   return () => {
       console.log("usEeffect cleanup" )
   }
    } ,[state])  

  const handleResize =()=>{
    setstate(window.innerWidth)
    
   }

   

return(
    <div>
        {state}
        <button onClick={handleResize}>Buttttton</button>
    </div>
)
}
export default Useeffect;
