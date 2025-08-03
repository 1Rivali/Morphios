import { arrowRight } from "@/core/constants/assets";
import { Button, Image } from "@chakra-ui/react";

interface MorphButtonProps {
  onClick?: () => void;
  width?:
  | string
  | {
    base: string;
    lg: string;
  };
  text: string;
  bgColor?: string;
  color?: string;
  arrowIc?: boolean;
  fontSize?: string;
  p?: string
}

const MorphButton = ({ onClick, text, width, bgColor, color, arrowIc = true, fontSize, p }: MorphButtonProps) => {
  return (
    <Button
      onClick={onClick}
      background={bgColor ?? "white"}
      color={color ?? "black"}
      width={width ?? "full"}
      fontWeight={"extrabold"}
      fontFamily={"roboto"}
      borderRadius={"xl"}
      fontSize={fontSize}
      p={p}
    >
      {text}
      {arrowIc && <Image src={arrowRight} />}
    </Button>
  );
};

export default MorphButton;
