import { pillar } from "@/core/constants/assets";
import { AspectRatio, Box, Circle, Text } from "@chakra-ui/react";
import { useState } from "react";
interface PillarProps {
  title: string;
  body: string;
}
function Pillar({ title, body }: PillarProps) {
  const [hover, setHover] = useState(false);

  return (
    <AspectRatio ratio={278 / 486} w={{ base: "60%", lg: "18vw" }}>
      <Box
        onMouseEnter={() => setHover(true)}
        onMouseLeave={() => setHover(false)}
        background={`url("${pillar}")`}
        backgroundRepeat={"no-repeat"}
        backgroundPosition={"center"}
        backgroundSize={"cover"}
        backgroundColor={hover ? "#252A71" : "black"}
      >
        <Box
          display={"flex"}
          flexDir={"column"}
          justifyContent={"start"}
          alignItems={"center"}
          height={"full"}
          width={"full"}
          paddingTop={"20%"}
          textAlign={"center"}
        >
          <Circle
            backgroundColor={"white"}
            width={"3.5rem"}
            height={"3.5rem"}
            mb={"10%"}
          />
          <Text fontSize={"3xl"} mb={"15%"}>
            {title}
          </Text>
          <Text textAlign={"start"} width={"90%"} fontSize={"xl"}>
            {body}
          </Text>
        </Box>
      </Box>
    </AspectRatio>
  );
}

export default Pillar;
