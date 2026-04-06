import { Box, Heading, Text, VStack } from "@chakra-ui/react";
import ComponentPreview from "../../components/docs/ComponentPreview";
import { FileQueue } from "ai-ui-kit";
import type { FileQueueItem } from "ai-ui-kit";

export default function FileQueuePage() {
  const files: FileQueueItem[] = [
    {
      id: "1",
      name: "file1.png",
      status: "pending",
    },
    {
      id: "2",
      name: "file2.pdf",
      status: "uploading",
      progress: 50,
    },
    {
      id: "3",
      name: "file3.jpg",
      status: "completed",
    },
    {
      id: "4",
      name: "file4.zip",
      status: "error",
    },
  ];

  const codeString = `import { FileQueue } from "ai-ui-kit";

<FileQueue
  files={[
    { id: "1", name: "file1.png", status: "pending" },
    { id: "2", name: "file2.pdf", status: "uploading", progress: 50 },
  ]}
  onRemove={(id) => console.log(id)}
/>;`;

  return (
    <Box maxW="900px">
      <VStack align="start" gap={8}>

        {/* Title */}
        <Box>
          <Heading>FileQueue</Heading>
          <Text color="gray.600" mt={2}>
            A component for displaying uploaded files with status tracking such
            as pending, uploading, completed, and error.
          </Text>
        </Box>

        {/* 🔥 Preview + Code */}
        <ComponentPreview
          title="Upload Queue"
          demo={
            <Box maxW="400px">
              <FileQueue
                files={files}
                onRemove={(id) => console.log("Remove:", id)}
              />
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
            Use <b>FileQueue</b> to display file upload progress and manage file
            states in upload workflows.
          </Text>
        </Box>

        {/* Status Types */}
        <Box>
          <Heading size="md" mb={2}>
            Status Types
          </Heading>
          <Text color="gray.600">
            • <b>pending</b> → waiting to upload  
            • <b>uploading</b> → upload in progress  
            • <b>completed</b> → upload finished  
            • <b>error</b> → upload failed  
          </Text>
        </Box>

        {/* Example Use Cases */}
        <Box>
          <Heading size="md" mb={2}>
            Example Use Cases
          </Heading>
          <Text color="gray.600">
            • File upload systems  
            • Media upload dashboards  
            • Document management tools  
            • AI file processing workflows  
          </Text>
        </Box>

        {/* Notes */}
        <Box>
          <Heading size="md" mb={2}>
            Notes
          </Heading>
          <Text color="gray.600">
            • <b>files</b> is an array of file objects  
            • <b>progress</b> is used when status = uploading  
            • <b>onRemove</b> handles file removal  
            • Combine with Dropzone for full upload flow  
          </Text>
        </Box>

      </VStack>
    </Box>
  );
}