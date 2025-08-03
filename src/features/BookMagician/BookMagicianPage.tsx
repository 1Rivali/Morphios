import MorphButton from "@/components/MorphButton";
import {
  bookMagicianBg,
  formBg,
  formBorder,
  icBookMagician,
  icMagicStick,
} from "@/core/constants/assets";
import {
  AspectRatio,
  Box,
  Field,
  Heading,
  Image,
  Input,
  Portal,
  Select,
  Separator,
  Text,
  Textarea,
  createListCollection,
} from "@chakra-ui/react";

const performers = createListCollection({
  items: [
    {
      label: "Tawfeeq Jastanieah - Founder & Lead Performer",
      value: "tawfeeq",
    },
    {
      label: "Abderrahman Chergui - Experience Architect",
      value: "abderrahman",
    },
    { label: "Any Available Performer", value: "any" },
  ],
});

export default function BookMagicianPage() {
  return (
    <Box position={"relative"} top={"0"} width={"100%"} overflow={"hidden"}>
      <Box
        h={"100vh"}
        width={"100%"}
        background={`url(${bookMagicianBg})`}
        backgroundRepeat={"no-repeat"}
        backgroundSize={"center"}
        backgroundPosition={"center"}
      >
        <Box
          pt={"20vh"}
          px={{ base: "2rem", lg: "10vh" }}
          display={"flex"}
          flexDir={"column"}
          gap={"1rem"}
        >
          <Image src={icMagicStick} width={"3rem"} height={"3rem"} />
          <Heading fontSize={"4xl"}>Book A Magician</Heading>
          <Text fontSize={"2xl"} fontWeight={"extralight"} mb={"1rem"}>
            We don’t offer shows. We offer moments
          </Text>
          <Text fontSize={"sm"}>
            A ripple in perception. A stillness that changes you
          </Text>
        </Box>
      </Box>
      <Separator size={"lg"} />
      <Box
        height={"100vh"}
        display={"flex"}
        flexDir={"column"}
        justifyContent={"center"}
        alignItems={"center"}
        textAlign={"center"}
        gap={"1rem"}
      >
        <Image src={icBookMagician} />
        <Text width={{ base: "100%", lg: "40%" }} mb={"1rem"}>
          Whether you're seeking a presence in the room, a story brought to
          life, or a sacred space where wonder
        </Text>
        <Text fontSize={"xl"} fontWeight={"bold"}>
          this is where you begin
        </Text>
      </Box>

      <Box
        height={"150vh"}
        background={`url("${formBg}")`}
        backgroundRepeat={"no-repeat"}
        backgroundSize={"cover"}
        backgroundPosition={"center"}
        pt={"10vh"}
        display={"flex"}
        flexDir={"column"}
        alignItems={"center"}
      >
        <Heading fontSize={"4xl"}>Leave You NAme</Heading>
        <Text
          fontSize={"xl"}
          wordSpacing={"0.6rem"}
          mt={"0.6rem"}
          textAlign={"center"}
        >
          and we’ll step through the threshold with you.
        </Text>
        <AspectRatio
          ratio={{ base: 1 / 2, lg: 631 / 785 }}
          width={{ base: "90%", lg: "40%" }}
          mt={"5vh"}
        >
          <Box
            background={`url("${formBorder}")`}
            backgroundRepeat={"no-repeat"}
            backgroundSize={"cover"}
            backgroundPosition={"center"}
            backgroundColor={"#1F1F1F"}
          >
            <Box
              width={"80%"}
              display={"flex"}
              flexDir={"column"}
              justifyContent={"space-between"}
              alignItems={"start"}
              height={"90%"}
            >
              <Field.Root>
                <Field.Label>Name</Field.Label>
                <Input
                  variant={"subtle"}
                  backgroundColor={"#111111"}
                  placeholder="Enter your name"
                />
              </Field.Root>
              <Field.Root>
                <Field.Label>Phone</Field.Label>
                <Input
                  variant={"subtle"}
                  backgroundColor={"#111111"}
                  placeholder="Enter your Phone Number"
                />
              </Field.Root>
              <Field.Root>
                <Field.Label>E-mail</Field.Label>
                <Input
                  variant={"subtle"}
                  backgroundColor={"#111111"}
                  placeholder="Enter your email"
                />
              </Field.Root>
              <Field.Root>
                <Field.Label>City</Field.Label>
                <Input
                  variant={"subtle"}
                  backgroundColor={"#111111"}
                  placeholder="Enter your city"
                />
              </Field.Root>
              <Field.Root>
                <Field.Label>Select Performer</Field.Label>
                <Select.Root
                  collection={performers}
                  variant="subtle"
                  backgroundColor="#111111"
                >
                  <Select.HiddenSelect />
                  <Select.Control>
                    <Select.Trigger>
                      <Select.ValueText placeholder="Choose a performer" />
                    </Select.Trigger>
                    <Select.IndicatorGroup>
                      <Select.Indicator />
                    </Select.IndicatorGroup>
                  </Select.Control>
                  <Portal>
                    <Select.Positioner>
                      <Select.Content
                        backgroundColor="#111111"
                        border="1px solid rgba(255, 255, 255, 0.1)"
                      >
                        {performers.items.map((performer) => (
                          <Select.Item item={performer} key={performer.value}>
                            {performer.label}
                            <Select.ItemIndicator />
                          </Select.Item>
                        ))}
                      </Select.Content>
                    </Select.Positioner>
                  </Portal>
                </Select.Root>
              </Field.Root>
              <Field.Root>
                <Field.Label>Description of Event</Field.Label>
                <Textarea
                  variant={"subtle"}
                  backgroundColor={"#111111"}
                  placeholder="Share your vision, space, or the feeling you want to create"
                  height={"30vh"}
                />
              </Field.Root>
              <MorphButton text="Send the Signal" />
            </Box>
          </Box>
        </AspectRatio>
      </Box>
    </Box>
  );
}
