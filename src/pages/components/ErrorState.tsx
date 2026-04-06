import { Box, Heading, Text, VStack } from "@chakra-ui/react";
import ComponentPreview from "../../components/docs/ComponentPreview";
import { ErrorState } from "ai-ui-kit";
import { FiAlertCircle } from "react-icons/fi";

export default function ErrorStatePage() {
  const codeString = `import { ErrorState } from "ai-ui-kit";
import { FiAlertCircle } from "react-icons/fi";

<ErrorState
  title="Request failed"
  description="Unable to fetch data"
  icon={FiAlertCircle}
  actionLabel="Retry"
  onAction={() => alert("retry")}
/>;`;

  return (
    <Box maxW="900px">
      <VStack align="start" gap={8}>

        {/* Title */}
        <Box>
          <Heading>ErrorState</Heading>
          <Text color="gray.600" mt={2}>
            A UI component used to display error messages with optional retry
            actions. Helps users understand failures and recover quickly.
          </Text>
        </Box>

        {/* 🔥 Preview + Code */}
        <ComponentPreview
          title="Basic Usage"
          demo={
            <ErrorState
              title="Request failed"
              description="Unable to fetch data"
              icon={FiAlertCircle}
              actionLabel="Retry"
              onAction={() => alert("Retry clicked")}
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
            Use <b>ErrorState</b> to communicate failures such as API errors,
            network issues, or invalid operations. Provide an action to help
            users retry or recover.
          </Text>
        </Box>

        {/* Example Use Cases */}
        <Box>
          <Heading size="md" mb={2}>
            Example Use Cases
          </Heading>
          <Text color="gray.600">
            • API request failures  
            • Network connectivity issues  
            • Failed data loads  
            • Permission or access errors  
          </Text>
        </Box>

        {/* Variants */}
        <Box>
          <Heading size="md" mb={2}>
            Variants
          </Heading>

          <VStack align="start" gap={6}>
            {/* With action */}
            <ErrorState
              title="Something went wrong"
              description="Please try again later"
              icon={FiAlertCircle}
              actionLabel="Retry"
              onAction={() => alert("Retry")}
            />

            {/* Without action */}
            <ErrorState
              title="Error occurred"
              description="No further action available"
              icon={FiAlertCircle}
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
            • <b>onAction</b> handles retry or recovery logic  
          </Text>
        </Box>

      </VStack>
    </Box>
  );
}