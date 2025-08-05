import { icMenu, logoAnimated } from "@/core/constants/assets";
import {
  Box,
  HStack,
  Image,
  useBreakpointValue,
  VStack,
  Text,
} from "@chakra-ui/react";
import { useEffect, useState } from "react";
import { NavLinkItem } from "./NavLink";
import { Link, useLocation, useNavigate } from "react-router-dom";
import Lottie from "react-lottie";
import MorphButton from "./MorphButton";

export function NavBar() {
  const isMobile = useBreakpointValue({ base: true, lg: false });
  const [scrolled, setScrolled] = useState(false);
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const location = useLocation();
  const navigate = useNavigate();
  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 20);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  useEffect(() => {
    setIsMenuOpen(false);
  }, [location.pathname]);

  const handleMenuClick = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  const handleNavClick = () => {
    setIsMenuOpen(false);
  };

  return (
    <>
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
        // backgroundColor="transparent"
        background={scrolled ? "#000000" : "transparent"}
        backdropFilter={scrolled ? "saturate(180%) blur(10px)" : "none"}
        transition="background-color 0.3s ease, backdrop-filter 0.3s ease"
      >
        <Box
          justifySelf={"start"}
          onClick={() => navigate("/")}
          cursor={"pointer"}
        >
          {!isMenuOpen && (
            <Lottie
              options={{ animationData: logoAnimated, loop: true }}
              height={"60px"}
            />
          )}
        </Box>
        {!isMobile && (
          <>
            <HStack gap={6} color="white">
              {/* <NavLinkItem to="/" label="Home" exact /> */}
              <NavLinkItem to="/origin" label="The Origin" />
              {/* <NavLinkItem to="/book-magician" label="Book a magician" /> */}
              <NavLinkItem to="/performers" label="Our Performers" />
            </HStack>
          </>
        )}
        {!isMobile && (
          <MorphButton
            text="Book a magician"
            onClick={() => navigate("/book-magician")}
            width={"12%"}
          />
        )}
        {isMobile && (
          <Image
            src={icMenu}
            cursor="pointer"
            onClick={handleMenuClick}
            transform={isMenuOpen ? "rotate(90deg)" : "rotate(0deg)"}
            transition="opacity 0.3s ease, transform 0.3s ease"
            _hover={{ opacity: 0.8 }}
          />
        )}
      </HStack>

      {/* Mobile Menu Overlay */}
      {isMenuOpen && (
        <Box
          position="fixed"
          top={0}
          left={0}
          right={0}
          bottom={0}
          zIndex={999}
          background={scrolled ? "#1E1E1E" : "rgba(30, 30, 30, 0.95)"}
          backdropFilter="saturate(180%) blur(10px)"
          display="flex"
          flexDirection="column"
          alignItems="center"
          justifyContent="center"
          animation="slideIn 0.3s ease-out"
        >
          {/* <Box
            position="absolute"
            top={6}
            right={6}
            cursor="pointer"
            onClick={handleMenuClick}
            _hover={{ opacity: 0.8 }}
          >
            <Text fontSize="3xl" color="white">
              ×
            </Text>
          </Box> */}

          <Lottie
            options={{ animationData: logoAnimated, loop: true }}
            height={"100px"}
            style={{ marginBottom: "24px" }}
          />

          <VStack
            gap={8}
            align="stretch"
            color="white"
            fontSize="xl"
            fontWeight="medium"
            width="100%"
            px={8}
          >
            <Link to="/" onClick={handleNavClick}>
              <Text
                fontSize="2xl"
                py={4}
                borderBottom="1px solid rgba(255, 255, 255, 0.1)"
                textAlign="center"
                cursor="pointer"
                _hover={{ opacity: 0.8 }}
              >
                Home
              </Text>
            </Link>
            <Link to="/origin" onClick={handleNavClick}>
              <Text
                fontSize="2xl"
                py={4}
                borderBottom="1px solid rgba(255, 255, 255, 0.1)"
                textAlign="center"
                cursor="pointer"
                _hover={{ opacity: 0.8 }}
              >
                The Origin
              </Text>
            </Link>
            <Link to="/book-magician" onClick={handleNavClick}>
              <Text
                fontSize="2xl"
                py={4}
                borderBottom="1px solid rgba(255, 255, 255, 0.1)"
                textAlign="center"
                cursor="pointer"
                _hover={{ opacity: 0.8 }}
              >
                Book a magician
              </Text>
            </Link>
            <Link to="/performers" onClick={handleNavClick}>
              <Text
                fontSize="2xl"
                py={4}
                borderBottom="1px solid rgba(255, 255, 255, 0.1)"
                textAlign="center"
                cursor="pointer"
                _hover={{ opacity: 0.8 }}
              >
                Our Performers
              </Text>
            </Link>
          </VStack>
        </Box>
      )}
    </>
  );
}
