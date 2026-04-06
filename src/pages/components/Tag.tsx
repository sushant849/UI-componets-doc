import { Box, Heading, Text, VStack, HStack } from "@chakra-ui/react";
import ComponentPreview from "../../components/docs/ComponentPreview";
import { Tag } from "ai-ui-kit";
import { LuUser, LuCheck } from "react-icons/lu";

export default function TagPage() {
  const codeString = `import { Tag } from "ai-ui-kit";
import { LuUser, LuCheck } from "react-icons/lu";

<Tag label="Default" />

<Tag
  label="Solid"
  variant="solid"
  colorPalette="blue"
/>

<Tag
  label="With icon"
  startIcon={<LuUser />}
/>

<Tag
  label="End icon"
  endIcon={<LuCheck />}
/>

<Tag
  label="Closable"
  isClosable
  onClose={() => console.log("closed")}
/>

<Tag
  label="Large"
  size="lg"
  variant="outline"
  colorPalette="green"
/>;`;

  return (
    <Box maxW="900px">
      <VStack align="start" gap={8}>

        {/* Title */}
        <Box>
          <Heading>Tag</Heading>
          <Text color="gray.600" mt={2}>
            A compact component used to display labels, categories, or status
            indicators. Supports icons, closable actions, and multiple styles.
          </Text>
        </Box>

        {/* 🔥 Preview + Code */}
        <ComponentPreview
          title="Tag Variants"
          demo={
            <VStack align="start" gap={4}>
              <HStack gap={3}>
                <Tag label="Default" />
                <Tag label="Solid" variant="solid" colorPalette="blue" />
              </HStack>

              <HStack gap={3}>
                <Tag label="With icon" startIcon={<LuUser />} />
                <Tag label="End icon" endIcon={<LuCheck />} />
              </HStack>

              <HStack gap={3}>
                <Tag
                  label="Closable"
                  isClosable
                  onClose={() => alert("Closed")}
                />
              </HStack>

              <HStack gap={3}>
                <Tag
                  label="Large"
                  size="lg"
                  variant="outline"
                  colorPalette="green"
                />
              </HStack>
            </VStack>
          }
          code={codeString}
        />

        {/* Usage */}
        <Box>
          <Heading size="md" mb={2}>
            Usage
          </Heading>
          <Text color="gray.600">
            Use <b>Tag</b> to display labels, categories, or statuses. It is
            commonly used in filters, lists, and UI indicators.
          </Text>
        </Box>

        {/* Example Use Cases */}
        <Box>
          <Heading size="md" mb={2}>
            Example Use Cases
          </Heading>
          <Text color="gray.600">
            • Status indicators (Active, Pending)  
            • Category labels  
            • Selected filters  
            • User roles or permissions  
          </Text>
        </Box>

        {/* Variants */}
        <Box>
          <Heading size="md" mb={2}>
            Variants
          </Heading>

          <HStack gap={3}>
            <Tag label="Solid" variant="solid" colorPalette="blue" />
            <Tag label="Outline" variant="outline" colorPalette="gray" />
            <Tag label="Subtle" variant="subtle" />
          </HStack>
        </Box>

        {/* Sizes */}
        <Box>
          <Heading size="md" mb={2}>
            Sizes
          </Heading>

          <HStack gap={3}>
            <Tag label="SM" size="sm" />
            <Tag label="MD" size="md" />
            <Tag label="LG" size="lg" />
          </HStack>
        </Box>

        {/* Notes */}
        <Box>
          <Heading size="md" mb={2}>
            Notes
          </Heading>
          <Text color="gray.600">
            • <b>startIcon</b> and <b>endIcon</b> allow flexible UI  
            • <b>isClosable</b> enables remove action  
            • <b>variant</b> and <b>colorPalette</b> control styling  
            • Great for filters and tags UI  
          </Text>
        </Box>

      </VStack>
    </Box>
  );
}