import { door } from "@/core/constants/assets";
import { Box, Image, Text } from "@chakra-ui/react";
import { useState } from "react";

interface DoorProps {
  title: string;
  body: string;
}

function Door({ title, body }: DoorProps) {
  const [hover, setHover] = useState<boolean>(false);

  return (
    <Box
      height="70vh"
      position="relative"
      onMouseEnter={() => setHover(true)}
      onMouseLeave={() => setHover(false)}
    >
      <Image src={door} alt="door" height="full" width="full" zIndex={0} />

      <Box
        position="absolute"
        top="6%"
        left="8.3%"
        w="85%"
        h="88%"
        bg="linear-gradient(to bottom, rgb(87, 69, 104), #2F2F2F)"
        opacity={hover ? 0.3 : 0}
        transition="opacity 1s ease"
        pointerEvents="none"
        zIndex={5}
      />

      <Text
        position="absolute"
        top="15%"
        left="52%"
        transform="translateX(-50%)"
        fontSize="1.3rem"
        textAlign="center"
        width="100%"
        zIndex={10}
      >
        {title}
      </Text>

      <Text
        position="absolute"
        top="37%"
        left="22%"
        fontSize="1.13rem"
        width="70%"
        zIndex={10}
      >
        {body}
      </Text>
    </Box>
  );
}

export default Door;
