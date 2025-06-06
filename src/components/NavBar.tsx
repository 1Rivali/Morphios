import { icMenu, logo } from "@/core/constants/assets";
import { Box, HStack, Image, useBreakpointValue } from "@chakra-ui/react";
import { useEffect, useState } from "react";
import { NavLinkItem } from "./NavLink";

export function NavBar() {
  const isMobile = useBreakpointValue({ base: true, lg: false });
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 20);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <HStack
      position="fixed"
      top={0}
      left={0}
      right={0}
      height="80px"
      width="100%"
      px={6}
      zIndex={1000}
      justifyContent="space-between"
      background={scrolled ? "#1E1E1E" : "transparent"}
      backdropFilter={scrolled ? "saturate(180%) blur(10px)" : "none"}
      transition="background-color 0.3s ease, backdrop-filter 0.3s ease"
    >
      {!isMobile && <Box />}
      <Image src={logo} height={{ base: "40px", lg: "60px" }} />
      {!isMobile && (
        <>
          <Box />
          <HStack gap={6} color="white">
            <NavLinkItem to="/" label="Home" exact />
            <NavLinkItem to="/origin" label="The Origin" />
            <NavLinkItem to="/book-magician" label="Book a magician" />
            <NavLinkItem to="/#home-pillars" label="Our Pillars" />
          </HStack>
          <Box width="25vw" />
        </>
      )}
      {isMobile && <Image src={icMenu} />}
    </HStack>
  );
}
