import {
  icAgency,
  icProductionHouse,
  theater,
  worldPic,
} from "@/core/constants/assets";
import { Box } from "@chakra-ui/react";
import { DoorDetailsCard } from "./DoorDetailsCard";

const DoorDetailsSection = () => {
  return (
    <Box
      p={{ base: "1rem", lg: "5rem" }}
      mt={"15vh"}
      display={"flex"}
      flexDir={"column"}
      gap={"3rem"}
    >
      <DoorDetailsCard
        title="the agency"
        icon={icAgency}
        subTitle={`Performs of the UNSEEN`}
        description="The Agency is not here to entertain — it is here to initiate. Our
            performers are guides, not illusionists. They move through moments
            that soften perception and awaken the soul. This is where
            astonishment begins not with spectacle, but with presence."
        image={theater}
      />
      <DoorDetailsCard
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
