import { Box, Heading, Text, VStack } from "@chakra-ui/react";
import ComponentPreview from "../../components/docs/ComponentPreview";
import { Collapsible } from "ai-ui-kit";

export default function CollapsiblePage() {
  const codeString = `import { Collapsible } from "ai-ui-kit";

<Collapsible
  title="Click me"
  showIndicator
  defaultOpen={false}
>
  <div>Content inside collapsible</div>
</Collapsible>;`;

  return (
    <Box maxW="900px">
      <VStack align="start" gap={8}>

        {/* Title */}
        <Box>
          <Heading>Collapsible</Heading>
          <Text color="gray.600" mt={2}>
            A simple component to toggle visibility of content. Useful for
            expandable sections and minimal UI interactions.
          </Text>
        </Box>

        {/* 🔥 Preview + Code */}
        <ComponentPreview
          title="Basic Usage"
          demo={
            <Collapsible
              title="Click me"
              showIndicator
              defaultOpen={false}
            >
              <Box p={2}>Content inside collapsible</Box>
            </Collapsible>
          }
          code={codeString}
        />

        {/* Usage */}
        <Box>
          <Heading size="md" mb={2}>
            Usage
          </Heading>
          <Text color="gray.600">
            Use <b>Collapsible</b> when you need a lightweight way to show or hide
            content without managing complex state.
          </Text>
        </Box>

        {/* Example Use Cases */}
        <Box>
          <Heading size="md" mb={2}>
            Example Use Cases
          </Heading>
          <Text color="gray.600">
            • Show/hide details  
            • Expandable descriptions  
            • Minimal FAQ sections  
            • Advanced settings toggle  
          </Text>
        </Box>

        {/* Variants */}
        <Box>
          <Heading size="md" mb={2}>
            Variants
          </Heading>

          <VStack align="start" gap={4}>
            {/* Default */}
            <Collapsible title="Default">
              <Box p={2}>Content</Box>
            </Collapsible>

            {/* Open by default */}
            <Collapsible title="Open by default" defaultOpen>
              <Box p={2}>Visible content</Box>
            </Collapsible>

            {/* Without indicator */}
            <Collapsible title="No indicator" showIndicator={false}>
              <Box p={2}>Hidden indicator</Box>
            </Collapsible>
          </VStack>
        </Box>

        {/* Notes */}
        <Box>
          <Heading size="md" mb={2}>
            Notes
          </Heading>
          <Text color="gray.600">
            • <b>title</b> defines the clickable header  
            • <b>defaultOpen</b> controls initial state  
            • <b>showIndicator</b> toggles arrow icon  
            • Lightweight alternative to Accordion  
          </Text>
        </Box>

      </VStack>
    </Box>
  );
}