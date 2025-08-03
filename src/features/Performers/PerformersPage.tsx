import MorphButton from "@/components/MorphButton";
import { inviteMagic, performers } from "@/core/constants/assets";
import { Box, Center, Image } from "@chakra-ui/react";
import { useNavigate } from "react-router-dom";

export default function PerformersPage() {
  const navigate = useNavigate();
  return (
    <Box>
      <Image mt={"3%"} src={performers} aspectRatio={1464 / 1586} />
      <Box>
        <Center position={"relative"}>
          <Image src={inviteMagic} />
          <Box position={"absolute"} bottom={"30%"} left={"19%"}>
            <MorphButton
              text="Book Magician"
              p="1.3rem"
              onClick={() => navigate("/book-magician")}
            />
          </Box>
        </Center>
      </Box>
    </Box>
  );
}
