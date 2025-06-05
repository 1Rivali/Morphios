import { doorFrame, soonDoor } from "@/core/constants/assets";
import { AspectRatio, Box, Image, Text } from "@chakra-ui/react";
import { useState } from "react";
import { useNavigate } from "react-router-dom";
interface DoorProps {
  title: string;
  body?: string;
  icon: string;
  isSoon?: boolean;
  to: string;
}
const Door = ({ title, body, icon, isSoon = false, to }: DoorProps) => {
  const [hover, setHover] = useState(false);
  const navigate = useNavigate();
  return (
    <AspectRatio ratio={397 / 522} w={{ base: "70%", lg: "24vw" }}>
      <Box
        onClick={() => navigate(to)}
        background={`url("${isSoon ? soonDoor : doorFrame}")`}
        bgSize="cover"
        backgroundPosition="center"
        bgRepeat="no-repeat"
        backgroundColor={hover ? "transparent" : "black"}
        onMouseEnter={() => setHover(true)}
        onMouseLeave={() => setHover(false)}
      >
        <Box
          display={"flex"}
          flexDir={"column"}
          justifyContent={"start"}
          alignItems={"start"}
          height={"full"}
          paddingTop={"20%"}
          textAlign={"center"}
        >
          <Image
            src={icon}
            alt="logo"
            mb={4}
            mx="auto"
            width={{ base: "3rem", lg: "5rem" }}
            height={{ base: "3rem", lg: "5rem" }}
            fit={"contain"}
          />
          <Text
            fontWeight={"extrabold"}
            fontSize={{ base: "md", lg: "xl" }}
            width={"100%"}
          >
            {title}
          </Text>
          {!isSoon && (
            <Text
              fontSize={{ base: "sm", lg: "1.13rem" }}
              width={"66%"}
              textAlign={"start"}
              mt={"20%"}
              ml={"16%"}
            >
              {body}
            </Text>
          )}
        </Box>
      </Box>
    </AspectRatio>
  );
};

export default Door;
