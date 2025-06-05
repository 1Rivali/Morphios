import { Box } from "@chakra-ui/react";
import DoorDetailsSection from "./components/DoorDetailsSection";
import DoorsSection from "./components/DoorsSection";
import { HeroSection } from "./components/HeroSection";
import PillarsSection from "./components/PillarsSection";
import { Section02 } from "./components/Section02";

export default function HomePage() {
  return (
    <Box width={"full"} overflow={"hidden"}>
      <HeroSection />
      <Section02 />
      <DoorsSection />
      <PillarsSection />
      <DoorDetailsSection />
    </Box>
  );
}
