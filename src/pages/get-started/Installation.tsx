import {
  Box,
  Heading,
  Text,
  VStack,
  Code,
  ListRoot,
  ListItem,
} from "@chakra-ui/react";

export default function Installation() {
  return (
    <Box maxW="800px">
      <VStack align="start" gap={6}>
        <Heading>Installation</Heading>
        <Text color="fg.muted">
          Set up <b>ai-ui-kit</b> in your app. The steps mirror the official{" "}
          <a
            href="https://chakra-ui.com/docs/get-started/installation"
            target="_blank"
            rel="noreferrer"
          >
            Chakra UI installation guide
          </a>{" "}
          (Chakra powers the styling layer used by this kit).
        </Text>

        <Box w="full">
          <Heading size="md" mb={2}>
            1. Install ai-ui-kit and Emotion
          </Heading>
          <Text mb={2}>
            Chakra UI v3 expects <Code>@emotion/react</Code> at runtime (see{" "}
            <a
              href="https://chakra-ui.com/docs/get-started/installation"
              target="_blank"
              rel="noreferrer"
            >
              Chakra installation
            </a>
            ).
          </Text>
          <Code as="pre" display="block" whiteSpace="pre" p={3} width="full">
            npm install ai-ui-kit @emotion/react
          </Code>
        </Box>

        <Box w="full">
          <Heading size="md" mb={2}>
            2. Install remaining peers
          </Heading>
          <Text mb={2}>React, Framer Motion, and Chakra UI:</Text>
          <Code as="pre" display="block" whiteSpace="pre" p={3} width="full">
            {`npm install react react-dom @chakra-ui/react framer-motion`}
          </Code>
        </Box>

        <Box w="full">
          <Heading size="md" mb={2}>
            3. Wrap your app with ChakraProvider
          </Heading>
          <Text mb={2}>
            Use the default design system so components from{" "}
            <Code>ai-ui-kit</Code> receive theme tokens and recipes.
          </Text>
          <Code
            as="pre"
            display="block"
            whiteSpace="pre"
            p={3}
            width="full"
            fontSize="sm"
          >
            {`import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import { ChakraProvider, defaultSystem } from "@chakra-ui/react";
import App from "./App";

createRoot(document.getElementById("root")!).render(
  <StrictMode>
    <ChakraProvider value={defaultSystem}>
      <App />
    </ChakraProvider>
  </StrictMode>
);`}
          </Code>
        </Box>

        <Box w="full">
          <Heading size="md" mb={2}>
            4. Use components
          </Heading>
          <Text mb={2}>Import from the package and render:</Text>
          <Code
            as="pre"
            display="block"
            whiteSpace="pre"
            p={3}
            width="full"
            fontSize="sm"
          >
            {`import { Button } from "ai-ui-kit";

export function Demo() {
  return <Button variant="solid">Click me</Button>;
}`}
          </Code>
        </Box>

        <Box>
          <Heading size="md" mb={2}>
            Tips
          </Heading>
          <ListRoot gap={2}>
            <ListItem>
              Keep a single <Code>ChakraProvider</Code> at the root of your app.
            </ListItem>
            <ListItem>
              Optional: add Chakra snippets with{" "}
              <Code>npx @chakra-ui/cli snippet add</Code> for local primitives
              (see Chakra docs).
            </ListItem>
            <ListItem>TypeScript is recommended for prop discovery.</ListItem>
          </ListRoot>
        </Box>
      </VStack>
    </Box>
  );
}
