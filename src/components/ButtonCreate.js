import { NavLink } from "react-router-dom";
import styled from "styled-components";

export default function ButtonCreate({ name }) {
  return (
    <Nav>
      <LinkStyled to="/Create">{name}</LinkStyled>
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
  margin: 10px 0px 10px 0px;
  width: 100%;
`;
