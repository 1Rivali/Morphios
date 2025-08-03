import {
  doorsBg,
  icAgency,
  icLock,
  icProductionHouse,
  purpleCircle,
} from "@/core/constants/assets";
import { MotionBox } from "@/core/utils/motion-components";
import { Box, Flex, Heading } from "@chakra-ui/react";
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
        width={"full"}
        backgroundRepeat={"no-repeat"}
        display={"flex"}
        flexDir={"column"}
        justifyContent={"center"}
        textAlign={"center"}
      >
        <Heading as={"h1"} fontSize={{ base: "1rem", lg: "2.8rem" }}>
          Enter through one of the two doors:
        </Heading>
        <Flex
          flexDir={{ base: "column", lg: "row" }}
          justifyContent={"center"}
          alignItems={"center"}
          mt={"4rem"}
          gap={"2rem"}
          textAlign={"start"}
          background={`url("${purpleCircle}")`}
          backgroundRepeat={"no-repeat"}
          backgroundSize={"contain"}
          backgroundPosition={"center"}
        >
          <Door
            to="/agency"
            icon={icAgency}
            title="The Agency"
            body="Performers of the unseen Experiences that don’t end when they’re over —
                  they echo."
          />

          <Door
            to="/production-house"
            icon={icProductionHouse}
            title="The Production House"
            body="Stories carved from silence. Cinematic reflections of memory, myth, and the moment."
          />

          <Door to="/agency" icon={icLock} title="Closed For Now" isSoon />
        </Flex>
      </Box>
    </MotionBox>
  );
};

export default DoorsSection;
