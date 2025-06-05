import MorphButton from "@/components/MorphButton";
import {
  cinema,
  icProductionHouse,
  productionBg,
  productionHouseBg2,
  underWater,
} from "@/core/constants/assets";
import { Box, Heading, Image, Text } from "@chakra-ui/react";
import { AgencyCard } from "../Agency/components/AgencyCard";

export default function ProductionHouse() {
  return (
    <Box position={"relative"} top={"0"} width={"100%"} overflow={"hidden"}>
      <Box
        h={"100vh"}
        width={"100%"}
        background={`url(${productionBg})`}
        backgroundRepeat={"no-repeat"}
        backgroundSize={"cover"}
        backgroundPosition={"center"}
      >
        <Box
          pt={"20vh"}
          px={{ base: "2rem", lg: "10vh" }}
          display={"flex"}
          flexDir={"column"}
          gap={"1rem"}
        >
          <Image src={icProductionHouse} width={"3rem"} height={"3rem"} />
          <Heading fontSize={"4xl"}>The Production House</Heading>
          <Text fontSize={"2xl"} fontWeight={"extralight"} mb={"1rem"}>
            Stories Carved from Silence
          </Text>
          <Text fontSize={"sm"}>
            The magic doesn’t vanish. It lingers — in film, in image, in memory.
          </Text>
        </Box>
      </Box>

      <AgencyCard
        title="The unseen takes form"
        desc1="The Production House is where the unseen takes form"
        desc2="We create cinematic pieces that don’t just tell stories — they invite the viewer into a different kind of seeing.

          Whether short films, visual rituals, or atmospheric portraits, our work is designed to feel quiet, honest, and evocative."
        image={underWater}
      />
      <AgencyCard
        title="Ultimate Shape, Long Impact"
        desc1="Each project is shaped by presence, tone, and detail — blending narrative with emotion, stillness with movement.
Our camera doesn’t chase spectacle. It lingers. It listens."
        desc2="We don’t make films to impress. We make films that stay with you —
like a feeling you can’t name or a dream you didn’t want to wake from."
        image={cinema}
        rowReversed
      />
      <Box
        mt={{ base: "1rem", lg: "10rem" }}
        height={{ base: "60vh", lg: "100vh" }}
        background={`url("${productionHouseBg2}")`}
        backgroundRepeat={"no-repeat"}
        backgroundSize={"cover"}
        backgroundPosition={"center"}
        display={"flex"}
        flexDir={"column"}
        justifyContent={"center"}
        alignItems={"center"}
      >
        <Text width={{ base: "80%" }} textAlign={"center"}>
          Ready to craft a story that doesn’t speak — but resonates?
        </Text>

        <Heading
          mt={{ base: "1vh", lg: "2vh" }}
          fontWeight={"extrabold"}
          fontSize={{ base: "xl", lg: "4xl" }}
          mb={{ base: "1vh", lg: "10vh" }}
          textAlign={"center"}
        >
          Let’s create something that lingers.
        </Heading>
        <MorphButton text="Step Through" width={{ base: "75%", lg: "20%" }} />
      </Box>
    </Box>
  );
}
