import { useMemo, useState } from "react";

function USEmemo(){
    const[state,setstate]=useState(1);
    const[condition,setcondition]=useState(1);
    function statechange(){
        setstate(state+1)
    };
    function conditionchange(){
        setcondition(condition+1)
    }

   const multicountmemo=useMemo(function multicount(){
       console.log("IShan")
    },[state])

    return(
        <div>
           
           <h1>
               {state}
           </h1>
           <button onClick={statechange}>Count</button>
            <h2>
                {condition}
            </h2>
            <button onClick={conditionchange}>Count2</button>
            <h3>{multicountmemo}</h3>
        </div>
    )
}

export default USEmemo;