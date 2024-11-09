import { Skeleton } from "@/components/ui/skeleton";
import { HStack, Stack } from "@chakra-ui/react";

const GenreListSkeleton = () => {
  return (
    <HStack gap="5" paddingY="5px">
      <Skeleton boxSize="32px" borderRadius={8} />
      <Stack flex="1">
        <Skeleton height="5" />
      </Stack>
    </HStack>
  );
};
export default GenreListSkeleton;
