import React from "react";
import arrayMove from "array-move";

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
        this.setState({
          list: [this.state.newItem, ...this.state.list]
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

    onSortEnd = ({ oldIndex, newIndex }) => {
      this.setState(({ list }) => ({
        list: arrayMove(list, oldIndex, newIndex)
      }));
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
          onSortEnd={this.onSortEnd}
        />
      );
    }
  };
};

export default HOC;
