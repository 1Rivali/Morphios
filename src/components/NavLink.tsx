import { icUnderline } from "@/core/constants/assets";
import { Image, Text, VStack } from "@chakra-ui/react";
import { Link, useLocation } from "react-router-dom";

interface NavLinkItemProps {
  to: string;
  label: string;
  exact?: boolean;
}

export function NavLinkItem({ to, label, exact = false }: NavLinkItemProps) {
  const location = useLocation();
  const isActive = exact
    ? location.pathname === to
    : location.pathname.startsWith(to);

  return (
    <Link to={to}>
      <VStack gap={0} align="center">
        <Text cursor="pointer" fontWeight={isActive ? "extrabold" : "normal"}>
          {label}
        </Text>
        {isActive && <Image src={icUnderline} width="full" />}
      </VStack>
    </Link>
  );
}
