import Game from "@/entities/Game";
import getCroppedImageUrl from "@/services/image-url";
import { Card, CardBody, Heading, HStack, Image, Text } from "@chakra-ui/react";
import { Link } from "react-router-dom";
import CriticScore from "./CriticScore";
import Emoji from "./Emoji";
import PlatformIconList from "./PlatformIconList";

interface Props {
  game: Game;
}

const GameCard = ({ game }: Props) => {
  return (
    <Card.Root>
      <Image src={getCroppedImageUrl(game.background_image)} />
      <CardBody>
        <HStack justifyContent="space-between" marginBottom={3}>
          <PlatformIconList
            platforms={game.parent_platforms.map((p) => p.platform)}
          />
          <CriticScore score={game.metacritic} />
        </HStack>
        <Heading fontSize="xl">
          <Text
            _hover={{
              textDecoration: "underline",
              cursor: "pointer",
            }}
          >
            <Link to={"/games/" + game.slug}>{game.name}</Link>
          </Text>
          <Emoji rating={game.rating_top} />
        </Heading>
      </CardBody>
    </Card.Root>
  );
};

export default GameCard;
