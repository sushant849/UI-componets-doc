import { Box, Heading, Text, VStack } from "@chakra-ui/react";
import ComponentPreview from "../../components/docs/ComponentPreview";
import { Dropzone } from "ai-ui-kit";
import type { DropzoneProps } from "ai-ui-kit";

export default function DropzonePage() {
  const createDropzoneProps = (): DropzoneProps => ({
    onFilesSelected: (files) => console.log(files),
    multiple: false,
  });

  const codeString = `import { Dropzone } from "ai-ui-kit";

<Dropzone
  onFilesSelected={(files) => console.log(files)}
  multiple={false}
/>;`;

  return (
    <Box maxW="900px">
      <VStack align="start" gap={8}>

        {/* Title */}
        <Box>
          <Heading>Dropzone</Heading>
          <Text color="gray.600" mt={2}>
            A drag-and-drop file upload component that allows users to easily
            select files by dropping or clicking.
          </Text>
        </Box>

        {/* 🔥 Preview + Code */}
        <ComponentPreview
          title="Basic Usage"
          demo={
            <Box maxW="400px">
              <Dropzone {...createDropzoneProps()} />
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
            Use <b>Dropzone</b> for file uploads where drag-and-drop interaction
            improves user experience.
          </Text>
        </Box>

        {/* Variants */}
        <Box>
          <Heading size="md" mb={2}>
            Variants
          </Heading>

          <VStack align="start" gap={4}>
            {/* Single file */}
            <Dropzone
              onFilesSelected={(files) => console.log(files)}
              multiple={false}
            />

            {/* Multiple files */}
            <Dropzone
              onFilesSelected={(files) => console.log(files)}
              multiple
            />
          </VStack>
        </Box>

        {/* Example Use Cases */}
        <Box>
          <Heading size="md" mb={2}>
            Example Use Cases
          </Heading>
          <Text color="gray.600">
            • Image uploads  
            • Document uploads  
            • Drag-and-drop file systems  
            • Media upload tools  
          </Text>
        </Box>

        {/* Notes */}
        <Box>
          <Heading size="md" mb={2}>
            Notes
          </Heading>
          <Text color="gray.600">
            • <b>onFilesSelected</b> returns selected files  
            • <b>multiple</b> enables multi-file upload  
            • Supports drag & drop and click upload  
          </Text>
        </Box>

      </VStack>
    </Box>
  );
}