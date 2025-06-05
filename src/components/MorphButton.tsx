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
}

const MorphButton = ({ onClick, text, width }: MorphButtonProps) => {
  return (
    <Button
      onClick={onClick}
      background={"white"}
      color={"black"}
      width={width ?? "full"}
      fontWeight={"extrabold"}
    >
      {text}
      <Image src={arrowRight} />
    </Button>
  );
};

export default MorphButton;
