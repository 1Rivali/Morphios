import MorphButton from "@/components/MorphButton";
import { tawfeek } from "@/core/constants/assets";
import { Box, HStack, Image, Text } from "@chakra-ui/react";
import { useNavigate } from "react-router-dom";

export interface MindsCardProps {
  name: string;
  resp: string;
  description: string;
  image?: string;
}

const MindsCard = ({
  name,
  resp,
  description,
  image = tawfeek,
}: MindsCardProps) => {
  const navigate = useNavigate();
  return (
    <HStack
      alignItems={"start"}
      gap={{ base: "1rem", md: "2rem" }}
      flexDirection={{ base: "column", md: "row" }}
    >
      <Image
        src={image}
        height={{ base: "full", md: "320px" }}
        width={{ base: "100%", md: "auto" }}
        objectFit={"cover"}
        borderRadius={{ base: "8px", md: "0" }}
      />
      <Box
        display={"flex"}
        flexDir={"column"}
        justifyContent={"space-between"}
        alignItems={"start"}
        gap={"0.5rem"}
        height={"100%"}
        width={{ base: "100%", md: "auto" }}
      >
        <Text
          fontFamily={"Cinzel Decorative"}
          fontWeight={"bold"}
          fontSize={{ base: "xl", sm: "2xl", md: "3xl" }}
          textAlign={"left"}
        >
          {name}
        </Text>
        <Text
          fontFamily={"roboto"}
          fontSize={{ base: "md", md: "lg" }}
          width={{ base: "100%", md: "80%" }}
          textAlign={"left"}
        >
          {resp}
        </Text>
        <Text
          fontFamily={"roboto"}
          fontSize={{ base: "sm", md: "md" }}
          fontWeight={"extralight"}
          textAlign={"left"}
        >
          {description}
        </Text>
        <MorphButton
          color="white"
          bgColor="#0C0C0C"
          text="EXPLORE MORE"
          width={{ base: "100%", lg: "50%" }}
          arrowIc={false}
          onClick={() => navigate(`/performers`)}
        />
      </Box>
    </HStack>
  );
};

export default MindsCard;
