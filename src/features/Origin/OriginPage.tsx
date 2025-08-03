import MorphButton from "@/components/MorphButton";
import {
  icTransformation,
  invitation,
  layers,
  logoNoTitle,
  MainfestoBookBg,
  morphicMentalism,
  originBg,
  originWhiteAni,
  scienceMystrey,
  sharedMoment,
  transformationBg,
} from "@/core/constants/assets";
import { Box, Center, Image, Span, Text } from "@chakra-ui/react";
import { useNavigate } from "react-router-dom";

const sections = [
  { img: invitation, asp: 1440 / 525 },
  { img: layers, asp: 1440 / 550 },
  { img: sharedMoment, asp: 1440 / 543 },
  { img: scienceMystrey, asp: 1440 / 488 },
];

export default function OriginPage() {
  const navigate = useNavigate();
  return (
    <Box position={"relative"} top={"0"} width={"100%"} overflow={"hidden"}>
      <Box
        h={{ base: "100vh", lg: "120vh" }}
        width={"100%"}
        background={`url(${originBg})`}
        backgroundRepeat={"no-repeat"}
        backgroundSize={"cover"}
        backgroundPosition={"center"}
        pt={"20vh"}
        display={"flex"}
        flexDir={"column"}
        alignItems={"center"}
        pos={"relative"}
        zIndex={2}
      >
        <Image src={logoNoTitle} />
        <Text
          fontFamily={`"Cinzel Decorative"`}
          fontSize={{ base: "2xl", lg: "5xl" }}
          fontWeight={"bold"}
        >
          Welcome to Morphios
        </Text>
        <Text
          fontSize={{ base: "md", lg: "xl" }}
          fontWeight={"bold"}
          mb={"1rem"}
        >
          At Morphios, we do not merely entertain
        </Text>
        <Text fontWeight={"light"}>
          we invite you to step into the extraordinary.
        </Text>
      </Box>
      <Center transform={"translate(0, -50%)"} pos={"relative"} zIndex={0}>
        <Image src={originWhiteAni} />
      </Center>

      <Box>
        {sections.map((s) => (
          <Image src={s.img} width={"full"} aspectRatio={s.asp} />
        ))}
      </Box>

      <Box
        bg={`url("${transformationBg}")`}
        display={"flex"}
        flexDir={"column"}
        justifyContent={"start"}
        alignItems={"center"}
        bgRepeat={"no-repeat"}
        bgSize={{ base: "cover", md: "contain" }}
        backgroundPosition={"center"}
        height={{ base: "80vh", md: "100vh", lg: "120vh" }}
        py={{ base: "4rem", md: "6rem", lg: "10rem" }}
        px={{ base: "1rem", sm: "2rem", md: "4rem" }}
      >
        <Image
          src={icTransformation}
          height={{ base: "4rem", sm: "5rem", md: "6rem", lg: "7rem" }}
          width={{ base: "4rem", sm: "5rem", md: "6rem", lg: "7rem" }}
        />
        <Text
          mt={{ base: "1rem", md: "2rem" }}
          fontSize={{ base: "2xl", sm: "3xl", md: "4xl" }}
          fontWeight={"bold"}
          textAlign={"center"}
        >
          mystery, transformation, becoming
        </Text>
        <Text
          mt={{ base: "1rem", md: "2rem" }}
          fontFamily={"roboto"}
          fontSize={{ base: "lg", sm: "xl", md: "2xl" }}
          width={{ base: "90%", sm: "85%", md: "80%", lg: "70%" }}
          textAlign={"center"}
        >
          At{" "}
          <Span fontWeight={"bold"} fontFamily={"roboto"}>
            Morphios, we are the bridge between the known and the unknown
          </Span>
          ... <br /> Step into the mystery. Welcome the transformation. Discover
          the beauty of becoming
        </Text>
        <Text
          mt={{ base: "2rem", md: "3rem" }}
          fontFamily={"roboto"}
          fontSize={{ base: "2xl", sm: "3xl", md: "4xl" }}
          fontWeight={"lighter"}
          mb={{ base: "1rem", md: "1.5rem" }}
          textAlign={"center"}
        >
          Experience Morphios Now
        </Text>
        <MorphButton
          text="Book A Magician"
          width={{ base: "80%", lg: "15%" }}
          onClick={() => navigate("/book-magician")}
        />
      </Box>
      <Center my={"10rem"} px={"1rem"}>
        <Image src={morphicMentalism} aspectRatio={1073 / 1196} />
      </Center>
      <Box
        mt={"5rem"}
        width={"full"}
        aspectRatio={1518 / 522}
        background={`url("${MainfestoBookBg}")`}
        backgroundRepeat={"no-repeat"}
        backgroundPosition={"center"}
        backgroundSize={"cover"}
        backgroundColor={"black"}
        display={"flex"}
        flexDir={"column"}
        justifyContent={"center"}
        alignItems={"center"}
        textAlign={"center"}
        gap={{ base: "0.5rem", lg: "3rem" }}
      >
        <Text
          fontSize={{ base: "sm", lg: "3xl" }}
          fontWeight={"bold"}
          fontFamily={"Cinzel Decorative"}
        >
          Leave behind the expected. Begin something unforgettable.
        </Text>
        <MorphButton
          text="Step Through"
          width={"fit-content"}
          onClick={() => navigate("/book-magician")}
        />
      </Box>
    </Box>
  );
}
