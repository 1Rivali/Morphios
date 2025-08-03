import {
  footerBg,
  icInstagram,
  icX,
  icYoutube,
  logo,
  morphShape,
} from "@/core/constants/assets";
import {
  AspectRatio,
  Box,
  Flex,
  HStack,
  Image,
  Text,
  useBreakpointValue,
} from "@chakra-ui/react";

const Footer = () => {
  const isMobile = useBreakpointValue({ base: true, lg: false });
  return (
    <Flex
      flexDir={{ base: "column", lg: "row" }}
      justifyContent={"center"}
      alignItems={"center"}
      gap={"4rem"}
      height={{ base: "100vh", lg: "50vh" }}
      p={"3rem"}
      background={`url("${footerBg}")`}
      bgSize="cover"
      backgroundPosition="center"
      bgRepeat="no-repeat"
    >
      <Box flex={2} display={"flex"} flexDir={"column"} gap={"1.5rem"}>
        <AspectRatio
          ratio={62 / 49}
          width={{ base: "20vh", lg: "20vh" }}
          mt={{ base: "10vh", lg: "0" }}
        >
          <Image src={logo} />
        </AspectRatio>
        <HStack>
          <Image src={icInstagram} />
          <Image src={icYoutube} />
          <Image src={icX} />
        </HStack>
      </Box>
      {isMobile && (
        <Box>
          <Text>Home</Text>
          <Text>The Agency</Text>
          <Text>The Production House</Text> <Text>Book a Magician</Text>{" "}
          <Text>Contact us</Text>
          <Text>The Origin</Text>
        </Box>
      )}
      {!isMobile && (
        <Box
          display={"flex"}
          flexDir={"row"}
          justifyContent={"space-between"}
          flex={4}
          width={"full"}
        >
          <Box display={"flex"} flexDir={"column"} gap={"1rem"}>
            <Text>Home</Text>
            <Text>The Agency</Text>
            <Text>The Production House</Text>
          </Box>
          <Box display={"flex"} flexDir={"column"} gap={"1rem"}>
            <Text>Book a Magician</Text>
            <Text>The Origin</Text>
          </Box>
          <Box display={"flex"} flexDir={"column"} gap={"1rem"}>
            <Text>Contact us</Text>
          </Box>
        </Box>
      )}
      <Image flex={1} src={morphShape} width={"20vh"} />
    </Flex>
  );
};

export default Footer;
