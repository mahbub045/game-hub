import { Box, Flex, Grid, GridItem, Stack } from "@chakra-ui/react";
import "./App.css";
import GameGrid from "./components/GameGrid";
import GameHeading from "./components/GameHeading";
import GenreList from "./components/GenreList";
import NavBar from "./components/NavBar";
import PlatformSelector from "./components/PlatformSelector";
import SortSelector from "./components/SortSelector";

function App() {
  return (
    <Grid
      templateAreas={{
        base: `"nav" "main"`,
        lg: `"nav nav" "aside main"`,
      }}
      templateColumns={{
        base: "1fr",
        lg: "200px 1fr",
      }}
    >
      {/* Nave Bar */}
      <GridItem area="nav">
        <NavBar />
      </GridItem>
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
}

export default App;
