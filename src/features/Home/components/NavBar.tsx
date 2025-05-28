// src/components/NavBar.jsx
import { logo } from "@/core/constants/assets";
import { Box, HStack, Image, Text } from "@chakra-ui/react";

export function NavBar() {
  return (
    <HStack
      position="absolute"
      top={0}
      left={0}
      width="100%"
      p={4}
      zIndex={10}
      justifyContent="space-between"
      background="transparent"
    >
      <Box></Box>
      <Image src={logo} height="60px" />
      <Box></Box>
      <HStack gap={6} color="white">
        <Text cursor="pointer">Home</Text>
        <Text cursor="pointer">The Origin</Text>
        <Text cursor="pointer">Book a magician</Text>
        <Text cursor="pointer">Our Pillars</Text>
      </HStack>
      <Box width="25vw" />
    </HStack>
  );
}
