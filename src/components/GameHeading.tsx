import useGenre from "@/hooks/useGenre";
import usePlatform from "@/hooks/usePlatform";
import useGameQueryStore from "@/store";
import { Heading } from "@chakra-ui/react";

const GameHeading = () => {
  const genreId = useGameQueryStore((s) => s.gameQuery.genreId);
  const genre = useGenre(genreId);

  const platformId = useGameQueryStore((s) => s.gameQuery.platformId);
  const platform = usePlatform(platformId);

  const heading = `${platform?.name || ""} ${genre?.name || ""} Games`;
  return (
    <Heading
      as="h1"
      marginY={10}
      fontSize="3xl"
      style={{
        background: "linear-gradient(to left, #7928CA, #FF0080)", // Gradient color
        WebkitBackgroundClip: "text", // Clips the background to the text
        color: "transparent", // Makes the text color transparent to show the gradient
      }}
    >
      {heading}
    </Heading>
  );
};

export default GameHeading;
