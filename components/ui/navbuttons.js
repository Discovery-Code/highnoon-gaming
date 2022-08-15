import styled from "styled-components";
import { red } from "./colors";

const NavButton = styled.button`
  transform: skew(-10deg);
  border: 2px solid ${red};
  margin: 0 5px;
  padding: 8px;
  height: 40px;
  text-transform: uppercase;
  transition: 300ms all ease-in-out;

  &:hover {
    background: ${red};
  }
`;

export const Button = (props) => {
  return <NavButton>{props.children}</NavButton>;
};
