import { NavLink } from "react-router-dom";
import styled from "styled-components";

export default function ButtonCreate() {
  return (
    <Nav>
      <LinkStyled to="/">Create game</LinkStyled>
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
`;
const Nav = styled.nav`
  display: flex;
  justify-content: space-between;
  background: grey;
  border: solid;
  border-width: 1px;
`;
