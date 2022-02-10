import { Component } from "react/cjs/react.development";

class Axios2 extends Component{
    constructor(){
        super();
        this.state={albums:[]}

    }

    componentDidMount(){
        fetch("https://jsonplaceholder.typicode.com/albums").then((res)=>res.json()).then((response)=>this.setState({albums:response}))
    }
     render(){
         const {albums}=this.state
         return(    
             <>
             {albums.map((val)=><div key={val.id}>{val.title}</div>)}
             </>
         )
     }

}

export default Axios2