import MorphButton from "@/components/MorphButton";
import { bookMagician2 } from "@/core/constants/assets";
import { Box, Text } from "@chakra-ui/react";
import { useNavigate } from "react-router-dom";

const BookMagician2 = () => {
  const navigate = useNavigate();
  return (
    <Box
      display={"flex"}
      flexDir={"column"}
      textAlign={"center"}
      justifyContent={"center"}
      alignItems={"center"}
      height={{ base: "60vh", md: "80vh", lg: "100vh" }}
      bg={`url("${bookMagician2}")`}
      mt={{ base: "4rem", md: "6rem", lg: "10rem" }}
      bgRepeat={"no-repeat"}
      bgSize={{ base: "cover", md: "contain" }}
      backgroundPosition={"center"}
      px={{ base: "1rem", sm: "2rem", md: "4rem" }}
    >
      <Text
        width={{ base: "90%", sm: "80%", md: "70%", lg: "60%" }}
        fontSize={{ base: "lg", sm: "xl", md: "2xl" }}
        fontWeight={"light"}
        mb={{ base: "1.5rem", md: "2rem" }}
      >
        If you're ready to offer your guests more than entertainment — offer
        them something they'll carry with them
      </Text>
      <Text
        width={{ base: "90%", sm: "80%", md: "70%", lg: "60%", xl: "50%" }}
        fontSize={{ base: "2xl", sm: "3xl", md: "4xl" }}
        fontWeight={"bold"}
        mb={{ base: "1rem", md: "1.5rem" }}
      >
        Book a magician now
      </Text>
      <MorphButton
        width={{ base: "80%", lg: "20%" }}
        text="Step Through"
        fontSize="xl"
        p="1.4rem"
        onClick={() => navigate("/book-magician")}
      />
    </Box>
  );
};

export default BookMagician2;
