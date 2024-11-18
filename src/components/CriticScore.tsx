import { Badge } from "@chakra-ui/react";

interface Props {
  score: number;
}

const CriticScore = ({ score }: Props) => {
  const color = score > 85 ? "green" : score > 60 ? "yellow" : "red"; // Default to "red" for low scores

  return score ? (
    <Badge color={color} fontSize="14px" paddingX={2} borderRadius="4px">
      {score}
    </Badge>
  ) : (
    <Badge color="red" fontSize="14px" paddingX={2} borderRadius="4px">
      None
    </Badge>
  );
};

export default CriticScore;
