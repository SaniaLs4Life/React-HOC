import styled from "styled-components";

export const Input = styled.input`
  padding: 10px;
  border: none;
  border: 1px solid #ddd;
  outline: none;
  margin-top: 15px;
  margin-bottom: 15px;
`;
export const Button = styled.button`
  padding: 10px;
  border: none;
  background-color: #069;
  color: #fff;
  font-weight: bold;
  border-radius: 3px;
  cursor: pointer;
  outline: none;
  &:active {
    position: relative;
    top: 1px;
  }
`;
export const CustomHeader = styled.div`
  padding: 10px;
  font-weight: bold;
  width: 300px;
  margin: auto;
`;

export const CustomButton = styled.div`
color: #069;
border: 1px solid #069;
width: 50px;
text-align:center;
padding: 5px;
border-radius: 3px;
cursor: pointer;
float: right;
&:hover {
    background: #069;
    color: #FFF;
}
`;

export const Wrapper = styled.div`
  padding: 5px;
  border-radius: 3px;
  text-align: center;
`;
export const CustomList = styled.div`
  padding: 5px;
  width: 300px;
  text-align: center;
  margin: auto;
  cursor: pointer;
  margin-top: 25px;
  font-weight: bold;
  &:nth-child(odd) {
    background-color: #eee;
  }
`;

export const DeleteButton = styled.span`
  padding: 4px;
  border: 1px solid red;
  color: red;
  border-radius: 3px;
  font: 10px Arial;
  float: left;
  &:hover {
    background: red;
    color: #fff;
  }
`;

export const EmptyData = styled.div`
  margin: auto;
  width: 300px;
  border: 1px solid #ddd;
  border-radius: 3px;
  font-weight: bold;
  padding: 10px;
  margin-top: 25px;
`;
export default {
  Input,
  Button,
  CustomHeader,
  CustomButton,
  Wrapper,
  CustomList,
  DeleteButton,
  EmptyData
};
