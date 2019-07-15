import React from "react";
import { gridSize } from "@atlaskit/theme";
import { AsyncCreatableSelect as AsyncCreatable } from "@atlaskit/select";

export default class AtlassianKitUI extends React.Component {
  state = {
    editValue: "Field value",
    allowCreateWhileLoading: false,
    options: [{ label: "asd", value: "asd" }, { label: "123", value: "gggg" }],
    opts: null
  };

  componentDidMount() {
    fetch("http://www.json-generator.com/api/json/get/bUtxKljJua?indent=2")
      .then(res => {
        return res.json();
      })
      .then(res => {
        const newArrayList = res.map(e => {
          return { label: e.name, value: e.company };
        });
        this.setState({ opts: newArrayList });
      })
      .catch(err => console.log(err));
  }

  // you control how the options are filtered
  filterOptions = inputValue => {
    return this.state.opts.filter(option =>
      option.label.toLowerCase().includes(inputValue.toLowerCase())
    );
  };

  // async load function using callback (promises also supported)
  loadOptions = (inputValue, callback) => {
    setTimeout(() => {
      callback(this.filterOptions(inputValue));
    }, 1000);
  };

  render() {
    return (
      <div
        style={{
          padding: `${gridSize()}px ${gridSize()}px ${gridSize() * 6}px`
        }}
      >
        <AsyncCreatable
          loadOptions={this.loadOptions}
          placeholder="Add a cast"
        />
      </div>
    );
  }
}
