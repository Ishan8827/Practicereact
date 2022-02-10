import react from "react";
import { Component } from "react";
export default class Cdu extends Component{
    constructor(){
        super();
        this.state={Nam:0}    
       
    }
    
    componentDidMount(){
        console.log("Componentdidmount"); // thodi der me call hoga .api wagera k liye km ata h ye
    }   

    componentDidUpdate(preprops,prestate,snapshot){
        console.log(prestate);
        console.log("Component did update");// ye jb state ya props change hoti h tb call hoga  
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