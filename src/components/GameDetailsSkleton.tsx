import { SimpleGrid, Skeleton } from "@chakra-ui/react";
import { SkeletonText } from "./ui/skeleton";

const GameDetailsSkleton = () => {
  return (
    <SimpleGrid columns={{ base: 1, md: 2 }} columnGap={5}>
      <SkeletonText noOfLines={5} gap="4" />
      <Skeleton height="400px" />
    </SimpleGrid>
  );
};

export default GameDetailsSkleton;
