// src/components/HeroOverlay.jsx
import { homeBannerPattern } from "@/core/constants/assets";
import { Box } from "@chakra-ui/react";

export function HeroOverlay() {
  return (
    <>
      {/* <Image
        src={banner}
        position="absolute"
        top={0}
        left={0}
        width="100%"
        height="100%"
        objectFit="cover"
        zIndex={0}
      /> */}
      <Box
        position="absolute"
        top={0}
        left={0}
        width="100%"
        height="100%"
        background="black"
        opacity={0.6}
      />
      <Box
        position="absolute"
        top={0}
        left={0}
        width="100%"
        height="100%"
        bg={`url("${homeBannerPattern}")`}
        opacity={0.15}
      />
    </>
  );
}
