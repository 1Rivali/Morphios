// src/components/BottomSection.jsx
import { blackAnimation } from "@/core/constants/assets";
import { MotionText } from "@/core/utils/motion-components";
import { Box } from "@chakra-ui/react";
import { useAnimation, useInView } from "framer-motion";
import { useEffect, useRef } from "react";

export function Section02() {
  const controls = useAnimation();
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, amount: 0.5 });
  useEffect(() => {
    async function sequence() {
      await controls.start({
        opacity: 1,
        transition: { duration: 1, ease: "easeOut" },
      });

      await controls.start({
        y: 0,
        x: 0,
        transition: { duration: 1.5, ease: "easeOut" },
      });
      await controls.start({
        x: [-20, -18, -16, -14, 0],
        textShadow: [
          `
    1px 1px 0 #ccc,
    2px 2px 0 #bbb,
    3px 3px 0 #aaa,
    4px 4px 0 #999,
    5px 5px 0 #888
  `,
          `0`,
        ],
        // skew: [0, 12, 10, 6, 0],
        opacity: [1, 0.9, 0.8, 0.7, 0.6, 0.5, 0.6, 0.7, 0.8, 0.9, 1],
        transition: {
          duration: 1,
          ease: "circIn",
          times: [0, 0.15, 0.3, 0.45, 0.6, 0.8, 1],
        },
      });

      await controls.start({
        x: 0,
        skewX: 0,
        opacity: 1,
        transition: { duration: 1, ease: "easeInOut" },
      });
    }

    if (isInView) {
      sequence();
    }
  }, [controls, isInView]);
  return (
    <Box
      height="100vh"
      width="100%"
      background={`url("${blackAnimation}")`}
      backgroundRepeat="no-repeat"
      backgroundSize="contain"
      backgroundPosition="center"
      textAlign="center"
      display="flex"
      flexDir="column"
      justifyContent="center"
      overflow="hidden"
    >
      <MotionText
        initial={{ y: 75, x: 0, opacity: 0 }}
        ref={ref}
        animate={controls}
        style={{
          fontSize: "3.7rem",
          fontWeight: "700",
          willChange: "transform, opacity",
        }}
      >
        Morphios is a living practice.
      </MotionText>
      <MotionText
        fontSize="2rem"
        fontWeight="400"
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        viewport={{
          once: true,
          amount: 0.5,
        }}
        transition={{ duration: 2, delay: 2 }}
      >
        A whisper in performance
      </MotionText>
      <MotionText
        fontSize="2rem"
        fontWeight="400"
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        viewport={{
          once: true,
          amount: 0.5,
        }}
        transition={{ duration: 2, delay: 5 }}
      >
        A mirror in film
      </MotionText>
    </Box>
  );
}
