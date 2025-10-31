import { Box } from "@chakra-ui/react";
import { Route, Routes } from "react-router-dom";
import { useEffect } from "react";
import { useSetAtom } from "jotai";
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
import usePageViewTracker from "./lib/hooks/usePageViewTracker";
import { homeDataAtom } from "./store/global-store";
import { getHomeData } from "./features/Home/services/HomeService";

function App() {
  usePageViewTracker();
  const setHomeData = useSetAtom(homeDataAtom);

  useEffect(() => {
    const fetchHomeData = async () => {
      try {
        const response = await getHomeData();
        setHomeData(response.data);
      } catch (error) {
        console.error("Failed to fetch home data:", error);
      }
    };

    fetchHomeData();
  }, [setHomeData]);

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
