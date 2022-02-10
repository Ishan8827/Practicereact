import React, { useState } from "react";
function Usestate(){
    const [state,setstate]=useState(4);
    function handlestate(){
        setstate(prevstate=>prevstate-1)
    }

    return(
        <div>
            <button onClick={handlestate}>click me..</button>
            {state}     
        </div>
    )
}

export default Usestate;