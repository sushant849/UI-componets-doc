import { Box, Heading, Text, VStack } from "@chakra-ui/react";
import ComponentPreview from "../../components/docs/ComponentPreview";
import { DataList } from "ai-ui-kit";

export default function DataListPage() {
  const codeString = `import { DataList } from "ai-ui-kit";

<DataList
  items={[
    { label: "Name", value: "Punit" },
    { label: "Role", value: "Developer" },
    { label: "Status", value: "Active" },
  ]}
/>;`;

  return (
    <Box maxW="900px">
      <VStack align="start" gap={8}>

        {/* Title */}
        <Box>
          <Heading>DataList</Heading>
          <Text color="gray.600" mt={2}>
            A simple component to display structured key-value data. Ideal for
            profiles, summaries, and metadata display.
          </Text>
        </Box>

        {/* 🔥 Preview + Code */}
        <ComponentPreview
          title="Basic Usage"
          demo={
            <DataList
              items={[
                { label: "Name", value: "Punit" },
                { label: "Role", value: "Developer" },
                { label: "Status", value: "Active" },
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
            Use <b>DataList</b> to display key-value pairs in a clean and
            readable format. Useful for showing user details, metadata, or
            summaries.
          </Text>
        </Box>

        {/* Example Use Cases */}
        <Box>
          <Heading size="md" mb={2}>
            Example Use Cases
          </Heading>
          <Text color="gray.600">
            • User profile details  
            • Order summaries  
            • System metadata  
            • Configuration overview  
          </Text>
        </Box>

        {/* Variations */}
        <Box>
          <Heading size="md" mb={2}>
            Variations
          </Heading>

          <VStack align="start" gap={4}>
            <DataList
              items={[
                { label: "Email", value: "punit@example.com" },
                { label: "Plan", value: "Pro" },
              ]}
            />

            <DataList
              items={[
                { label: "API Key", value: "************" },
                { label: "Status", value: "Active" },
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
            • <b>items</b> should be an array of label-value pairs  
            • Keeps UI clean and consistent  
            • Can be used inside cards or panels  
          </Text>
        </Box>

      </VStack>
    </Box>
  );
}