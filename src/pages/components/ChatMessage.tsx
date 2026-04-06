import { Box, Heading, Text, VStack } from "@chakra-ui/react";
import ComponentPreview from "../../components/docs/ComponentPreview";
import { ChatMessage } from "ai-ui-kit";

export default function ChatMessagePage() {
  const codeString = `import { ChatMessage } from "ai-ui-kit";

const message = {
  id: "1",
  role: "user",
  content: "Hello AI 👋",
};

<ChatMessage {...message} />;`;

  return (
    <Box maxW="900px">
      <VStack align="start" gap={8}>

        {/* Title */}
        <Box>
          <Heading>ChatMessage</Heading>
          <Text color="gray.600" mt={2}>
            A component used to render individual chat messages. It supports
            different roles like user and assistant for styling and alignment.
          </Text>
        </Box>

        {/* 🔥 Preview + Code */}
        <ComponentPreview
          title="Basic Usage"
          demo={
            <ChatMessage
              id="1"
              role="user"
              content="Hello AI 👋"
            />
          }
          code={codeString}
        />

        {/* Role Variations */}
        <Box>
          <Heading size="md" mb={2}>
            Roles
          </Heading>

          <VStack align="start" gap={4}>
            <ChatMessage
              id="1"
              role="user"
              content="This is a user message"
            />
            <ChatMessage
              id="2"
              role="assistant"
              content="This is an assistant response"
            />
          </VStack>
        </Box>

        {/* Usage */}
        <Box>
          <Heading size="md" mb={2}>
            Usage
          </Heading>
          <Text color="gray.600">
            Use <b>ChatMessage</b> inside chat interfaces to render individual
            messages. It is typically used within <b>ChatHistory</b> or custom
            chat layouts.
          </Text>
        </Box>

        {/* Example Use Cases */}
        <Box>
          <Heading size="md" mb={2}>
            Example Use Cases
          </Heading>
          <Text color="gray.600">
            • AI chat interfaces  
            • Messaging apps  
            • Conversational UIs  
            • Chat-based workflows  
          </Text>
        </Box>

        {/* Notes */}
        <Box>
          <Heading size="md" mb={2}>
            Notes
          </Heading>
          <Text color="gray.600">
            • <b>role</b> controls alignment and styling  
            • Supports "user" and "assistant"  
            • Can be extended for avatars or timestamps  
          </Text>
        </Box>

      </VStack>
    </Box>
  );
}