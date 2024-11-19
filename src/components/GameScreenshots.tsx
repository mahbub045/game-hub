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
      <Heading fontSize="5xl" marginY={7}>
        Screenshots
      </Heading>
      <SimpleGrid columns={{ base: 1, md: 2 }} columnGap={2} rowGap={2}>
        {data?.results.map((file) => (
          <Image
            border="md"
            borderRadius="md"
            borderColor="purple"
            key={file.id}
            src={file.image}
          />
        ))}
      </SimpleGrid>
    </>
  );
};

export default GameScreenshots;
