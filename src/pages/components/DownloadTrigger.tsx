import { Box, Heading, Text, VStack } from "@chakra-ui/react";
import ComponentPreview from "../../components/docs/ComponentPreview";
import { DownloadTrigger } from "ai-ui-kit";

export default function DownloadTriggerPage() {
  const codeString = `import { DownloadTrigger } from "ai-ui-kit";

<DownloadTrigger
  fileName="test.txt"
  mimeType="text/plain"
  data={() => "Hello world"}
  onDownloadStart={() => console.log("Download started")}
  onDownloadEnd={() => console.log("Download finished")}
>
  {({ loading }) => (
    <button>
      {loading ? "Loading..." : "Download"}
    </button>
  )}
</DownloadTrigger>;`;

  return (
    <Box maxW="900px">
      <VStack align="start" gap={8}>

        {/* Title + Description */}
        <Box>
          <Heading>DownloadTrigger</Heading>
          <Text color="gray.600" mt={2}>
            A utility component that enables file downloads with a flexible
            render-prop pattern. It handles loading state and lifecycle events
            like download start and completion.
          </Text>
        </Box>

        {/* 🔥 Preview + Code */}
        <ComponentPreview
          title="Basic Usage"
          demo={
            <DownloadTrigger
              fileName="test.txt"
              mimeType="text/plain"
              data={() => "Hello world"}
              onDownloadStart={() => console.log("Start")}
              onDownloadEnd={() => console.log("End")}
            >
              {({ loading }) => (
                <button>
                  {loading ? "Loading..." : "Download"}
                </button>
              )}
            </DownloadTrigger>
          }
          code={codeString}
        />

        {/* Usage */}
        <Box>
          <Heading size="md" mb={2}>
            Usage
          </Heading>
          <Text color="gray.600">
            Use <b>DownloadTrigger</b> when you need to trigger file downloads
            dynamically. It supports async data generation and provides a
            loading state via render props.
          </Text>
        </Box>

        {/* Example Use Cases */}
        <Box>
          <Heading size="md" mb={2}>
            Example Use Cases
          </Heading>
          <Text color="gray.600">
            • Export logs or reports as files  
            • Download generated AI responses  
            • Export configuration or JSON data  
            • Generate files on demand  
          </Text>
        </Box>

        {/* Notes */}
        <Box>
          <Heading size="md" mb={2}>
            Notes
          </Heading>
          <Text color="gray.600">
            • <b>data</b> can be a function returning string/blob  
            • Supports async operations  
            • Use render-prop children to control UI  
          </Text>
        </Box>

      </VStack>
    </Box>
  );
}