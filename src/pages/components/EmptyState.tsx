import { Box, Heading, Text, VStack } from "@chakra-ui/react";
import ComponentPreview from "../../components/docs/ComponentPreview";
import { EmptyState } from "ai-ui-kit";
import { FiInbox } from "react-icons/fi";

export default function EmptyStatePage() {
  const codeString = `import { EmptyState } from "ai-ui-kit";
import { FiInbox } from "react-icons/fi";

<EmptyState
  title="No data found"
  description="Create new item to see it here"
  icon={FiInbox}
  actionLabel="Create"
  onAction={() => alert("clicked")}
/>;`;

  return (
    <Box maxW="900px">
      <VStack align="start" gap={8}>

        {/* Title */}
        <Box>
          <Heading>EmptyState</Heading>
          <Text color="gray.600" mt={2}>
            A UI component used to display a placeholder when no data is
            available. It helps guide users with context and actions.
          </Text>
        </Box>

        {/* 🔥 Preview + Code */}
        <ComponentPreview
          title="Basic Usage"
          demo={
            <EmptyState
              title="No data found"
              description="Create new item to see it here"
              icon={FiInbox}
              actionLabel="Create"
              onAction={() => alert("Create clicked")}
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
            Use <b>EmptyState</b> when there is no content to display.
            It improves UX by providing guidance and optional actions.
          </Text>
        </Box>

        {/* Example Use Cases */}
        <Box>
          <Heading size="md" mb={2}>
            Example Use Cases
          </Heading>
          <Text color="gray.600">
            • Empty dashboard or tables  
            • No search results  
            • First-time user screens  
            • Empty file or upload states  
          </Text>
        </Box>

        {/* Variants */}
        <Box>
          <Heading size="md" mb={2}>
            Variants
          </Heading>

          <VStack align="start" gap={6}>
            {/* With action */}
            <EmptyState
              title="No items"
              description="Start by adding your first item"
              icon={FiInbox}
              actionLabel="Add Item"
              onAction={() => alert("Add item")}
            />

            {/* Without action */}
            <EmptyState
              title="Nothing here"
              description="There is no data available"
              icon={FiInbox}
            />
          </VStack>
        </Box>

        {/* Notes */}
        <Box>
          <Heading size="md" mb={2}>
            Notes
          </Heading>
          <Text color="gray.600">
            • <b>icon</b> should be a React icon component  
            • <b>actionLabel</b> is optional  
            • <b>onAction</b> triggers button click  
          </Text>
        </Box>

      </VStack>
    </Box>
  );
}