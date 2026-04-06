import { Box, Heading, Text, VStack } from "@chakra-ui/react";
import ComponentPreview from "../../components/docs/ComponentPreview";
import { Clipboard } from "ai-ui-kit";

export default function ClipboardPage() {
  const codeString = `import { Clipboard } from "ai-ui-kit";

// Button variant
<Clipboard
  value="https://example.com"
  type="button"
  buttonLabel="Copy link"
  timeout={3000}
/>

// Input variant
<Clipboard
  value="Some text"
  type="input"
  label="Copy value"
/>

// Link variant
<Clipboard
  value="https://google.com"
  type="link"
  linkAppearance
/>;`;

  return (
    <Box maxW="900px">
      <VStack align="start" gap={8}>

        {/* Title */}
        <Box>
          <Heading>Clipboard</Heading>
          <Text color="gray.600" mt={2}>
            A utility component that allows users to copy content to clipboard.
            Supports multiple UI types like button, input, and link.
          </Text>
        </Box>

        {/* 🔥 Preview + Code */}
        <ComponentPreview
          title="Clipboard Variants"
          demo={
            <VStack align="start" gap={4}>
              <Clipboard
                value="https://example.com"
                type="button"
                buttonLabel="Copy link"
                timeout={3000}
              />

              <Clipboard
                value="Some text"
                type="input"
                label="Copy value"
              />

              <Clipboard
                value="https://google.com"
                type="link"
                linkAppearance
              />
            </VStack>
          }
          code={codeString}
        />

        {/* Usage */}
        <Box>
          <Heading size="md" mb={2}>
            Usage
          </Heading>
          <Text color="gray.600">
            Use <b>Clipboard</b> when you need to allow users to quickly copy
            text, links, or values. It provides multiple UI patterns for
            different use cases.
          </Text>
        </Box>

        {/* Variants */}
        <Box>
          <Heading size="md" mb={2}>
            Variants
          </Heading>

          <Text color="gray.600">
            • <b>button</b> → Copy using a button  
            • <b>input</b> → Copy from an input field  
            • <b>link</b> → Clickable link copy  
          </Text>
        </Box>

        {/* Example Use Cases */}
        <Box>
          <Heading size="md" mb={2}>
            Example Use Cases
          </Heading>
          <Text color="gray.600">
            • Share links  
            • Copy API keys or tokens  
            • Copy generated AI responses  
            • Copy configuration values  
          </Text>
        </Box>

        {/* Notes */}
        <Box>
          <Heading size="md" mb={2}>
            Notes
          </Heading>
          <Text color="gray.600">
            • <b>value</b> is the text to copy  
            • <b>type</b> controls UI behavior  
            • <b>timeout</b> controls feedback duration  
            • Supports different UI patterns for flexibility  
          </Text>
        </Box>

      </VStack>
    </Box>
  );
}