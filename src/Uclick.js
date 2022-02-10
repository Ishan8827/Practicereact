import { Component } from "react/cjs/react.production.min";

class Uclick extends Component{
    constructor(){
     super(); 
     this.ChangeEvent=this.ChangeEvent.bind(this)
     this.AwesomeEvent=this.AwesomeEvent.bind(this)
     this.state={name:"PAtl"}
    }

    ChangeEvent(){
     console.log("Ishan",this.state.name)
    }
    
    AwesomeEvent(){
       console.log("this is",this.state.name)
    }

    render(){
        return(
            <div>   
                <button onClick={this.AwesomeEvent}>Click the button</button>           
            </div>
        )
    }
}


export default Uclick;