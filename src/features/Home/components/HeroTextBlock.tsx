// src/components/HeroTextBlock.jsx
import { arrowDown } from "@/core/constants/assets";
import { MotionBox, MotionText } from "@/core/utils/motion-components";
import { Box, Center } from "@chakra-ui/react";

export function HeroTextBlock() {
  return (
    <Box
      position="relative"
      top="38%"
      flexDir="column"
      textAlign="center"
      width="full"
    >
      <MotionText
        fontWeight="700"
        fontSize="3.4rem"
        initial={{ y: -100, opacity: 0 }}
        whileInView={{ y: 0, opacity: 1 }}
        viewport={{
          once: true,
          amount: 0.5,
        }}
        transition={{ duration: 2, ease: "easeOut", delay: 0 }}
      >
        Where transformation moves
      </MotionText>

      <MotionText
        fontWeight="700"
        fontSize="3.4rem"
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        viewport={{
          once: true,
          amount: 0.5,
        }}
        transition={{ duration: 2, delay: 3 }}
      >
        quietly beneath the surface
      </MotionText>

      <MotionText
        fontWeight="700"
        fontSize="1.5rem"
        mt="2rem"
        background="linear-gradient(90deg, #FFF 0%, #999 100%)"
        backgroundClip="text"
        style={{
          WebkitBackgroundClip: "text",
          WebkitTextFillColor: "transparent",
        }}
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        viewport={{
          once: true,
          amount: 0.5,
        }}
        transition={{ duration: 6, delay: 5 }}
      >
        What happens here doesn’t vanish — it remains
      </MotionText>

      <Center>
        <MotionBox
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{
            once: true,
            amount: 0.5,
          }}
          transition={{ duration: 3, delay: 8 }}
        >
          <Box pt="3rem">
            <img src={arrowDown} alt="Scroll down arrow" />
          </Box>
        </MotionBox>
      </Center>
    </Box>
  );
}
