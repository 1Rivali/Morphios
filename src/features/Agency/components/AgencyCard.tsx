import { Box, Flex, Heading, Image, Text } from "@chakra-ui/react";
interface AgencyCardProps {
  title: string;
  image: string;
  desc1: string;
  desc2: string;
  rowReversed?: boolean;
}
export function AgencyCard({
  title,
  image,
  desc1,
  desc2,
  rowReversed,
}: AgencyCardProps) {
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
      </Box>
      <Image width={{ base: "full", lg: "60vw" }} src={image} />
    </Flex>
  );
}
