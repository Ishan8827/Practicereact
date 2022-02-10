import { Component } from "react/cjs/react.development";

class Compana extends Component{
    constructor(){
        super();
        this.state={countt:1};
        this.Changet=this.Changet.bind(this)
    }

    Changet(){
        this.setState({countt:this.state.countt+1})   //properties are needed to be binded when not using arrow function
    }

    NAmes="Ishan"

    static getDerivedStateFromProps(props,prestate){
        console.log(prestate.countt)
     return({countt:props.lbsana})
    }   

    render(){
        return(
            <>
           <h1>{this.state.countt}</h1> 
           <button onClick={this.Changet}>ddg</button>
           <h6>{this.NAmes}</h6>
            </>
        )   
    }
}



export default Compana;