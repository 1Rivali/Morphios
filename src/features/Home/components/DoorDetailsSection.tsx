import MorphButton from "@/components/MorphButton";
import {
  icAgency,
  icProductionHouse,
  theater,
  worldPic,
} from "@/core/constants/assets";
import { Box, Flex, HStack, Image, Text } from "@chakra-ui/react";

interface DetailsCardProps {
  icon: string;
  title: string;
  subTitle: string;
  description: string;
  image: string;
}
function DetailsCard({
  icon,
  title,
  subTitle,
  description,
  image,
}: DetailsCardProps) {
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
            onClick={() => {}}
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

const DoorDetailsSection = () => {
  return (
    <Box
      p={{ base: "1rem", lg: "5rem" }}
      mt={"15vh"}
      display={"flex"}
      flexDir={"column"}
      gap={"3rem"}
    >
      <DetailsCard
        title="the agency"
        icon={icAgency}
        subTitle={`Performs of the UNSEEN`}
        description="The Agency is not here to entertain — it is here to initiate. Our
            performers are guides, not illusionists. They move through moments
            that soften perception and awaken the soul. This is where
            astonishment begins not with spectacle, but with presence."
        image={theater}
      />
      <DetailsCard
        title="The Production House"
        icon={icProductionHouse}
        subTitle={`Stories Carved from Silence`}
        description="The Production House brings the unseen into form — through film,
              through imagery, through layered memory. We craft cinematic
              experiences that unfold like dreams, revealing the hidden depth in
              ordinary moments. This is where stories are not told — they are
              uncovered."
        image={worldPic}
      />
    </Box>
  );
};

export default DoorDetailsSection;
