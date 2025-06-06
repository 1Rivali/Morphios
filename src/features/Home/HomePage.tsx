import { MotionBox } from "@/core/utils/motion-components";
import { useEffect } from "react";
import DoorDetailsSection from "./components/DoorDetailsSection";
import DoorsSection from "./components/DoorsSection";
import { HeroSection } from "./components/HeroSection";
import PillarsSection from "./components/PillarsSection";
import { Section02 } from "./components/Section02";

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
      <Section02 />
      <DoorsSection />
      <PillarsSection />
      <DoorDetailsSection />
    </MotionBox>
  );
}
