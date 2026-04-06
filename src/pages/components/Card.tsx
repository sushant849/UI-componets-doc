import { Box, Heading, Text, VStack } from "@chakra-ui/react";
import ComponentPreview from "../../components/docs/ComponentPreview";
import { Card } from "ai-ui-kit";

export default function CardPage() {
  const codeString = `import { Card } from "ai-ui-kit";

<Card
  headerTitle="User Profile"
  headerDescription="Basic info"
  bodyContent={<div>This is body content</div>}
  footerContent={<button>Action</button>}
  imageSrc="https://images.unsplash.com/photo-1494790108377-be9c29b29330"
  variant="elevated"
  size="md"
  direction="column"
/>;`;

  return (
    <Box maxW="900px">
      <VStack align="start" gap={8}>

        {/* Title */}
        <Box>
          <Heading>Card</Heading>
          <Text color="gray.600" mt={2}>
            A flexible container component used to group related content such as
            images, text, and actions. Ideal for dashboards and UI sections.
          </Text>
        </Box>

        {/* 🔥 Preview + Code */}
        <ComponentPreview
          title="Basic Usage"
          demo={
            <Card
              headerTitle="User Profile"
              headerDescription="Basic info"
              bodyContent={<div>This is body content</div>}
              footerContent={<button>Action</button>}
              imageSrc="https://images.unsplash.com/photo-1494790108377-be9c29b29330"
              variant="elevated"
              size="md"
              direction="column"
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
            Use <b>Card</b> to group related content into a single container.
            It supports header, body, footer, and image sections.
          </Text>
        </Box>

        {/* Example Use Cases */}
        <Box>
          <Heading size="md" mb={2}>
            Example Use Cases
          </Heading>
          <Text color="gray.600">
            • User profile cards  
            • Product listings  
            • Dashboard widgets  
            • Content previews  
          </Text>
        </Box>

        {/* Variants */}
        <Box>
          <Heading size="md" mb={2}>
            Variants
          </Heading>

          <VStack align="start" gap={4}>
            <Card headerTitle="Elevated" variant="elevated" />
            <Card headerTitle="Outline" variant="outline" />
          </VStack>
        </Box>

        {/* Direction */}
        <Box>
          <Heading size="md" mb={2}>
            Layout Direction
          </Heading>

          <VStack align="start" gap={4}>
            <Card headerTitle="Column Layout" direction="column" />
            <Card headerTitle="Row Layout" direction="row" />
          </VStack>
        </Box>

        {/* Notes */}
        <Box>
          <Heading size="md" mb={2}>
            Notes
          </Heading>
          <Text color="gray.600">
            • Supports header, body, footer, and image  
            • <b>variant</b> controls visual style  
            • <b>direction</b> controls layout (row/column)  
            • Can be composed with other components  
          </Text>
        </Box>

      </VStack>
    </Box>
  );
}