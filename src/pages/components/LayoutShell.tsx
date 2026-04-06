import { Box, Heading, Text, VStack } from "@chakra-ui/react";
import ComponentPreview from "../../components/docs/ComponentPreview";
import { LayoutShell } from "ai-ui-kit";

export default function LayoutShellPage() {
  const codeString = `import { LayoutShell } from "ai-ui-kit";

<LayoutShell
  header={<div>Header Area</div>}
  sidebar={<div>Sidebar Area</div>}
  sidebarWidth="240px"
>
  <div>Main Content Here</div>
</LayoutShell>;`;

  return (
    <Box maxW="900px">
      <VStack align="start" gap={8}>

        {/* Title */}
        <Box>
          <Heading>LayoutShell</Heading>
          <Text color="gray.600" mt={2}>
            A layout component that provides a structured UI with a header,
            sidebar, and main content area. Ideal for dashboards and admin panels.
          </Text>
        </Box>

        {/* 🔥 Preview + Code */}
        <ComponentPreview
          title="Basic Layout"
          demo={
            <LayoutShell
              header={<Box p={3} bg="gray.200">Header Area</Box>}
              sidebar={<Box p={3} bg="gray.100">Sidebar Area</Box>}
              sidebarWidth="240px"
            >
              <Box p={4}>Main Content Here</Box>
            </LayoutShell>
          }
          code={codeString}
        />

        {/* Usage */}
        <Box>
          <Heading size="md" mb={2}>
            Usage
          </Heading>
          <Text color="gray.600">
            Use <b>LayoutShell</b> to create consistent layouts across your
            application. It helps organize content into header, sidebar, and
            main sections.
          </Text>
        </Box>

        {/* Example Use Cases */}
        <Box>
          <Heading size="md" mb={2}>
            Example Use Cases
          </Heading>
          <Text color="gray.600">
            • Admin dashboards  
            • Analytics panels  
            • AI tool interfaces  
            • Multi-page applications  
          </Text>
        </Box>

        {/* Variants */}
        <Box>
          <Heading size="md" mb={2}>
            Variants
          </Heading>

          <VStack align="start" gap={4}>
            {/* With sidebar */}
            <LayoutShell
              header={<Box p={2} bg="gray.200">Header</Box>}
              sidebar={<Box p={2} bg="gray.100">Sidebar</Box>}
            >
              <Box p={3}>Content with Sidebar</Box>
            </LayoutShell>

            {/* Without sidebar */}
            <LayoutShell
              header={<Box p={2} bg="gray.200">Header</Box>}
            >
              <Box p={3}>Content without Sidebar</Box>
            </LayoutShell>
          </VStack>
        </Box>

        {/* Notes */}
        <Box>
          <Heading size="md" mb={2}>
            Notes
          </Heading>
          <Text color="gray.600">
            • <b>header</b> accepts any React node  
            • <b>sidebar</b> is optional  
            • <b>sidebarWidth</b> controls sidebar size  
            • Great for building reusable layouts  
          </Text>
        </Box>

      </VStack>
    </Box>
  );
}