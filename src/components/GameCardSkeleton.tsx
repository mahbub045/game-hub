import { Card, CardBody, Skeleton } from "@chakra-ui/react";
import { SkeletonText } from "./ui/skeleton";

const GameCardSkeleton = () => {
  return (
    <Card.Root width="250px" borderRadius={10} overflow="hidden">
      <Skeleton height="200px" />
      <CardBody>
        <SkeletonText />
      </CardBody>
    </Card.Root>
  );
};

export default GameCardSkeleton;
