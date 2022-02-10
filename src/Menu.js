import React from "react";
import { NavLink } from "react-router-dom";

const Menu =()=>{
    return(
        <>
        <NavLink to="/">
            About
        </NavLink>
        <NavLink to="/Forms">
            Forms
        </NavLink>
        <NavLink to="/Usercomp">
            Usercomp
        </NavLink>
        </>
    )
};

export default Menu;