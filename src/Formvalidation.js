import { useState } from "react";
// import "./Formvalidation.css";   

function Formvalidation(){
    const[Name,setname]=useState();
    const[Password,setpassword]=useState();
    const[Email,setemail]=useState();
    const[succes,setsucces]=useState();
    
const handlename=(e)=>{
    const item=e.target.value;
    if(item.length<=3){
        setname(false)
    }
    else{
        setname(true)   
    }
}

const handlepassword=(e)=>{
    const item=e.target.value;
    if(item.length<=3){
           setpassword(false);
    }
    else{
        setpassword(true);
    }
}

const handleEmail=(e)=>{
    const item=e.target.value;
    if(item.length<=3){
        setemail(false)
    }
    else{
        setemail(true)
    }
}

const handlesubmit=(e)=>{
e.preventDefault();
if(Name&&Password&&Email){
    setsucces("Form has been submitted")
}
else{
    setsucces("please fill the form in a correct manner")
}

}
    

    return(
        <div>
            <form onSubmit={handlesubmit}>
                <label>Name:</label>
                <input type="text" placeholder="hname" onChange={handlename}></input><h4 style={{color: "red"}}>{Name?"":"invalid"}</h4>
                 <br/>
                 <br/>
                 <br/>
                 <label>Password:</label>
                 <input type="password" placeholder="pname" onChange={handlepassword}></input><h4 style={{color: "red"}}>{Password?"":"invalid"}</h4>
                 <br/>
                 <br/>
                 <br/>
                 <label>E-mail:</label>
                 <input type="text" placeholder="E-name"  onChange={handleEmail}></input><h4 style={{color: "red"}}>{Email?"":"invalid"}</h4>
                 <button type="submit">Submit</button>
                 <p style={{color: "green"}}>{succes}</p>
            </form>
        </div>
    )
}

export default Formvalidation;