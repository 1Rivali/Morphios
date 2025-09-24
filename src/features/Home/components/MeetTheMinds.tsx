import {
  abderrahmanPerformer,
  icMeetTheMinds,
  tawfeek,
} from "@/core/constants/assets";
import { Box, Heading, SimpleGrid } from "@chakra-ui/react";
import MindsCard, { MindsCardProps } from "./MindsCard";

const minds: MindsCardProps[] = [
  {
    name: "Tawfeeq Jastanieah",
    resp: "Founder | Artistic Director | Lead Performer",
    description: `At the heart of Morphios stands Tawfeeq, the voice, the vision, and the hand that draws the unseen into the light.
        He is not just a performer; he is a weaver of moments, blending mystery, wonder, and presence into every experience.
        `,
    image: tawfeek,
  },
  {
    name: "Abderrahman Chergui",
    resp: "Co-Founder | Experience Architect | Systems & Operations Maestro",
    description: `Abderrahman is the silent pulse behind Morphios, the architect of flow, the designer of depth, and the maestro of the structures and subtleties that breathe beneath the surface.`,
    image: abderrahmanPerformer,
  },
];

const MeetTheMinds = () => {
  return (
    <Box
      px={{ base: "1rem", sm: "2rem", md: "4rem", lg: "6rem", xl: "8rem" }}
      pt={{ base: "4rem", md: "6rem", lg: "8rem", xl: "10rem" }}
    >
      <Box
        py={{ base: "2rem", md: "3rem" }}
        bg={`linear-gradient(rgba(0,0,0,0.9), rgba(0,0,0,0.9)), url("${icMeetTheMinds}")`}
        bgSize={{ base: "5rem", md: "contain" }}
        bgRepeat={"no-repeat"}
        backgroundPosition={"start"}
      >
        <Heading
          fontWeight={"bold"}
          fontSize={{ base: "2xl", sm: "3xl", md: "4xl" }}
          textAlign={"left"}
        >
          Meet The Minds
        </Heading>
      </Box>
      <SimpleGrid
        columns={{ base: 1, lg: 2 }}
        mt={{ base: "1rem", md: "2rem" }}
        gap={{ base: "2rem", md: "3rem" }}
      >
        {minds.map((m, index) => (
          <MindsCard key={index} {...m} />
        ))}
      </SimpleGrid>
    </Box>
  );
};
export default MeetTheMinds;
