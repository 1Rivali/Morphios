import { doorsBg, purpleCircle } from "@/core/constants/assets";
import { MotionBox } from "@/core/utils/motion-components";
import { Box, Heading, HStack } from "@chakra-ui/react";
import Door from "./Door";

const DoorsSection = () => {
  return (
    <MotionBox
      initial={{ opacity: 0, y: 200 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{
        once: true,
        amount: 0.5,
      }}
      transition={{ duration: 3 }}
    >
      <Box
        background={`url("${doorsBg}")`}
        backgroundSize={"contain"}
        backgroundPosition={"bottom"}
        height={"100vh"}
        width={"full"}
        backgroundRepeat={"no-repeat"}
        display={"flex"}
        flexDir={"column"}
        justifyContent={"center"}
        textAlign={"center"}
      >
        <Heading as={"h1"} fontSize={"2.8rem"}>
          Enter through one of the two doors:
        </Heading>
        <HStack
          justifyContent={"center"}
          mt={"4rem"}
          textAlign={"start"}
          background={`url("${purpleCircle}")`}
          backgroundRepeat={"no-repeat"}
          backgroundSize={"contain"}
          backgroundPosition={"center"}
        >
          <Door
            title="The Agency"
            body="Performers of the unseen Experiences that don’t end when they’re over —
                  they echo."
          />
          <Box width={"2rem"} />
          <Door
            title="The Production House"
            body="Stories carved from silence. Cinematic reflections of memory, myth, and the moment."
          />
        </HStack>
      </Box>
    </MotionBox>
  );
};

export default DoorsSection;
