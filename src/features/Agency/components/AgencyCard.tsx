import MorphButton from "@/components/MorphButton";
import { Box, Flex, Heading, Image, Text } from "@chakra-ui/react";
import { useNavigate } from "react-router-dom";
interface AgencyCardProps {
  title: string;
  image: string;
  desc1: string;
  desc2: string;
  rowReversed?: boolean;
  showButton?: boolean;
}
export function AgencyCard({
  title,
  image,
  desc1,
  desc2,
  rowReversed,
  showButton,
}: AgencyCardProps) {
  const navigate = useNavigate();
  return (
    <Flex
      flexDir={{
        base: "column",
        lg: rowReversed ? "row-reverse" : "row",
      }}
      justifyContent={"space-between"}
      alignItems={{
        lg: "start",
        base: "center",
      }}
      pt={"4rem"}
      px={{ base: "2rem", lg: "10rem" }}
      width={"full"}
    >
      <Box
        pt={"4rem"}
        display={"flex"}
        flexDir={"column"}
        justifyContent={"space-between"}
        gap={"2rem"}
      >
        <Heading
          ml={{ base: "0", lg: rowReversed ? "10rem" : "0" }}
          fontWeight={"extrabold"}
          lineHeight={"2rem"}
          fontSize={{ base: "3xl", lg: "4xl" }}
        >
          {title}
        </Heading>
        <Text
          ml={{ base: "0", lg: rowReversed ? "10rem" : "0" }}
          width={{ base: "full", lg: "60%" }}
        >
          {desc1}
        </Text>
        <Text
          ml={{ base: "0", lg: rowReversed ? "10rem" : "0" }}
          width={{ base: "full", lg: "60%" }}
        >
          {desc2}
        </Text>
        {showButton && (
          <MorphButton
            text="Book A Magician"
            width={{ base: "100%", lg: "50%" }}
            onClick={() => navigate("/book-magician")}
          />
        )}
      </Box>
      <Image width={{ base: "full", lg: "60vw" }} src={image} />
    </Flex>
  );
}
