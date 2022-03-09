import styled from "styled-components";

function App() {
  return <h1>Scorekeeper</h1>;
}
function Button({ children, onClick, isDark }) {
  return (
    <ButtonStyled isDark={isDark} onClick={onClick}>
      {children}
    </ButtonStyled>
  );
}

const ButtonStyled = styled.button`
  background-color: ${(props) => (props.isDark ? "#666" : "#ddd")};
  color: ${(props) => (props.isDark ? "white" : "inherit")};
  border: none;
  padding: 4px 12px;
`;
export default App;
