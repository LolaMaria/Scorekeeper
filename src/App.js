import { Routes, Route } from "react-router-dom";
import Home from "./components/pages/Home";
import History from "./components/pages/History";
import CreatePlay from "./components/pages/Create";
import useToggle from "./hooks/useToggle";
import styled, { css } from "styled-components";

export default function App() {
  const [darkMode, toggleDarkMode] = useToggle(false);
  return (
    <AppContainer darkMode={darkMode}>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/History" element={<History />} />
        <Route path="/Create" element={<CreatePlay />} />
      </Routes>
      <Button onClick={toggleDarkMode}>
        {darkMode ? "Light Mode" : "Dark Mode"}
      </Button>
    </AppContainer>
  );
}

const AppContainer = styled.div`
  display: grid;
  gap: 20px;
  padding: 20px;

  ${({ darkMode }) =>
    darkMode &&
    css`
      background-color: #1c0000;
      color: #eee;
    `}
`;

const Button = styled.button`
  background-color: #ccc;
  padding: 5px 10px;
  border: none;
  border-radius: 14px;
  width: 30%;
`;
