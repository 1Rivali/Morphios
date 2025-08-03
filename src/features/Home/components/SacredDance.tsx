import { sacredDanceSection } from "@/core/constants/assets";
import { Box } from "@chakra-ui/react";

const SacredDance = () => {
  return (
    <Box
      height={{ base: "40vh", md: "100vh" }}
      bg={`url("${sacredDanceSection}")`}
      bgRepeat={"no-repeat"}
      bgSize={"contain"}
      bgPos={"center"}
    ></Box>
  );
};

export default SacredDance;
