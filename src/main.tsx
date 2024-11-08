import { ChakraProvider, defaultSystem } from "@chakra-ui/react";
import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import App from "./App";
import { ColorModeProvider } from "./components/ui/color-mode";
import { Provider } from "./components/ui/provider";
import "./index.css";

// Layout component
export default function Layout({ children }: { children: React.ReactNode }) {
  return (
    <ChakraProvider value={defaultSystem}>
      <ColorModeProvider>
        <Provider>{children}</Provider>
      </ColorModeProvider>
    </ChakraProvider>
  );
}

createRoot(document.getElementById("root")!).render(
  <StrictMode>
    <Layout>
      <App />
    </Layout>
  </StrictMode>
);
