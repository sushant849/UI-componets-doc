import {
  Box,
  Heading,
  Text,
  VStack,
  Code,
  ListRoot,
  ListItem,
} from "@chakra-ui/react";

export default function Overview() {
  return (
    <Box maxW="800px">
      <VStack align="start" gap={6}>
        <Heading>AI UI Kit</Heading>
        <Text fontSize="lg" color="fg.muted">
          Reusable React components for AI applications, built with React,
          TypeScript, Chakra UI v3, and Framer Motion.
        </Text>

        <Box>
          <Heading size="md" mb={2}>
            Features
          </Heading>
          <ListRoot gap={2}>
            <ListItem>React + TypeScript</ListItem>
            <ListItem>Chakra UI v3 primitives and recipes</ListItem>
            <ListItem>AI-focused layouts (chat, RAG, admin, uploads)</ListItem>
            <ListItem>Tree-shakable exports from ai-ui-kit</ListItem>
            <ListItem>Framer Motion for motion where needed</ListItem>
          </ListRoot>
        </Box>

        <Box>
          <Heading size="md" mb={2}>
            Installation
          </Heading>
          <Code as="pre" display="block" whiteSpace="pre" p={3} width="full">
            npm install ai-ui-kit
          </Code>
        </Box>

        <Box>
          <Heading size="md" mb={2}>
            Peer dependencies
          </Heading>
          <Code as="pre" display="block" whiteSpace="pre" p={3} width="full">
            {`npm install react react-dom @chakra-ui/react @emotion/react framer-motion`}
          </Code>
        </Box>

        <Box>
          <Heading size="md" mb={2}>
            Example
          </Heading>
          <Code as="pre" display="block" whiteSpace="pre" p={3} width="full" fontSize="sm">
            {`import { ChatHistory } from "ai-ui-kit";

function App() {
  return (
    <ChatHistory
      messages={[
        { id: "1", role: "user", content: "Hello AI" },
        { id: "2", role: "assistant", content: "Hi there" },
      ]}
    />
  );
}`}
          </Code>
        </Box>

        <Box>
          <Heading size="md" mb={2}>
            Browse components
          </Heading>
          <Text color="fg.muted">
            Use the sidebar to open a component page. Each page includes a live
            preview and a copyable code snippet, similar to the{" "}
            <a
              href="https://chakra-ui.com/docs/get-started/installation"
              target="_blank"
              rel="noreferrer"
            >
              Chakra UI installation
            </a>{" "}
            documentation layout.
          </Text>
        </Box>
      </VStack>
    </Box>
  );
}
