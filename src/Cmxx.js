import react,{Component} from "react";

class Cmxx
 extends Component {
  constructor() {
    super();
    this.state = { color: "red" };
  }

  shouldComponentUpdate() {
    console.log("shouldcomppnetupdate");
  }

  componentDidMount() {
    console.log("cdu");
    this.setState({ color: "Blue" });
  }

  static getDerivedStateFromProps(props, state) {
    console.log("ishan");
    return { color: props.color };
  }

  render() {
    return (
      <div>
        {console.log("ssdsdsddsdsdsd")}
        <h1>{this.state.color}</h1>
      </div>
    );
  }
}

export default Cmxx
;
