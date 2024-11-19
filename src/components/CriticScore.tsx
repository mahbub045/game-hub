import { Badge } from "@chakra-ui/react";

interface Props {
  score: number;
}

const CriticScore = ({ score }: Props) => {
  const color = score >= 80 ? "green" : score >= 60 ? "orange" : "red"; // Default to "red" for low scores

  return score ? (
    <Badge color={color} fontSize="14px" paddingX={2} border="1px solid purple" borderRadius="4px">
      {score}
    </Badge>
  ) : (
    <Badge color="red" fontSize="14px" paddingX={2} border="1px solid purple" borderRadius="4px">
      None
    </Badge>
  );
};

export default CriticScore;
