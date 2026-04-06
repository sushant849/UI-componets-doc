import { Box, Heading, Text, VStack } from "@chakra-ui/react";
import ComponentPreview from "../../components/docs/ComponentPreview";
import { Field, FileUpload } from "ai-ui-kit";

export default function FileUploadPage() {
  const codeString = `import { Field, FileUpload } from "ai-ui-kit";

<Field
  label="Upload Resume"
  helperText="PDF only, max 5MB"
>
  <FileUpload
    accept=".pdf"
    showSize
    clearable
  />
</Field>;`;

  return (
    <Box maxW="900px">
      <VStack align="start" gap={8}>

        {/* Title */}
        <Box>
          <Heading>FileUpload</Heading>
          <Text color="gray.600" mt={2}>
            A file upload component for selecting and managing files.
            Supports validation, size display, and clearing uploaded files.
          </Text>
        </Box>

        {/* 🔥 Preview + Code */}
        <ComponentPreview
          title="Basic Usage"
          demo={
            <Field
              label="Upload Resume"
              helperText="PDF only, max 5MB"
            >
              <FileUpload
                accept=".pdf"
                showSize
                clearable
              />
            </Field>
          }
          code={codeString}
        />

        {/* Usage */}
        <Box>
          <Heading size="md" mb={2}>
            Usage
          </Heading>
          <Text color="gray.600">
            Use <b>FileUpload</b> to allow users to upload files such as documents,
            images, or media. Combine with <b>Field</b> for better form structure.
          </Text>
        </Box>

        {/* Example Use Cases */}
        <Box>
          <Heading size="md" mb={2}>
            Example Use Cases
          </Heading>
          <Text color="gray.600">
            • Resume upload  
            • Profile image upload  
            • Document submission  
            • File attachments in forms  
          </Text>
        </Box>

        {/* Variants */}
        <Box>
          <Heading size="md" mb={2}>
            Variants
          </Heading>

          <VStack align="start" gap={4}>
            {/* Default */}
            <FileUpload />

            {/* With size */}
            <FileUpload showSize />

            {/* Clearable */}
            <FileUpload clearable />

            {/* Restricted file types */}
            <FileUpload accept=".png,.jpg" />
          </VStack>
        </Box>

        {/* Notes */}
        <Box>
          <Heading size="md" mb={2}>
            Notes
          </Heading>
          <Text color="gray.600">
            • <b>accept</b> restricts file types  
            • <b>showSize</b> displays file size  
            • <b>clearable</b> allows removing file  
            • Combine with Field for labels and validation  
          </Text>
        </Box>

      </VStack>
    </Box>
  );
}