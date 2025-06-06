import MorphButton from "@/components/MorphButton";
import { Box, Flex, HStack, Image, Text } from "@chakra-ui/react";
import { useNavigate } from "react-router-dom";

interface DetailsCardProps {
  icon: string;
  title: string;
  subTitle: string;
  description: string;
  image: string;
}
export function DoorDetailsCard({
  icon,
  title,
  subTitle,
  description,
  image,
}: DetailsCardProps) {
  const navigate = useNavigate();
  return (
    <Box height={"full"}>
      <Flex
        flexDir={{
          base: "column",
          lg: "row",
        }}
        justifyContent={"space-between"}
        alignItems={"start"}
      >
        <Box
          textAlign={"start"}
          display={"flex"}
          flexDir={"column"}
          gap={"1rem"}
          mb={"2rem"}
        >
          <HStack justifyContent={"start"} alignItems={"start"} gap={"2rem"}>
            <Image
              src={icon}
              width={{
                base: "3rem",
                lg: "4rem",
              }}
              height={{
                base: "3rem",
                lg: "4rem",
              }}
            />
            <Text
              fontSize={{
                base: "3xl",
                lg: "5xl",
              }}
              fontWeight={"extrabold"}
            >
              {title}
            </Text>
          </HStack>
          <Text
            fontSize={{
              base: "xl",
              lg: "3xl",
            }}
          >
            {subTitle}
          </Text>
          <Text
            fontSize={{
              base: "sm",
              lg: "",
            }}
            width={{
              base: "full",
              lg: "70%",
            }}
            mb={{
              base: "1rem",
              lg: "5rem",
            }}
          >
            {description}
          </Text>
          <MorphButton
            onClick={() => navigate("/book-magician")}
            text="Step Through"
            width={{
              base: "70%",
              lg: "30%",
            }}
          />
        </Box>
        <Image
          src={image}
          height={{
            base: "full",
            lg: "66vh",
          }}
        />
      </Flex>
    </Box>
  );
}
