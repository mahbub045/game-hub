import GameGrid from "@/components/GameGrid";
import GameHeading from "@/components/GameHeading";
import GenreList from "@/components/GenreList";
import PlatformSelector from "@/components/PlatformSelector";
import SortSelector from "@/components/SortSelector";
import { Grid, Stack, GridItem, Box, Flex } from "@chakra-ui/react";

const HomePage = () => {
  return (
    <Grid
      templateAreas={{
        base: `"main"`,
        lg: `"aside main"`,
      }}
      templateColumns={{
        base: "1fr",
        lg: "200px 1fr",
      }}
    >
      {/* Side Bar */}
      <Stack hideBelow="lg">
        <GridItem area="aside" paddingX={5}>
          <GenreList />
        </GridItem>
      </Stack>
      {/* Main */}
      <GridItem area="main">
        <Box paddingLeft={2}>
          <GameHeading />
          <Flex marginBottom={12}>
            <Box marginRight={5} position="absolute" zIndex="dropdown">
              <PlatformSelector />
            </Box>
            <Box marginLeft="130px" position="absolute" zIndex="dropdown">
              <SortSelector />
            </Box>
          </Flex>
        </Box>
        <GameGrid />
      </GridItem>
    </Grid>
  );
};

export default HomePage;
