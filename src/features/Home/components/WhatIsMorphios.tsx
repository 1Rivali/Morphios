import {
  icWhatIsMorph1,
  icWhatIsMorph2,
  icWhatIsMorph3,
  shadow,
} from "@/core/constants/assets";
import {
  Box,
  HStack,
  Image,
  Span,
  Text,
  useBreakpointValue,
} from "@chakra-ui/react";

const WhatIsMorphios = () => {
  const icons = [icWhatIsMorph1, icWhatIsMorph2, icWhatIsMorph3];

  // Responsive values for paddings and layout
  const paddingLeft = useBreakpointValue({
    base: "1rem",
    md: "4rem",
    lg: "8rem",
  });
  const paddingRight = useBreakpointValue({
    base: "1rem",
    md: "2rem",
    lg: "12rem",
  });
  const paddingTop = useBreakpointValue({
    base: "2rem",
    md: "4rem",
    lg: "10rem",
  });
  const flexDirection = useBreakpointValue({ base: "column", md: "row" });
  const alignItems = useBreakpointValue({ base: "center", md: "start" });
  const boxWidth = useBreakpointValue({ base: "100%", md: "60%", lg: "50%" });
  const textWidth = useBreakpointValue({ base: "100%", md: "90%", lg: "70%" });
  const imageMarginTop = useBreakpointValue({ base: "2rem", md: "0" });
  const imageWidth = useBreakpointValue({
    base: "100%",
    md: "auto",
    lg: "auto",
  });
  const imageMaxWidth = useBreakpointValue({
    base: "350px",
    md: "400px",
    lg: "500px",
  });

  return (
    <HStack
      w="full"
      h="full"
      justifyContent={{ base: "center", md: "space-between" }}
      alignItems={alignItems}
      pl={paddingLeft}
      pr={paddingRight}
      pt={paddingTop}
      flexDirection={flexDirection}
      gap={{ base: "2rem", md: "2rem", lg: "0" }}
    >
      <Box
        display="flex"
        flexDir="column"
        alignItems={{ base: "center", md: "start" }}
        justifyContent="start"
        width={boxWidth}
        gap="1rem"
        mb={{ base: "2rem", md: "0" }}
      >
        <Text
          fontSize={{ base: "2xl", md: "4xl", lg: "6xl" }}
          width={textWidth}
          fontWeight="bolder"
          textAlign={{ base: "center", md: "left" }}
        >
          What is Morphios?
        </Text>
        <Text
          fontFamily="roboto"
          fontSize={{ base: "md", md: "xl", lg: "2xl" }}
          textAlign={{ base: "center", md: "left" }}
        >
          Not just a show{" "}
          <Span fontWeight="bolder" fontFamily="roboto">
            An Experience
          </Span>
        </Text>
        <Text
          fontFamily="roboto"
          fontWeight="lighter"
          textAlign={{ base: "center", md: "left" }}
        >
          <Span fontWeight="bold" fontFamily="roboto">
            Morphios
          </Span>{" "}
          is a home for the useen. A house of mirrors, rituals, and revelations
        </Text>
        <Text
          fontFamily="roboto"
          fontWeight="light"
          textAlign={{ base: "center", md: "left" }}
        >
          <Span fontFamily="roboto" fontWeight="bold">
            We craft performances
          </Span>{" "}
          that stir the soul —{" "}
          <Span fontFamily="roboto" color="#B2835A" fontWeight="bold">
            {" "}
            blending magical performances, mentalism,
          </Span>
          <Span fontFamily="roboto"> and </Span>
          <Span fontFamily="roboto" color="#B2835A" fontWeight="bold">
            storytelling.
          </Span>
        </Text>
        <HStack justifyContent={{ base: "center", md: "flex-start" }}>
          {icons.map((i, idx) => (
            <Image
              key={idx}
              src={i}
              width={{ base: "2.2rem", md: "2.5rem", lg: "3rem" }}
              height={{ base: "2.2rem", md: "2.5rem", lg: "3rem" }}
            />
          ))}
        </HStack>
      </Box>
      <Image
        src={shadow}
        borderRadius="3xl"
        mt={imageMarginTop}
        width={imageWidth}
        maxW={imageMaxWidth}
        objectFit="cover"
        alignSelf={{ base: "center", md: "flex-start" }}
      />
    </HStack>
  );
};

export default WhatIsMorphios;
