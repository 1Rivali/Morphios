// src/components/HeroOverlay.jsx
import { banner } from "@/core/constants/assets";
import { Box, Image } from "@chakra-ui/react";

export function HeroOverlay() {
  return (
    <>
      <Image
        src={banner}
        position="absolute"
        top={0}
        left={0}
        width="100%"
        height="100%"
        objectFit="cover"
        zIndex={0}
      />
      <Box
        position="absolute"
        top={0}
        left={0}
        width="100%"
        height="100%"
        background="black"
        opacity={0.85}
      />
    </>
  );
}
