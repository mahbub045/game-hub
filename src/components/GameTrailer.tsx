import useTrailers from "@/hooks/useTrailers";
import { Box, Heading } from "@chakra-ui/react";

interface Props {
  gameId: number;
}

const GameTrailer = ({ gameId }: Props) => {
  const { data, error, isLoading } = useTrailers(gameId);
  const first = data?.results[0];

  if (isLoading) return null;

  if (error) throw error;

  return first ? (
    <>
      <Heading
        style={{
          background: "linear-gradient(to left, #7928CA, #FF0080)", // Gradient color
          WebkitBackgroundClip: "text", // Clips the background to the text
          color: "transparent", // Makes the text color transparent to show the gradient
        }}
        fontSize="4xl"
        marginY={5}
      >
        Trailer
      </Heading>
      <Box
        position="relative" // Position to support glow
        _hover={{
          transform: "scale(1.03)", // Slight scale
          boxShadow: "0 0 20px 10px rgba(128, 90, 213, 0.6)", // Purple glow
          transition: "transform 0.15s ease-in, box-shadow 0.15s ease-in",
        }}
        overflow="hidden" // Prevent overflow
        border="3px solid purple"
        borderRadius="md"
      >
        <video
          autoPlay
          muted
          playsInline
          src={first.data[480]}
          poster={first.preview}
          controls
        />
      </Box>
    </>
  ) : null;
};

export default GameTrailer;
