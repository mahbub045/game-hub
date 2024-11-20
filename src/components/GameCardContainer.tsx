import { Box } from "@chakra-ui/react";
import { ReactNode } from "react";

interface Props {
  children: ReactNode;
}

const GameCardContainer = ({ children }: Props) => {
  return (
    <Box
      position="relative" // Position to support glow
      _hover={{
        transform: "scale(1.03)", // Slight scale
        boxShadow: "0 0 20px 10px rgba(128, 90, 213, 0.6)", // Purple glow
        transition: "transform 0.15s ease-in, box-shadow 0.15s ease-in",
      }}
      borderRadius="lg" // Rounded corners
      overflow="hidden" // Prevent overflow
      border="1px solid rgba(128, 90, 213, 0.4)" // Optional border for definition
    >
      {children}
    </Box>
  );
};

export default GameCardContainer;
