import react from "react";
import { Component } from "react";
export default class Scu extends Component{
    constructor(){
        super();
        this.state={Nam:0}      
    }

    shouldComponentUpdate(){
         console.log("shoulComponentUpdate"); // it stops the change ocurring from the updation of state and has a default value of false which it returns  
         ;
    }
    
 

    render(){

        console.log("render")   
        return(
            <div>
            <h1>
                This is it {this.state.Nam}
            </h1>
            <button onClick={()=>{this.setState({Nam:this.state.Nam+1})}}>button</button>
            </div> 
        );
    }
     
    

}