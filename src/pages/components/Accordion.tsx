import { Box, Heading, Text, VStack } from "@chakra-ui/react";
import ComponentPreview from "../../components/docs/ComponentPreview";
import { Accordion } from "ai-ui-kit";

export default function AccordionPage() {
  const codeString = `import { Accordion } from "ai-ui-kit";

<Accordion
  items={[
    {
      value: "1",
      title: "Section 1",
      content: "Content 1",
    },
    {
      value: "2",
      title: "Section 2",
      content: "Content 2",
    },
    {
      value: "3",
      title: "Section 3",
      content: "Content 3",
      disabled: true,
    },
  ]}
/>;`;

  return (
    <Box maxW="900px">
      <VStack align="start" gap={8}>

        {/* Title */}
        <Box>
          <Heading>Accordion</Heading>
          <Text color="gray.600" mt={2}>
            A component used to toggle visibility of content sections.
            Useful for FAQs, collapsible panels, and structured information.
          </Text>
        </Box>

        {/* 🔥 Preview + Code */}
        <ComponentPreview
          title="Basic Usage"
          demo={
            <Accordion
              items={[
                {
                  value: "1",
                  title: "Section 1",
                  content: "Content 1",
                },
                {
                  value: "2",
                  title: "Section 2",
                  content: "Content 2",
                },
                {
                  value: "3",
                  title: "Section 3",
                  content: "Content 3",
                  disabled: true,
                },
              ]}
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
            Use <b>Accordion</b> to organize content into collapsible sections.
            It helps improve readability and reduces UI clutter.
          </Text>
        </Box>

        {/* Example Use Cases */}
        <Box>
          <Heading size="md" mb={2}>
            Example Use Cases
          </Heading>
          <Text color="gray.600">
            • FAQs sections  
            • Documentation content  
            • Settings panels  
            • Expandable lists  
          </Text>
        </Box>

        {/* Variants */}
        <Box>
          <Heading size="md" mb={2}>
            Variants
          </Heading>

          <VStack align="start" gap={4}>
            {/* Default */}
            <Accordion
              items={[
                { value: "1", title: "Default 1", content: "Content" },
                { value: "2", title: "Default 2", content: "Content" },
              ]}
            />

            {/* With disabled */}
            <Accordion
              items={[
                { value: "1", title: "Active", content: "Open me" },
                { value: "2", title: "Disabled", content: "Can't open", disabled: true },
              ]}
            />
          </VStack>
        </Box>

        {/* Notes */}
        <Box>
          <Heading size="md" mb={2}>
            Notes
          </Heading>
          <Text color="gray.600">
            • <b>items</b> is an array of accordion sections  
            • Each item requires <b>value</b>, <b>title</b>, and <b>content</b>  
            • <b>disabled</b> prevents interaction  
            • Useful for structured UI layouts  
          </Text>
        </Box>

      </VStack>
    </Box>
  );
}