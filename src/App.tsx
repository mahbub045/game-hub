import { Grid, GridItem, Stack } from "@chakra-ui/react";
import "./App.css";
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
      <GridItem area="nav" >
        <NavBar />
      </GridItem>
      {/* Side Bar */}
      <Stack hideBelow="lg">
        <GridItem area="aside" bg="gold">
          Aside
        </GridItem>
      </Stack>
      {/* Main */}
      <GridItem area="main" bg="dodgerblue">
        Main
      </GridItem>
    </Grid>
  );
}

export default App;
