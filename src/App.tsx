import { Box } from "@chakra-ui/react";
import { Route, Routes } from "react-router-dom";
import "./App.css";
import { AgencyPage } from "./features/Agency";
import { HomePage } from "./features/Home";
import { NavBar } from "./features/Home/components/NavBar";

function App() {
  return (
    <Box>
      <NavBar />
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/agency" element={<AgencyPage />} />
      </Routes>
    </Box>
  );
}

export default App;
