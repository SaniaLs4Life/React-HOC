import React, { Component } from "react";
import HOC from "./HOC";
import {
  Wrapper,
  CustomButton,
  CustomList,
  CustomHeader,
  Input,
  Button,
  DeleteButton,
  EmptyData
} from "./CustomComponents";

const suggestions = [
  {
    name: "hakan"
  },
  {
    name: "Oleh"
  },
  {
    name: "Adrian"
  }
];

const list = [
  { name: "Ford", models: ["Fiesta", "Focus", "Mustang"] },
  { name: "BMW", models: ["320", "X3", "X5"] },
  { name: "Fiat", models: ["500", "Panda"] }
];
export class List extends Component {
  render() {
    let filteredSuggestions = suggestions;
    filteredSuggestions = filteredSuggestions.filter(item => {
      let foundItem = item.name.toLowerCase();
      return (
        foundItem.indexOf(this.props.newItem.toString().toLowerCase()) !== -1
      );
    });
    return (
      <Wrapper>
        <CustomHeader onClick={this.props.toggleMode}>
          {this.props.isEdit ? (
            <CustomButton>Save</CustomButton>
          ) : (
            <CustomButton>Edit</CustomButton>
          )}
        </CustomHeader>
        {this.props.list.length > 0 ? (
          this.props.list.map((item, i) => {
            return (
              <>
                <CustomList key={i} style={{ marginTop: "25px" }}>
                  {this.props.isEdit ? (
                    <DeleteButton onClick={() => this.props.handleDelete(i)}>
                      X
                    </DeleteButton>
                  ) : null}{" "}
                  {item.name}
                </CustomList>
              </>
            );
          })
        ) : (
          <EmptyData>No Data</EmptyData>
        )}
        {this.props.isEdit && (
          <>
            <Input
              type="text"
              value={this.props.newItem}
              placeholder="Add new item"
              onChange={e => this.props.handleChange(e.target.value)}
            />
            {filteredSuggestions.map((item, i) => (
              <CustomList
                key={i}
                onClick={() => this.props.handleChange(item.name)}
              >
                {item.name}
              </CustomList>
            ))}
            <Button onClick={this.props.handleAddItem}>Add new item</Button>
          </>
        )}
      </Wrapper>
    );
  }
}

export default HOC(list)(List);
