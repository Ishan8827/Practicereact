import React from "react";
import { Component } from "react";
import axios from "axios";
class Axios extends Component{
    constructor(){
        super()
        this.state={postss:[]}
    }
    componentDidMount(){
     axios.get("https://jsonplaceholder.typicode.com/users").then((res)=>this.setState({postss:res.data}))
    
    }
    render()
    {
        const {postss}=this.state
        return(  
            <div>
          { postss.map(post=><div><p>{post.id}--{post.name}</p></div>)
        }
        </div>
        )
    
}
}

export default Axios;