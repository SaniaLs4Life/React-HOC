import styled from "styled-components";

export const Container = styled.div`
  width: 400px;
  margin: auto;
  background: #f6f7f6;
  padding-top: 5px;
  padding-bottom: 10px;
  padding-right: 10px;
  border-radius: 3px;
  margin-top: 150px;
  max-height: 400px;
  overflow-y: scroll;
  overflow-x: hidden;
`;

export const Header = styled.div`
  padding: 5px;
  position: relative;
  border-bottom: 1px solid #eee;
  height: 25px;
`;
export const Button = styled.div`
  color: #069;
  cursor: pointer;
  width: 40px;
  position: absolute;
  right: 5px;
`;

export const List = styled.div`
  border-bottom: 1px solid #eee;
  padding: 5px;
  white-space: nowrap;
  overflow: hidden;
  text-overflow: ellipsis;
`;
export const ListText = styled.span`
  margin-left: 15px;
`;

export const Input = styled.input`
  padding: 5px;
  border: none;
  border-left: 3px solid #069;
  width: 300px;
  background: transparent;
  margin-left: 70px;
  outline: none;
`;

export const DeleteButton = styled.button`
  width: 20px;
  height: 20px;
  border-radius: 10px;
  background: red;
  font-weight: bold;
  color: #fff;
  border: none;
  outline: none;
  cursor: pointer;
`;
