import { whatWeDoBorder } from "@/core/constants/assets";
import { AspectRatio, Box, Image, Text } from "@chakra-ui/react";

interface WhatWeDoCardProps {
  icon: string;
  title: string;
}

export function WhatWeDoCard({ icon, title }: WhatWeDoCardProps) {
  return (
    <AspectRatio ratio={507 / 190} width={{ base: "80vw", lg: "40vw" }}>
      <Box
        background={`url("${whatWeDoBorder}")`}
        bgSize="cover"
        backgroundPosition="center"
        bgRepeat="no-repeat"
      >
        <Box
          display={"flex"}
          flexDir={"column"}
          justifyContent={"center"}
          alignItems={"center"}
          textAlign={"center"}
        >
          <Image src={icon} width={{ base: "2rem", lg: "4rem" }} />
          <Text fontWeight={"bold"} fontSize={{ base: "sm", lg: "xl" }}>
            {title}
          </Text>
        </Box>
      </Box>
    </AspectRatio>
  );
}
