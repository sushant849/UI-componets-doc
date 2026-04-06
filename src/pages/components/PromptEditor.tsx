import { Box, Heading, Text, VStack } from "@chakra-ui/react";
import ComponentPreview from "../../components/docs/ComponentPreview";
import { PromptEditor } from "ai-ui-kit";

export default function PromptEditorPage() {
  const handleSavePrompt = (config: any) =>
    console.log("Saved prompt:", config);

  const handleCancelPrompt = () =>
    console.log("Cancelled prompt editor");

  const codeString = `import { PromptEditor } from "ai-ui-kit";

const handleSavePrompt = (config) => {
  console.log("Saved prompt:", config);
};

const handleCancelPrompt = () => {
  console.log("Cancelled prompt editor");
};

<PromptEditor
  onSave={handleSavePrompt}
  onCancel={handleCancelPrompt}
  initialValue={{
    title: "Example Prompt",
    description: "This is a sample description",
    prompt: "Write a short."
  }}
/>;`;

  return (
    <Box maxW="900px">
      <VStack align="start" gap={8}>

        {/* Title + Description */}
        <Box>
          <Heading>PromptEditor</Heading>
          <Text color="gray.600" mt={2}>
            A UI component for creating and editing AI prompts with title,
            description, and prompt content.
          </Text>
        </Box>

        {/* 🔥 Preview + Code */}
        <ComponentPreview
          title="Basic Usage"
          demo={
            <PromptEditor
              onSave={handleSavePrompt}
              onCancel={handleCancelPrompt}
              initialValue={{
                title: "Example Prompt",
                description: "This is a sample description",
                prompt: "Write a short."
              }}
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
            Use <b>PromptEditor</b> when you need to allow users to create or edit
            prompts for AI models. It provides structured fields for managing
            prompt metadata and content.
          </Text>
        </Box>

        {/* Example Use Case */}
        <Box>
          <Heading size="md" mb={2}>
            Example Use Case
          </Heading>
          <Text color="gray.600">
            This component is useful in AI applications such as:
          </Text>

          <Text mt={2} color="gray.600">
            • Prompt management dashboards  
            • LLM workflow builders  
            • AI content generation tools  
          </Text>
        </Box>

      </VStack>
    </Box>
  );
}