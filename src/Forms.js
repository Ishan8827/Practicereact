import React,{useState} from "react";


function Forms(){
    const[namess,setnamess]=useState();
    const[passwordd,setpasswordd]=useState();

   const[news,setnews]=useState([]);    

    const sumbitForm = (e) => {e.preventDefault();
        const newEntry={names:namess,passwords:passwordd};
        setnews([...news,newEntry]);
        console.log(news);
       setnamess("");
       setpasswordd("");
        }
    return(
        <>  
        <form onSubmit={sumbitForm}>
<h3>Name</h3>
<input type="text" value={namess} onChange={(e)=>setnamess(e.target.value)}></input>
<br></br>
<h3>Password</h3>
<input type="Password" value={passwordd} onChange={(e)=>setpasswordd(e.target.value)}></input>
<input type="submit"></input>

        </form>

        </>

    )
}

export default Forms;