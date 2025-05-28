import { Box } from "@chakra-ui/react";
import { HeroOverlay } from "./HeroOverlay";
import { HeroTextBlock } from "./HeroTextBlock";
import { NavBar } from "./NavBar";

export function HeroSection() {
  return (
    <Box position="relative" width="100%" height="100vh" overflow="hidden">
      <NavBar />
      <HeroOverlay />
      <HeroTextBlock />
    </Box>
  );
}
