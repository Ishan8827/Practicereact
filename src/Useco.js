import React from "react";
import Useco2 from "./Useco2";
export const Uesercontext=React.createContext();


function Useco(){
     
    return(
        <>
        <Uesercontext.Provider value={"Ishan"}>
        <Useco2/>
        </Uesercontext.Provider>
        </> 
    )
}

export default Useco;

