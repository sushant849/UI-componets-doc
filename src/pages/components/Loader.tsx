import { Box, Heading, Text, VStack } from "@chakra-ui/react";
import ComponentPreview from "../../components/docs/ComponentPreview";
import { Loader } from "ai-ui-kit";

export default function LoaderPage() {
  const codeString = `import { Loader } from "ai-ui-kit";

<Loader />;`;

  return (
    <Box maxW="900px">
      <VStack align="start" gap={8}>

        {/* Title */}
        <Box>
          <Heading>Loader</Heading>
          <Text color="gray.600" mt={2}>
            A simple loading indicator used to represent ongoing processes such
            as API calls, data fetching, or background operations.
          </Text>
        </Box>

        {/* 🔥 Preview + Code */}
        <ComponentPreview
          title="Basic Usage"
          demo={
            <Box>
              <Loader />
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
            Use <b>Loader</b> to indicate loading states in your application.
            It helps improve user experience by showing that something is in progress.
          </Text>
        </Box>

        {/* Example Use Cases */}
        <Box>
          <Heading size="md" mb={2}>
            Example Use Cases
          </Heading>
          <Text color="gray.600">
            • API data fetching  
            • Form submission loading  
            • Page transitions  
            • AI response generation  
          </Text>
        </Box>

        {/* Variants */}
        <Box>
          <Heading size="md" mb={2}>
            Variants
          </Heading>

          <VStack align="start" gap={4}>
            <Loader />
            <Box p={4} border="1px solid" borderColor="gray.200">
              <Loader />
            </Box>
            <Box bg="gray.100" p={4}>
              <Loader />
            </Box>
          </VStack>
        </Box>

        {/* Notes */}
        <Box>
          <Heading size="md" mb={2}>
            Notes
          </Heading>
          <Text color="gray.600">
            • Lightweight and reusable  
            • Can be placed inside any container  
            • Combine with conditional rendering for async flows  
          </Text>
        </Box>

      </VStack>
    </Box>
  );
}