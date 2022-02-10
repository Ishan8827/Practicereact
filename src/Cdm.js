import react from "react";
import { Component } from "react";
export default class Cdm extends Component{
    constructor(){
        super();
        this.state={Nam:"ishan"}    
       
    }
    
    componentDidMount(){
        console.log("Componentdidmount"); // thoi der me call hoga .api wagera k liye km ata h ye
    }

    render(){

        console.log("render")   
        return(
            <div>
            <h1>
                This is it {this.state.Nam}
            </h1>
            <button onClick={()=>{this.setState({Nam:"patel"})}}>button</button>
            </div> 
        );
    }
     
    

}