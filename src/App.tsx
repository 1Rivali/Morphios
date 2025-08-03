import { Box } from "@chakra-ui/react";
import { Route, Routes } from "react-router-dom";
import "./App.css";
import Footer from "./components/Footer";
import { NavBar } from "./components/NavBar";
import ScrollToTop from "./components/ScrollToTop";
import { AgencyPage } from "./features/Agency";
import { BookMagicianPage } from "./features/BookMagician";
import { HomePage } from "./features/Home";
import { OriginPage } from "./features/Origin";
import ProductionHouse from "./features/ProductionHouse/ProductionHousePage";
import { PerformersPage } from "./features/Performers";

function App() {
  return (
    <Box>
      <ScrollToTop />
      <NavBar />
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/agency" element={<AgencyPage />} />
        <Route path="/origin" element={<OriginPage />} />
        <Route path="/production-house" element={<ProductionHouse />} />
        <Route path="/book-magician" element={<BookMagicianPage />} />
        <Route path="/performers" element={<PerformersPage />} />
      </Routes>
      <Footer />
    </Box>
  );
}

export default App;
