import React,{useContext} from "react";
import {fname} from "./App";    

const CompC = ()=>{
    const firstname = useContext(fname);

    return (
        <h1>This is {firstname}..</h1>
    );

} 

export default CompC;