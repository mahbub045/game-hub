import { Grid, GridItem, Stack } from "@chakra-ui/react";
import "./App.css";
import GameGrid from "./components/GameGrid";
import GenreList from "./components/GenreList";
import NavBar from "./components/NavBar";

function App() {
  return (
    <Grid
      templateAreas={{
        base: `"nav" "main"`,
        lg: `"nav nav" "aside main"`,
      }}
    >
      {/* Nave Bar */}
      <GridItem area="nav">
        <NavBar />
      </GridItem>
      {/* Side Bar */}
      <Stack hideBelow="lg">
        <GridItem area="aside">
          <GenreList />
        </GridItem>
      </Stack>
      {/* Main */}
      <GridItem area="main">
        <GameGrid />
      </GridItem>
    </Grid>
  );
}

export default App;
