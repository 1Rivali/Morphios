import {
  cinema,
  icAgency,
  icProductionHouse,
  theater,
} from "@/core/constants/assets";
import { Box } from "@chakra-ui/react";
import { DoorDetailsCard } from "./DoorDetailsCard";
const sections = [
  {
    title: "the agency",
    icon: icAgency,
    subTitle: "Performs of the UNSEEN",
    description:
      "The Agency is not here to entertain — it is here to initiate.\nOur performers are guides, not illusionists. They move through moments that soften perception and awaken the soul.\nThis is where astonishment begins not with spectacle, but with presence.",
    image: theater,
  },
  {
    title: "The Production House",
    icon: icProductionHouse,
    subTitle: "Stories Carved from Silence",
    description:
      "The Production House brings the unseen into form — through film,\nthrough imagery, through layered memory. We craft cinematic\nexperiences that unfold like dreams, revealing the hidden depth in\nordinary moments. This is where stories are not told — they are\nuncovered.",
    image: cinema,
  },
];
const DoorDetailsSection = () => {
  return (
    <Box
      p={{ base: "1rem", lg: "5rem" }}
      mt={{ base: "1rem", md: "15vh" }}
      display={"flex"}
      flexDir={"column"}
      gap={"10rem"}
    >
      {sections.map((s) => (
        <DoorDetailsCard {...s} />
      ))}
    </Box>
  );
};

export default DoorDetailsSection;
