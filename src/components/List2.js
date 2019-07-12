import React, { Component } from "react";
import HOC from "./HOC";

const list2 = [
  { name: "17", value: "17" },
  { name: "18", value: "18" },
];
export class List2 extends Component {
  render() {
    return (
      <div style={{ textAlign: "center" }}>
        <h1>List 2 Example</h1>
        {this.props.list.map((item, i) => {
          return (
            <div key={i} onClick={() => this.props.handleDelete(i)}>
              {item.name}
            </div>
          );
        })}
      </div>
    );
  }
}

export default HOC(list2)(List2);
