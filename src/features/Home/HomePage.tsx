import { Box } from "@chakra-ui/react";
import DoorsSection from "./components/DoorsSection";
import { HeroSection } from "./components/HeroSection";
import { Section02 } from "./components/Section02";

export default function HomePage() {
  return (
    <Box>
      <HeroSection />
      <Section02 />
      <DoorsSection />
    </Box>
  );
}
