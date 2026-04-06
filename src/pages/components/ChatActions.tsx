import { Box, Heading, Text, VStack } from "@chakra-ui/react";
import ComponentPreview from "../../components/docs/ComponentPreview";
import { ChatActions } from "ai-ui-kit";

export default function ChatActionsPage() {
  const codeString = `import { ChatActions } from "ai-ui-kit";

<ChatActions
  onCopy={() => console.log("Copy clicked")}
  onRegenerate={() => console.log("Regenerate clicked")}
  onLike={() => console.log("Liked")}
  onDislike={() => console.log("Disliked")}
  size="md"
/>;`;

  return (
    <Box maxW="900px">
      <VStack align="start" gap={8}>

        {/* Title + Description */}
        <Box>
          <Heading>ChatActions</Heading>
          <Text color="gray.600" mt={2}>
            A compact action bar for chat messages that provides common actions
            like copy, regenerate, like, and dislike.
          </Text>
        </Box>

        {/* 🔥 Preview + Code */}
        <ComponentPreview
          title="Basic Usage"
          demo={
            <ChatActions
              onCopy={() => alert("Copied")}
              onRegenerate={() => alert("Regenerate")}
              onLike={() => alert("Liked 👍")}
              onDislike={() => alert("Disliked 👎")}
              size="md"
            />
          }
          code={codeString}
        />

        {/* Usage */}
        <Box>
          <Heading size="md" mb={2}>
            Usage
          </Heading>
          <Text color="gray.600">
            Use <b>ChatActions</b> in chat interfaces to provide users with
            quick actions on AI responses such as copying content, regenerating
            responses, or giving feedback.
          </Text>
        </Box>

        {/* Example Use Cases */}
        <Box>
          <Heading size="md" mb={2}>
            Example Use Cases
          </Heading>
          <Text color="gray.600">
            • AI chat applications  
            • LLM assistants  
            • Message feedback systems  
            • Chat-based workflows  
          </Text>
        </Box>

        {/* Variants / Sizes */}
        <Box>
          <Heading size="md" mb={2}>
            Sizes
          </Heading>

          <VStack align="start" gap={3}>
            <ChatActions size="sm" />
            <ChatActions size="md" />
            <ChatActions size="lg" />
          </VStack>
        </Box>

      </VStack>
    </Box>
  );
}