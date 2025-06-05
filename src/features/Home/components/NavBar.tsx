// src/components/NavBar.jsx
import { icMenu, logo } from "@/core/constants/assets";
import { Box, HStack, Image, Text, useBreakpointValue } from "@chakra-ui/react";

export function NavBar() {
  const isMobile = useBreakpointValue({ base: true, lg: false });
  return (
    <HStack
      position="sticky"
      top={0}
      left={0}
      width="100%"
      p={4}
      zIndex={10}
      justifyContent="space-between"
      background="transparent"
    >
      {!isMobile && <Box></Box>}
      <Image src={logo} height={{ base: "40px", lg: "60px" }} />
      {!isMobile && (
        <>
          <Box></Box>
          <HStack gap={6} color="white">
            <Text cursor="pointer">Home</Text>
            <Text cursor="pointer">The Origin</Text>
            <Text cursor="pointer">Book a magician</Text>
            <Text cursor="pointer">Our Pillars</Text>
          </HStack>
          <Box width="25vw" />
        </>
      )}
      {isMobile && <Image src={icMenu} />}
    </HStack>
  );
}
