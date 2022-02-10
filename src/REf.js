import React from "react";
import { Component } from "react/cjs/react.development";

class REF extends Component{
constructor(){
    super();
    this.mynike=React.createRef();
    
}

componentDidMount(){
    console.log(this.myimg.current);
    
}


 
myimg=React.createRef()

render(){
    return(
        <div>
            <h3 ref={this.myimg}>
                 this is it
            </h3>
            <input type="text" placeholder="Enter your name" ref={this.mynike}  onChange={()=>{console.log(this.mynike.current.value)}}></input>
        </div> 
    )
}

}

export default REF;