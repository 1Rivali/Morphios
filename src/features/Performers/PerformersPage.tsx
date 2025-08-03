import MorphButton from "@/components/MorphButton";
import {
  inviteMagic,
  performersBg,
  tawfeekPerformer,
  underWater,
} from "@/core/constants/assets";
import { Box, Center, Image, SimpleGrid, Text } from "@chakra-ui/react";
import { useNavigate } from "react-router-dom";
import { AgencyCard } from "../Agency/components/AgencyCard";
const performers: PerformerCardProps[] = [
  {
    image: tawfeekPerformer,
    name: "Tawfeeq Jastanieah",
    title: "Founder | Artistic Director | Lead Performer",
    description:
      "Tawfeeq blends mentalism with narrative, weaving his performances from stories, mystery, and the invisible threads connecting us all.",
    description2:
      "With Tawfeeq, you won't just be entertained. You'll find yourself gently moved, feeling the subtle magic hidden within everyday moments.",
    description3:
      "He creates experiences that feel less like tricks, and more like turning pages in a story you didn't know you were part of. Each moment invites reflection, awakening quiet revelations that linger long after the performance ends.",
    description4:
      "And perhaps, when you leave, you'll carry something unseen with you. A quiet reminder of how beautifully connected we truly are.",
  },
  {
    image: tawfeekPerformer,
    name: "Abderrahman Chergui",
    title: "Co-Founder | Experience Architect | Systems & Operations Maestro",
    description:
      "Abderrahman’s performances are not displays of illusion — they are journeys through perception, attention, and meaning.",
    description2:
      "As Maestro of Thought, he blends mentalism with intentional design, crafting immersive experiences that are as rational as they are emotional. Each moment is structured like a thought experiment — precise, reflective, and quietly transformative.",
    description3:
      "His presence is measured, his timing deliberate. He doesn’t chase wonder — he builds it, patiently, layer by layer.",
    description4:
      "Through mind games, subtle reveals, and shifts in awareness, he opens a space where thinking feels like feeling, and clarity feels like magic. What stays with you isn’t how he did it — But how it made you see yourself, the moment, and the mind… differently.",
  },
];
export default function PerformersPage() {
  const navigate = useNavigate();
  return (
    <Box>
      <Box
        bg={`url("${performersBg}")`}
        backgroundRepeat={"no-repeat"}
        backgroundSize={"cover"}
        backgroundPosition={"center"}
        height={"fit-content"}
        pb={"10rem"}
        pt={"7rem"}
        width={"100%"}
      >
        <SimpleGrid
          columns={{ base: 1, lg: 2 }}
          gap={{ base: "2rem", md: "3rem" }}
          px={{ base: "1rem", md: "10rem" }}
        >
          {performers.map((performer) => (
            <PerformerCard key={performer.name} {...performer} />
          ))}
        </SimpleGrid>
      </Box>
      {/* <Image mt={"3%"} src={performers} aspectRatio={1464 / 1586} /> */}
      {/* <Box>
        <Center position={"relative"}>
          <Image
            src={inviteMagic}
            width={{ base: "90%", sm: "80%", md: "70%", lg: "100%" }}
            height="auto"
          />
          <Box
            position={"absolute"}
            bottom={{ base: "20%", sm: "25%", md: "30%" }}
            left={{ base: "10%", sm: "15%", md: "19%" }}
            right={{ base: "10%", sm: "15%", md: "auto" }}
          >
            <MorphButton
              text="Book Magician"
              p={"0.8rem"}
              fontSize={{ base: "2xs", lg: "md" }}
              width={{ base: "30%", lg: "100%" }}
              onClick={() => navigate("/book-magician")}
            />
          </Box>
        </Center>
      </Box> */}
      <AgencyCard
        title="Invite magic into your space"
        desc1="Not a show. A shared moment of transformation.
Let mystery step across your threshold.
Because some questions are better felt than answered.
Begin the ritual of awe."
        desc2=""
        showButton
        image={underWater}
      />
    </Box>
  );
}

interface PerformerCardProps {
  image: string;
  name: string;
  title: string;
  description: string;
  description2: string;
  description3: string;
  description4: string;
}

const PerformerCard = ({
  image,
  name,
  title,
  description,
  description2,
  description3,
  description4,
}: PerformerCardProps) => {
  return (
    <Box
      display={"flex"}
      flexDirection={"column"}
      justifyContent={"center"}
      alignItems={"center"}
      borderRadius={"10px"}
    >
      <Box position={"relative"}>
        <Image src={image} width={"500px"} />
        <Box position={"absolute"} bottom={"10%"} left={"10%"}>
          <Text fontSize={"2xl"} fontWeight={"bold"}>
            {name}
          </Text>
          <Text>{title}</Text>
        </Box>
      </Box>
      <Box width={"80%"}>
        <Text fontFamily={"roboto"}>{description}</Text>
        <br />
        <Text fontFamily={"roboto"}>{description2}</Text>
        <br />
        <Text fontFamily={"roboto"}>{description3}</Text>
        <br />
        <Text fontFamily={"roboto"}>{description4}</Text>
      </Box>
    </Box>
  );
};
