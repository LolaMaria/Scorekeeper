import { Routes, Route } from "react-router-dom";

import Home from "./components/pages/Home";
import History from "./components/pages/History";
import CreatePlay from "./components/pages/Create";
//import styled from "styled-components";

function App() {
  return (
    <div>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/History" element={<History />} />
        <Route path="/Create" element={<CreatePlay />} />
      </Routes>
    </div>
  );
}
export default App;
