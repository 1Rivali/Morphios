import { MotionBox } from "@/core/utils/motion-components";
import { useEffect } from "react";
import { HeroSection } from "./components/HeroSection";
import MeetTheMinds from "./components/MeetTheMinds";
import WhatIsMorphios from "./components/WhatIsMorphios";
import BookMagician from "./components/BookMagician";
import SacredDance from "./components/SacredDance";
import StepIntoMystery from "./components/StepIntoMystery";
import DoorDetailsSection from "./components/DoorDetailsSection";
import BookMagician2 from "./components/BookMagician2";

export default function HomePage() {
  useEffect(() => {
    const hash = window.location.hash;
    if (hash) {
      setTimeout(() => {
        const el = document.querySelector(hash);
        if (el) {
          el.scrollIntoView({ behavior: "smooth" });
        }
      }, 100); // adjust based on content load timing
    }
  }, []);
  return (
    <MotionBox
      initial={{ opacity: 0, y: 40 }}
      animate={{ opacity: 1, y: 0 }}
      exit={{ opacity: 0, y: -20 }}
      transition={{ duration: 0.3 }}
      onAnimationStart={() => window.scrollTo({ top: 0, behavior: "smooth" })}
      width={"full"}
      overflow={"hidden"}
    >
      <HeroSection />
      <WhatIsMorphios />
      <MeetTheMinds />
      <BookMagician />
      <SacredDance />
      <StepIntoMystery />
      <DoorDetailsSection />
      <BookMagician2 />
    </MotionBox>
  );
}
