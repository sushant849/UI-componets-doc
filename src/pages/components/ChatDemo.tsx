import { Box, Heading, Text, VStack } from "@chakra-ui/react";
import { useState } from "react";
import ComponentPreview from "../../components/docs/ComponentPreview";
import { ChatHistory, ChatInput, ChatShell } from "ai-ui-kit";

type MessageType = {
  id: string;
  role: "user" | "assistant";
  content: string;
};

export default function ChatDemoPage() {
  const [messages, setMessages] = useState<MessageType[]>([
    { id: "1", role: "assistant", content: "Welcome! Start typing below..." },
  ]);

  const addMessage = (role: "user" | "assistant", content: string) => {
    setMessages((prev) => [
      ...prev,
      { id: (prev.length + 1).toString(), role, content },
    ]);
  };

  const handleSendMessage = (message: string) => {
    addMessage("user", message);

    setTimeout(() => {
      addMessage("assistant", `You said: "${message}"`);
    }, 500);
  };

  const codeString = `import { useState } from "react";
import { ChatHistory, ChatInput, ChatShell } from "ai-ui-kit";

const [messages, setMessages] = useState([
  { id: "1", role: "assistant", content: "Welcome! Start typing below..." },
]);

const handleSendMessage = (message) => {
  setMessages((prev) => [
    ...prev,
    { id: Date.now().toString(), role: "user", content: message },
  ]);

  setTimeout(() => {
    setMessages((prev) => [
      ...prev,
      { id: Date.now().toString(), role: "assistant", content: \`You said: "\${message}"\` },
    ]);
  }, 500);
};

<ChatShell header="AI Chat">
  <ChatHistory messages={messages} />
  <ChatInput onSend={handleSendMessage} />
</ChatShell>;`;

  return (
    <Box maxW="900px">
      <VStack align="start" gap={8}>

        {/* Title */}
        <Box>
          <Heading>Chat System</Heading>
          <Text color="gray.600" mt={2}>
            A complete chat interface built using <b>ChatShell</b>,{" "}
            <b>ChatHistory</b>, and <b>ChatInput</b>. Ideal for AI chat
            applications and conversational UIs.
          </Text>
        </Box>

        {/* 🔥 Preview + Code */}
        <ComponentPreview
          title="Basic Chat Example"
          demo={
            <ChatShell header="AI Chat">
              <ChatHistory messages={messages} />
              <ChatInput onSend={handleSendMessage} />
            </ChatShell>
          }
          code={codeString}
        />

        {/* Usage */}
        <Box>
          <Heading size="md" mb={2}>
            Usage
          </Heading>
          <Text color="gray.600">
            Combine <b>ChatShell</b>, <b>ChatHistory</b>, and{" "}
            <b>ChatInput</b> to build a complete chat interface. Manage
            messages using state and update them dynamically based on user
            input or API responses.
          </Text>
        </Box>

        {/* Example Use Cases */}
        <Box>
          <Heading size="md" mb={2}>
            Example Use Cases
          </Heading>
          <Text color="gray.600">
            • AI chatbots (ChatGPT-like UI)  
            • Customer support chat  
            • Internal AI tools  
            • Conversational workflows  
          </Text>
        </Box>

        {/* Notes */}
        <Box>
          <Heading size="md" mb={2}>
            Notes
          </Heading>
          <Text color="gray.600">
            • Messages should follow `{` id, role, content `}` format  
            • Supports async responses (API calls)  
            • Easily extendable with streaming or typing indicators  
          </Text>
        </Box>

      </VStack>
    </Box>
  );
}