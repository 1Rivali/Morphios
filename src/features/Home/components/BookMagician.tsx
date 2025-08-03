import MorphButton from "@/components/MorphButton";
import { bookMagicianBgv2 } from "@/core/constants/assets";
import { Box, Text } from "@chakra-ui/react";
import { useNavigate } from "react-router-dom";

const BookMagician = () => {
  const navigate = useNavigate();
  return (
    <Box
      display={"flex"}
      flexDir={"column"}
      textAlign={"center"}
      justifyContent={"center"}
      alignItems={"center"}
      height={{ base: "60vh", md: "80vh", lg: "100vh" }}
      bg={`url("${bookMagicianBgv2}")`}
      bgSize={{ base: "cover", md: "contain" }}
      backgroundPosition={"center"}
      bgRepeat={"no-repeat"}
      mt={{ base: "4rem", md: "6rem", lg: "10rem" }}
      px={{ base: "1rem", sm: "2rem", md: "4rem" }}
    >
      <Text
        width={{ base: "90%", sm: "80%", md: "70%", lg: "60%", xl: "50%" }}
        fontSize={{ base: "xl", sm: "2xl", md: "3xl", lg: "4xl" }}
        fontWeight={"bold"}
        mb={{ base: "2rem", md: "3rem" }}
      >
        Don't just witness. Invite the strange, the beautiful, the
        unforgettable.
      </Text>
      <MorphButton
        width={{ base: "80%", lg: "30%" }}
        text="Book A Magician"
        onClick={() => navigate("/book-magician")}
      />
    </Box>
  );
};

export default BookMagician;
