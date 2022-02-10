import react from "react";
import { Component } from "react";
import Cwu2 from "./Cwu2";
import Cwu3 from "./Cwu3";
export default class Cwu1 extends Component{
    constructor(){
        super();
        this.state={
            show:true
        }
       
    }

 
    
    render(){

        
        return(
            <div>
             {
                 this.state.show ? <Cwu2/>:<h1>Cwu2 is removed</h1>  
             }

             <button onClick={()=>this.setState({show:!this.state.show})}>Button</button>
               

             { 
                 this.state.show ? <Cwu3/>:<h1>Cwu3  is removed</h1> 
             }

             <button onClick={()=>this.setState({show:!this.state.show})}>Button</button>
     
            </div> 
        );
    }
     
    

}