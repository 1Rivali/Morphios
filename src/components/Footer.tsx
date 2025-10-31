import {
  footerBg,
  icInstagram,
  icX,
  icYoutube,
  morphShape,
  logoAnimated,
} from "@/core/constants/assets";
import { homeDataAtom } from "@/store/global-store";
import {
  AspectRatio,
  Box,
  Center,
  Flex,
  HStack,
  Image,
  Text,
} from "@chakra-ui/react";
import { useAtomValue } from "jotai";
import Lottie from "react-lottie";
import { Link, useNavigate } from "react-router-dom";

const Footer = () => {
  const navigate = useNavigate();
  const homeData = useAtomValue(homeDataAtom)
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
      <Box flex={1} display={"flex"} flexDir={"column"} gap={"1.5rem"}>
        <AspectRatio
          ratio={62 / 49}
          width={{ base: "20vh", lg: "20vh" }}
          mt={{ base: "10vh", lg: "0" }}
          onClick={() => navigate("/")}
          cursor={"pointer"}
        >
          <Lottie
            options={{ animationData: logoAnimated, loop: true }}
            height={"100%"}
          />
        </AspectRatio>
        {
          homeData && <HStack>
            <Link to={homeData.instagram_link}>
              <Image src={icInstagram} />
            </Link>
            <Link to={homeData.youtube_link}>
              <Image src={icYoutube} />
            </Link>
            <Link to={homeData.x_link}>
              <Image src={icX} />
            </Link>
          </HStack>
        }

      </Box>
      <Box
        flex={6}
        display={"flex"}
        flexDir={"column"}
        gap={"1rem"}
        textAlign={"center"}
        justifyContent={"center"}
      >
        <Text
          fontFamily={"Cinzel Decorative"}
          fontSize={{ base: "lg", lg: "2xl" }}
        >
          May you leave changed. And may what was awakened never fall back
          asleep
        </Text>
        <Center>
          <Text
            p={"10px"}
            background={"#272727"}
            width={"fit-content"}
            borderRadius={"10px"}
            color={"white"}
            fontSize={{ base: "sm", lg: "md" }}
          >
            Email - {homeData?.email}
          </Text>
          <Text
            p={"10px"}
            ml={"10"}
            background={"#272727"}
            width={"fit-content"}
            borderRadius={"10px"}
            color={"white"}
            fontSize={{ base: "sm", lg: "md" }}
          >
            Phone - {homeData?.phone_number}
          </Text>
        </Center>
        <Text>{homeData?.location}</Text>
      </Box>
      <Image flex={1} src={morphShape} width={"20vh"} />
    </Flex>
  );
};

export default Footer;
