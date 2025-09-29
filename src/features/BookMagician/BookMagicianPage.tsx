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
import { useMutation } from "@tanstack/react-query";
import { useState } from "react";
import axios from "axios";
import { toast } from "react-toastify";

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

interface ContactFormData {
  name: string;
  phone: string;
  email: string;
  city: string;
  performer: string;
  description: string;
}

export default function BookMagicianPage() {
  const [formData, setFormData] = useState<ContactFormData>({
    name: "",
    phone: "",
    email: "",
    city: "",
    performer: "",
    description: "",
  });

  const contactMutation = useMutation({
    mutationFn: async (data: ContactFormData) => {
      // Map form data to match backend validation requirements
      const payload = {
        name: data.name,
        email: data.email,
        message: data.description, // Map description to message field
        phone: data.phone,
        city: data.city,
        performer: data.performer,
      };

      const response = await axios.post(
        "https://api.morphicarts.sa/contacts",
        payload
      );
      return response.data;
    },
    onSuccess: () => {
      // Reset form on success
      setFormData({
        name: "",
        phone: "",
        email: "",
        city: "",
        performer: "",
        description: "",
      });
      toast.success("Your message has been sent successfully!", {
        position: "top-right",
        autoClose: 5000,
        hideProgressBar: false,
        closeOnClick: true,
        pauseOnHover: true,
        draggable: true,
      });
    },
    onError: (error: unknown) => {
      console.error("Error sending message:", error);

      // Handle backend validation errors
      if (error && typeof error === "object" && "response" in error) {
        const axiosError = error as {
          response?: { data?: { errors?: Record<string, string[]> } };
        };
        if (axiosError.response?.data?.errors) {
          const backendErrors = axiosError.response.data.errors;
          const errorMessages: string[] = [];

          // Extract error messages from backend response
          Object.values(backendErrors).forEach((errorArray: string[]) => {
            if (Array.isArray(errorArray)) {
              errorMessages.push(...errorArray);
            }
          });

          toast.error(errorMessages.join(", "), {
            position: "top-right",
            autoClose: 7000,
            hideProgressBar: false,
            closeOnClick: true,
            pauseOnHover: true,
            draggable: true,
          });
        } else {
          toast.error("Failed to send message. Please try again.", {
            position: "top-right",
            autoClose: 5000,
            hideProgressBar: false,
            closeOnClick: true,
            pauseOnHover: true,
            draggable: true,
          });
        }
      } else {
        toast.error("Failed to send message. Please try again.", {
          position: "top-right",
          autoClose: 5000,
          hideProgressBar: false,
          closeOnClick: true,
          pauseOnHover: true,
          draggable: true,
        });
      }
    },
  });

  const handleInputChange = (field: keyof ContactFormData, value: string) => {
    setFormData((prev) => ({ ...prev, [field]: value }));
  };

  // Email validation function
  const isValidEmail = (email: string): boolean => {
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    return emailRegex.test(email);
  };

  // Phone validation function (not used in current validation but kept for future use)
  // const isValidPhone = (phone: string): boolean => {
  //   const phoneRegex = /^[+]?[1-9][\d]{0,15}$/;
  //   return phoneRegex.test(phone.replace(/[\s\-()]/g, ''));
  // };

  // Comprehensive form validation matching backend requirements
  const validateForm = (): { isValid: boolean; errors: string[] } => {
    const errors: string[] = [];

    // Required field validation (matching backend: name, email, message)
    if (!formData.name.trim()) {
      errors.push("Name is required");
    } else if (formData.name.length > 255) {
      errors.push("Name must be less than 255 characters");
    }

    if (!formData.email.trim()) {
      errors.push("Email is required");
    } else if (!isValidEmail(formData.email)) {
      errors.push("The email field must be a valid email address");
    } else if (formData.email.length > 255) {
      errors.push("Email must be less than 255 characters");
    }

    if (!formData.description.trim()) {
      errors.push("The message field is required");
    }

    return {
      isValid: errors.length === 0,
      errors,
    };
  };

  const handleSubmit = () => {
    const validation = validateForm();

    if (!validation.isValid) {
      toast.warning(validation.errors.join(", "), {
        position: "top-right",
        autoClose: 7000,
        hideProgressBar: false,
        closeOnClick: true,
        pauseOnHover: true,
        draggable: true,
      });
      return;
    }

    contactMutation.mutate(formData);
  };

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
                  value={formData.name}
                  onChange={(e) => handleInputChange("name", e.target.value)}
                />
              </Field.Root>
              <Field.Root>
                <Field.Label>Phone</Field.Label>
                <Input
                  variant={"subtle"}
                  backgroundColor={"#111111"}
                  placeholder="Enter your Phone Number"
                  value={formData.phone}
                  onChange={(e) => handleInputChange("phone", e.target.value)}
                />
              </Field.Root>
              <Field.Root>
                <Field.Label>E-mail</Field.Label>
                <Input
                  variant={"subtle"}
                  backgroundColor={"#111111"}
                  placeholder="Enter your email"
                  value={formData.email}
                  onChange={(e) => handleInputChange("email", e.target.value)}
                />
              </Field.Root>
              <Field.Root>
                <Field.Label>City</Field.Label>
                <Input
                  variant={"subtle"}
                  backgroundColor={"#111111"}
                  placeholder="Enter your city"
                  value={formData.city}
                  onChange={(e) => handleInputChange("city", e.target.value)}
                />
              </Field.Root>
              <Field.Root>
                <Field.Label>Select Performer</Field.Label>
                <Select.Root
                  collection={performers}
                  variant="subtle"
                  backgroundColor="#111111"
                  value={[formData.performer]}
                  onValueChange={(details) =>
                    handleInputChange("performer", details.value[0] || "")
                  }
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
                  value={formData.description}
                  onChange={(e) =>
                    handleInputChange("description", e.target.value)
                  }
                />
              </Field.Root>
              <MorphButton
                text={
                  contactMutation.isPending ? "Sending..." : "Send the Signal"
                }
                onClick={handleSubmit}
                disabled={contactMutation.isPending}
              />
            </Box>
          </Box>
        </AspectRatio>
      </Box>
    </Box>
  );
}
