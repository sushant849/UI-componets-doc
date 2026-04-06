import { Box, Heading, Text, VStack } from "@chakra-ui/react";
import ComponentPreview from "../../components/docs/ComponentPreview";
import { ModelEditor } from "ai-ui-kit";

export default function ModelEditorPage() {
  const handleSaveModel = (config: any) =>
    console.log("Saved model config:", config);

  const handleCancelModel = () =>
    console.log("Cancelled model editor");

  const codeString = `import { ModelEditor } from "ai-ui-kit";

const handleSaveModel = (config) => {
  console.log("Saved model config:", config);
};

const handleCancelModel = () => {
  console.log("Cancelled model editor");
};

<ModelEditor
  onSave={handleSaveModel}
  onCancel={handleCancelModel}
/>;`;

  return (
    <Box maxW="900px">
      <VStack align="start" gap={8}>

        {/* Title + Description */}
        <Box>
          <Heading>ModelEditor</Heading>
          <Text color="gray.600" mt={2}>
            A configurable UI component for editing AI model settings such as
            parameters, prompts, and configurations.
          </Text>
        </Box>

        {/* 🔥 Preview + Code */}
        <ComponentPreview
          title="Basic Usage"
          demo={
            <ModelEditor
              onSave={handleSaveModel}
              onCancel={handleCancelModel}
            />
          }
          code={codeString}
        />

        {/* Usage Section */}
        <Box>
          <Heading size="md" mb={2}>
            Usage
          </Heading>
          <Text color="gray.600">
            Use <b>ModelEditor</b> when you need to allow users to configure AI models.
            It provides a structured interface for editing parameters and handling
            save/cancel actions.
          </Text>
        </Box>

        {/* Example Section */}
        <Box>
          <Heading size="md" mb={2}>
            Example Use Case
          </Heading>
          <Text color="gray.600">
            In an AI dashboard, this component can be used to:
          </Text>

          <Text mt={2} color="gray.600">
            • Configure LLM parameters (temperature, max tokens)  
            • Update prompt templates  
            • Save model settings dynamically  
          </Text>
        </Box>

      </VStack>
    </Box>
  );
}