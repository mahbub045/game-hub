import useScreenshots from "@/hooks/useScreenshot";
import { Heading, Image, SimpleGrid } from "@chakra-ui/react";

interface Props {
  gameId: number;
}

const GameScreenshots = ({ gameId }: Props) => {
  const { data, isLoading, error } = useScreenshots(gameId);

  if (isLoading) return null;

  if (error) throw error;

  return (
    <>
      <Heading
        fontSize="4xl"
        marginY={7}
        style={{
          background: "linear-gradient(to left, #7928CA, #FF0080)", // Gradient color
          WebkitBackgroundClip: "text", // Clips the background to the text
          color: "transparent", // Makes the text color transparent to show the gradient
        }}
      >
        Screenshots
      </Heading>
      <SimpleGrid columns={{ base: 1, md: 2 }} columnGap={2} rowGap={2}>
        {data?.results.map((file) => (
          <Image
            position="relative" // Position to support glow
            _hover={{
              transform: "scale(1.03)", // Slight scale
              boxShadow: "0 0 20px 10px rgba(128, 90, 213, 0.6)", // Purple glow
              transition: "transform 0.15s ease-in, box-shadow 0.15s ease-in",
            }}
            overflow="hidden" // Prevent overflow
            border="1px solid purple" // Optional border for definition
            borderRadius="md"
            key={file.id}
            src={file.image}
          />
        ))}
      </SimpleGrid>
    </>
  );
};

export default GameScreenshots;
