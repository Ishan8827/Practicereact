import React from "react";                                                      
import { useContext } from "react";
import {fnames} from "./App";                                               


function Contextpractice(){                                                         
    console.log(fnames)
    const fullname=useContext(fnames);                              
 
    return(                                                     
        <div>                                                                              
            
            {fullname}                                      
           
        </div>                                      
    )                                                   
}

export default Contextpractice;