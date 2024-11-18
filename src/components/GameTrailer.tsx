import useTrailers from "@/hooks/useTrailers";
import { Heading } from "@chakra-ui/react";

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
      <Heading fontSize="5xl" marginY={5}>
        Trailer
      </Heading>
      <video
        autoPlay
        muted
        playsInline
        src={first.data[480]}
        poster={first.preview}
        controls
      />
    </>
  ) : null;
};

export default GameTrailer;
