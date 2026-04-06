import { Box, Heading, Text, VStack } from "@chakra-ui/react";
import ComponentPreview from "../../components/docs/ComponentPreview";
import { UploadProgress } from "ai-ui-kit";

export default function UploadProgressPage() {
  const codeString = `import { UploadProgress } from "ai-ui-kit";

<UploadProgress
  progress={60}
  label="Uploading file..."
  showPercentage
/>;`;

  return (
    <Box maxW="900px">
      <VStack align="start" gap={8}>

        {/* Title */}
        <Box>
          <Heading>UploadProgress</Heading>
          <Text color="gray.600" mt={2}>
            A visual progress indicator for file uploads. Displays progress,
            labels, and percentage for better user feedback.
          </Text>
        </Box>

        {/* 🔥 Preview + Code */}
        <ComponentPreview
          title="Basic Usage"
          demo={
            <Box maxW="400px">
              <UploadProgress
                progress={60}
                label="Uploading file..."
                showPercentage
              />
            </Box>
          }
          code={codeString}
        />

        {/* Usage */}
        <Box>
          <Heading size="md" mb={2}>
            Usage
          </Heading>
          <Text color="gray.600">
            Use <b>UploadProgress</b> to visually indicate upload status and
            progress during file operations.
          </Text>
        </Box>

        {/* Variants */}
        <Box>
          <Heading size="md" mb={2}>
            Variants
          </Heading>

          <VStack align="start" gap={4}>
            {/* With percentage */}
            <UploadProgress
              progress={75}
              label="Uploading..."
              showPercentage
            />

            {/* Without percentage */}
            <UploadProgress
              progress={40}
              label="Processing..."
            />

            {/* Completed */}
            <UploadProgress
              progress={100}
              label="Completed"
              showPercentage
            />
          </VStack>
        </Box>

        {/* Example Use Cases */}
        <Box>
          <Heading size="md" mb={2}>
            Example Use Cases
          </Heading>
          <Text color="gray.600">
            • File uploads  
            • Media processing  
            • API operations  
            • Background tasks  
          </Text>
        </Box>

        {/* Notes */}
        <Box>
          <Heading size="md" mb={2}>
            Notes
          </Heading>
          <Text color="gray.600">
            • <b>progress</b> should be between 0–100  
            • <b>label</b> describes current state  
            • <b>showPercentage</b> toggles % display  
            • Combine with FileQueue for full UX  
          </Text>
        </Box>

      </VStack>
    </Box>
  );
}