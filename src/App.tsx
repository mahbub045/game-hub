import { Button } from "@/components/ui/button";
import { HStack } from "@chakra-ui/react";
import "./App.css";

function App() {
  return (
    <>
      <h2>Hello World</h2>
      <HStack>
        <Button>Click me</Button>
        <Button>Click me</Button>
      </HStack>
    </>
  );
}

export default App;
