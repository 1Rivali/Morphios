import { icPillar, purpleCircle } from "@/core/constants/assets";
import { Box, Flex, Heading, Image, Span, Text } from "@chakra-ui/react";
import Pillar from "./Pillar";

const PillarsSection = () => {
  return (
    <Box mt={"20vh"}>
      <Box
        width={"full"}
        display={"flex"}
        flexDir={"column"}
        alignItems={"center"}
        gap={"4"}
      >
        <Image src={icPillar} />
        <Heading fontWeight={"extrabold"} fontSize={"4xl"} mb={"2rem"}>
          The Pillars
        </Heading>
        <Text
          fontWeight={"light"}
          fontSize={{ base: "sm", lg: "xl" }}
          width={"100%"}
          textAlign={"center"}
          wordSpacing={"5px"}
        >
          In the world of{" "}
          <Span fontWeight={"bold"} fontSize={{ base: "md", lg: "2xl" }}>
            Morphios
          </Span>
          , there are paths.
        </Text>
        <Text
          fontSize={"sm"}
          width={{ base: "90%", lg: "30%" }}
          textAlign={"center"}
        >
          Each One a{" "}
          <Span fontSize={"md"} fontWeight={"bold"}>
            Threshold
          </Span>
          , Each One An Invitation into A Different form of{" "}
          <Span fontSize={"md"} fontWeight={"bold"}>
            Transformation
          </Span>
        </Text>
      </Box>

      <Flex
        flexDir={{ base: "column", lg: "row" }}
        justifyContent={"center"}
        alignItems={"center"}
        gap={"2rem"}
        mt={"4rem"}
        textAlign={"start"}
        background={`url("${purpleCircle}")`}
        backgroundRepeat={"no-repeat"}
        backgroundSize={"contain"}
        backgroundPosition={"center"}
      >
        <Pillar
          title="The path of memory"
          body="Where the pasts Transforms the now"
        />

        <Pillar
          title="The path of reverie"
          body="visions on the edge of conscientiousness"
        />

        <Pillar
          title="The path of Insights"
          body="Illumination through the Unseen"
        />
      </Flex>
    </Box>
  );
};

export default PillarsSection;
