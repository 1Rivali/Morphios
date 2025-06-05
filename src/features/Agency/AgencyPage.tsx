import MorphButton from "@/components/MorphButton";
import {
  bg,
  bg2,
  hand,
  icAgency,
  icCorporate,
  icFullStage,
  icPrivateGathering,
  icWalkAround,
  man,
  theaterBlure,
} from "@/core/constants/assets";
import { Box, Heading, Image, SimpleGrid, Text } from "@chakra-ui/react";
import { AgencyCard } from "./components/AgencyCard";
import { WhatWeDoCard } from "./components/WhatWeDoCard";

export default function AgencyPage() {
  return (
    <Box position={"relative"} top={"0"} width={"100%"} overflow={"hidden"}>
      <Box
        h={"100vh"}
        width={"100%"}
        background={`url(${theaterBlure})`}
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
          <Image src={icAgency} width={"3rem"} height={"3rem"} />
          <Heading fontSize={"4xl"}>The Agency</Heading>
          <Text fontSize={"2xl"} fontWeight={"extralight"} mb={"1rem"}>
            Performs of the unseen
          </Text>
          <Text fontSize={"sm"}>
            We are not here to entertain. We are here to initiate.
          </Text>
        </Box>
      </Box>

      <AgencyCard
        title="What we offer in the AGENCY?"
        desc1="          The Agency offers curated performances that explore perception,
          presence, and the space between the seen and unseen."
        desc2="Whether in a one-to-one setting, walking among guests, or standing
                    before a full audience, our performers create experiences that feel
                    intimate, intentional, and deeply human."
        image={man}
      />
      <AgencyCard
        title="The Feeling stays"
        desc1="Using psychology, suggestion, and a minimalist approach to mystery, we craft encounters that stay with people — not just in memory, but in feeling."
        desc2="This is not a show that ends. It’s a moment that echoes."
        image={hand}
        rowReversed
      />

      <Box
        mt={"30vh"}
        display={"flex"}
        flexDir={"column"}
        justifyContent={"center"}
        alignItems={"center"}
        width={"full"}
      >
        <Heading mb={{ base: "1rem", lg: "3rem" }} fontSize={"2xl"}>
          Practical Clarity
        </Heading>
        <Text fontSize={"sm"}>The agency is available for</Text>
        <Box
          width={"full"}
          background={`url("${bg}")`}
          backgroundRepeat={"no-repeat"}
          backgroundSize={"cover"}
          backgroundPosition={"center"}
          mt={{ base: "3rem", lg: "6rem" }}
        >
          <SimpleGrid columns={[1, 2]} justifySelf={"center"} gap={"1rem"}>
            <WhatWeDoCard icon={icPrivateGathering} title="Private Gathering" />
            <WhatWeDoCard
              icon={icCorporate}
              title="Corporate and cultural events"
            />
            <WhatWeDoCard
              icon={icFullStage}
              title="Full-stage shows for large audiences"
            />
            <WhatWeDoCard icon={icWalkAround} title="Walkaround performances" />
          </SimpleGrid>
          <Text
            width={{ base: "90%", lg: "26%" }}
            textAlign={"center"}
            justifySelf={"center"}
            mt={"5rem"}
          >
            Every performance is tailored to the space and spirit of the
            occasion.
          </Text>
        </Box>
      </Box>

      <Box
        mt={{ base: "1rem", lg: "10rem" }}
        height={{ base: "60vh", lg: "100vh" }}
        background={`url("${bg2}")`}
        backgroundRepeat={"no-repeat"}
        backgroundSize={"cover"}
        backgroundPosition={"center"}
        display={"flex"}
        flexDir={"column"}
        justifyContent={"center"}
        alignItems={"center"}
      >
        <Text width={{ base: "80%" }} textAlign={"center"}>
          If you’re ready to offer your guests more than
        </Text>
        <Text width={{ base: "80%" }} textAlign={"center"}>
          entertainment — offer them something they’ll carry with them
        </Text>
        <Heading
          mt={{ base: "3vh", lg: "20vh" }}
          fontWeight={"extrabold"}
          fontSize={{ base: "xl", lg: "4xl" }}
          mb={{ base: "1vh", lg: "10vh" }}
        >
          Book a magician now
        </Heading>
        <MorphButton text="Step Through" width={{ base: "75%", lg: "20%" }} />
      </Box>
    </Box>
  );
}
