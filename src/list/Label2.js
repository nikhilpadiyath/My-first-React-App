import React from "react";
import "./Label.css";
import { MyContext,MyContext2 } from "../pages/MyContexts";

class Label2 extends React.Component {
  render() {
    console.log ("RENDER LABEL");
    const props = this.props;
    const style = props.isActive
      ? { background: "green" }
      : { background: "orange" };
    
    return (
      <MyContext.Consumer>
        {(val) => {
          if (val === false) {
            return null;
          }

          return (
            <span
              onClick={() => {
                props.onAction(props.isActive ? "active" : "non-active");
              }}
              className="list-label-item"
              style={style}
            >
              {props.isActive ? "Active" : "Non Active"}
            </span>
          );

    }}
      </MyContext.Consumer>
    );
  }
}

Label2.contextType = MyContext2;

export default Label2;
