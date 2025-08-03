// src/components/HeroTextBlock.jsx
import MorphButton from "@/components/MorphButton";
import { logoAnimated } from "@/core/constants/assets";
import { MotionText } from "@/core/utils/motion-components";
import { Box, Center, Text } from "@chakra-ui/react";
import Lottie from "react-lottie";
import { useNavigate } from "react-router-dom";

export function HeroTextBlock() {
  const navigate = useNavigate();
  return (
    <Box
      position="relative"
      top={{ base: "25%", lg: "0%" }}
      flexDir="column"
      textAlign="center"
      width="full"
      justifyContent={"center"}
    >
      <Lottie
        options={{ animationData: logoAnimated, loop: true }}
        width={"10rem"}
        height={"10rem"}
      />
      <MotionText
        fontWeight="700"
        fontSize={{ base: "2rem", lg: "3.4rem" }}
        initial={{ x: -100, opacity: 0 }}
        whileInView={{ x: 0, opacity: 1 }}
        viewport={{
          once: true,
          amount: 0.5,
        }}
        transition={{ duration: 2, ease: "easeOut", delay: 0 }}
      >
        <Text
          fontWeight={"light"}
          opacity={"0.5"}
          fontSize={{ base: "1.2rem", lg: "2.2rem" }}
        >
          WHAT HAPPENS HERE
        </Text>
        <Text fontWeight={"extrabold"} opacity={"0.5"}>
          {" "}
          DOESN’T VANISH <br /> IT REMAINS
        </Text>
      </MotionText>

      <MotionText
        fontWeight="700"
        fontSize={{ base: "1rem", lg: "1.3rem" }}
        width={{ base: "70%", lg: "full" }}
        justifySelf={"center"}
        background="linear-gradient(90deg, #FFF 0%, #999 100%)"
        backgroundClip="text"
        style={{
          WebkitBackgroundClip: "text",
          WebkitTextFillColor: "transparent",
        }}
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 0.5 }}
        viewport={{
          once: true,
          amount: 0.5,
        }}
        transition={{ duration: 6, delay: 5 }}
        textAlign={"center"}
      >
        In memory. In meaning. <br /> In the ones who witness
      </MotionText>
      <Center
        justifySelf={"center"}
        mt={"2rem"}
        width={{ base: "50%", lg: "20%" }}
      >
        <MorphButton
          text="Book A Magician"
          onClick={() => navigate("/book-magician")}
        />
      </Center>
    </Box>
  );
}
