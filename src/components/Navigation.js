import { NavLink } from "react-router-dom";
import styled from "styled-components";

export default function Navigation() {
  return (
    <Nav>
      <LinkStyled to="/">Play</LinkStyled>
      <LinkStyled to="/history">History</LinkStyled>
    </Nav>
  );
}

const LinkStyled = styled(NavLink)`
  display: flex;
  justify-content: center;
  align-items: center;
  text-decoration: none;
  color: black;
  width: 100%;

  &.active {
    background: black;
    color: white;
  }
`;
const Nav = styled.nav`
  display: flex;
  justify-content: space-between;
  background: grey;
  color: white;
  border: solid;
  border-width: 1px;
`;
