import React from "react";
import {
  Container,
  Header,
  Button,
  List,
  ListText,
  Input,
  DeleteButton
} from "./custom-components/CustomComponents";
import HOC from "./HOC";
import {
  SortableContainer,
  SortableElement,
  SortableHandle
} from "react-sortable-hoc";

const DragHandle = SortableHandle(() => (
  <img
    style={{ float: "right", cursor: "pointer" }}
    width="20"
    height="20"
    src="https://cdn2.iconfinder.com/data/icons/4web-3/139/menu-256.png"
    alt="sort-icon"
  />
));

const SortableItem = SortableElement(
  ({ value, index, handleDelete, isEdit }) => {
    return (
      <List>
        {isEdit ? (
          <React.Fragment>
            <DeleteButton onClick={() => handleDelete(index)}>-</DeleteButton>
          </React.Fragment>
        ) : null}
        <DragHandle />
        <ListText>{value}</ListText>
      </List>
    );
  }
);

const Sort = SortableContainer(({ children }) => {
  return <ul>{children}</ul>;
});

const data = ["Angelina Jolie", "Johny Deep"];
const Cast = props => {
  const {
    list,
    handleDelete,
    handleChange,
    newItem,
    handleAddItem,
    isEdit,
    toggleMode,
    onSortEnd
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
      <Sort onSortEnd={onSortEnd} useDragHandle>
        {list.map((value, index) => (
          <SortableItem
            isEdit={isEdit}
            handleDelete={handleDelete}
            key={`item-${index}`}
            index={index}
            value={value}
          />
        ))}
      </Sort>
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
