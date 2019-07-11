import React from "react";

const HOC = props => WrappedComponent => {
  return class extends React.Component {
    state = {
      list: props,
      newItem: "",
      isEdit: false
    };
    handleDelete = index => {
      console.log(index);
      const list = this.state.list;
      list.splice(index, 1);
      this.setState({ list });
    };
    handleAddItem = () => {
      if (this.state.newItem.trim() !== "") {
        const newAddedItem = {
          value: Math.random() * 10000,
          name: this.state.newItem
        };
        this.setState({
          list: [newAddedItem, ...this.state.list]
        });
        this.clearField();
      }
    };

    clearField = () => {
      this.setState({
        newItem: ""
      });
    };

    handleChange = e => {
      this.setState({
        newItem: e
      });
    };

    toggleMode = () => {
      this.setState({
        isEdit: !this.state.isEdit,
        newItem: ""
      });
    };
    render() {
      return (
        <WrappedComponent
          {...this.props}
          handleDelete={this.handleDelete}
          {...this.state}
          {...props}
          handleAddItem={this.handleAddItem}
          handleChange={this.handleChange}
          toggleMode={this.toggleMode}
        />
      );
    }
  };
};

export default HOC;
