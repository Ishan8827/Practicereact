import React from "react";
import { useContext } from "react";
import {Uesercontext} from "./Useco";


function Useco2(){
    const user=useContext(Uesercontext);
    return(
        <>
        <h1>This is me {user}</h1>
        </>                 
    )
}
export default Useco2;  
