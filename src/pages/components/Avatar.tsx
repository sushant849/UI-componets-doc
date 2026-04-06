import { Box, Heading, Text, VStack, HStack } from "@chakra-ui/react";
import ComponentPreview from "../../components/docs/ComponentPreview";
import { Avatar } from "ai-ui-kit";

export default function AvatarPage() {
  const codeString = `import { Avatar } from "ai-ui-kit";

<Avatar
  name="Punit"
  src="https://images.unsplash.com/photo-1535713875002-d1d0cf377fde"
  size="xl"
  variant="solid"
/>;`;

  return (
    <Box maxW="900px">
      <VStack align="start" gap={8}>

        {/* Title */}
        <Box>
          <Heading>Avatar</Heading>
          <Text color="gray.600" mt={2}>
            A component used to represent users with an image or fallback initials.
            Supports different sizes and styles.
          </Text>
        </Box>

        {/* 🔥 Preview + Code */}
        <ComponentPreview
          title="Basic Usage"
          demo={
            <Avatar
              name="Punit"
              src="https://images.unsplash.com/photo-1535713875002-d1d0cf377fde"
              size="xl"
              variant="solid"
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
            Use <b>Avatar</b> to display user identity with profile images or
            fallback initials when no image is available.
          </Text>
        </Box>

        {/* Example Use Cases */}
        <Box>
          <Heading size="md" mb={2}>
            Example Use Cases
          </Heading>
          <Text color="gray.600">
            • User profile display  
            • Chat interfaces  
            • Team member lists  
            • Comments or activity feeds  
          </Text>
        </Box>

        {/* Sizes */}
        <Box>
          <Heading size="md" mb={2}>
            Sizes
          </Heading>

          <HStack gap={4}>
            <Avatar name="A" size="sm" />
            <Avatar name="B" size="md" />
            <Avatar name="C" size="lg" />
            <Avatar name="D" size="xl" />
          </HStack>
        </Box>

        {/* Variants */}
        <Box>
          <Heading size="md" mb={2}>
            Variants
          </Heading>

          <HStack gap={4}>
            <Avatar name="Solid" variant="solid" />
            <Avatar name="Outline" variant="outline" />
          </HStack>
        </Box>

        {/* Fallback */}
        <Box>
          <Heading size="md" mb={2}>
            Fallback (No Image)
          </Heading>

          <Avatar name="Punit Sharma" />
        </Box>

        {/* Notes */}
        <Box>
          <Heading size="md" mb={2}>
            Notes
          </Heading>
          <Text color="gray.600">
            • <b>name</b> is used for initials fallback  
            • <b>src</b> is optional  
            • Supports lazy loading  
            • Works well in lists and chat UIs  
          </Text>
        </Box>

      </VStack>
    </Box>
  );
}