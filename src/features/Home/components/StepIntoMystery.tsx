import MorphButton from "@/components/MorphButton";
import { stepIntoMystery } from "@/core/constants/assets";
import { Box, Text } from "@chakra-ui/react";
import { useNavigate } from "react-router-dom";

const StepIntoMystery = () => {
  const navigate = useNavigate();
  return (
    <Box
      display={"flex"}
      flexDir={"column"}
      textAlign={"center"}
      justifyContent={"center"}
      alignItems={"center"}
      height={{ base: "40vh", md: "80vh", lg: "100vh" }}
      bg={`url("${stepIntoMystery}")`}
      mt={{ base: "1rem", md: "4rem", lg: "10rem" }}
      bgRepeat={"no-repeat"}
      bgSize="cover"
      backgroundPosition={"center"}
      px={{ base: "1rem", sm: "2rem", md: "4rem" }}
    >
      <Text
        width={{ base: "90%", sm: "80%", md: "70%", lg: "60%", xl: "50%" }}
        fontSize={{ base: "2xl", sm: "3xl", md: "4xl" }}
        fontWeight={"bold"}
        mb={{ base: "1rem", md: "1.5rem" }}
      >
        Step Into the Mystery
      </Text>
      <Text
        width={{ base: "90%", sm: "80%", md: "70%", lg: "60%", xl: "50%" }}
        fontSize={{ base: "md", sm: "lg", md: "xl" }}
        fontWeight={"light"}
        mb={{ base: "1.5rem", md: "2rem" }}
      >
        Magic isn't something to escape into, but something to awaken in the
        world around us
      </Text>
      <MorphButton
        arrowIc={false}
        color="white"
        bgColor="black"
        width={{ base: "80%", lg: "20%" }}
        text="Read The Full Manifesto"
        fontSize="xl"
        p="1.5rem"
        onClick={() => navigate("/origin")}
      />
    </Box>
  );
};

export default StepIntoMystery;
