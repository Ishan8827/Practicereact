import react from "react";
import { Component } from "react";
class King extends Component{
    constructor()
    {   
        super();
        console.log("constructor");
        this.abcd={
            data:"anil"
        }
    }
    render()
    {
        console.log("constructorr");
        return(<h1>"THis is" {this.abcd.data}</h1>)
        

       
    }
}

export default King;