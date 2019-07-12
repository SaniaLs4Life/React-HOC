import React from "react";
import {
  Container,
  Header,
  Button,
  List,
  ListText,
  customImage,
  Input
} from "./custom-components/CustomComponents";
import HOC from "./HOC";

const data = ["Angelina Jolie", "Johny Deep"];
const Cast = props => {
  const {
    list,
    handleDelete,
    handleChange,
    newItem,
    handleAddItem,
    isEdit,
    toggleMode
  } = props;
  return (
    <Container>
      <Header>
        {isEdit ? (
          <Button onClick={() => toggleMode()}>Done</Button>
        ) : (
          <Button onClick={() => toggleMode()}>Edit</Button>
        )}
      </Header>
      {list.map((item, i) => (
        <List>
          {isEdit ? (
            <React.Fragment>
              <img
                onClick={() => handleDelete(i)}
                style={{ verticalAlign: "middle", cursor: "pointer" }}
                width="20"
                height="20"
                src="https://cdn4.iconfinder.com/data/icons/gradient-ui-1/512/minus-256.png"
                alt="icon"
              />
              <img
                style={{ float: "right", cursor: "pointer" }}
                width="20"
                height="20"
                src="https://cdn2.iconfinder.com/data/icons/4web-3/139/menu-256.png"
                alt="sort-icon"
              />
            </React.Fragment>
          ) : null}
          <ListText>{item}</ListText>
        </List>
      ))}
      {isEdit && (
        <Input
          value={newItem}
          onKeyPress={ev => {
            if (ev.key === "Enter") {
              ev.preventDefault();
              handleAddItem();
            }
          }}
          onChange={e => handleChange(e.target.value)}
          placeholder="Add cast"
        />
      )}
    </Container>
  );
};

export default HOC(data)(Cast);
