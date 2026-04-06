import { Box, Heading, Text, VStack } from "@chakra-ui/react";
import ComponentPreview from "../../components/docs/ComponentPreview";
import { IconButton } from "ai-ui-kit";
import { LuHeart } from "react-icons/lu";

export default function IconButtonPage() {
  const codeString = `import { IconButton } from "ai-ui-kit";
import { LuHeart } from "react-icons/lu";

<IconButton
  size="md"
  variant="solid"
  colorPalette="blue"
  icon={<LuHeart />}
  onClick={() => console.log("click")}
/>;`;

  return (
    <Box maxW="900px">
      <VStack align="start" gap={8}>

        {/* Title + Description */}
        <Box>
          <Heading>IconButton</Heading>
          <Text color="gray.600" mt={2}>
            A compact button designed for icon-only actions. Useful for toolbars,
            actions, and minimal UI interactions.
          </Text>
        </Box>

        {/* 🔥 Preview + Code */}
        <ComponentPreview
          title="Basic Usage"
          demo={
            <IconButton
              size="md"
              variant="solid"
              colorPalette="blue"
              icon={<LuHeart />}
              onClick={() => alert("Liked ❤️")}
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
            Use <b>IconButton</b> when you need a button with only an icon.
            It is commonly used for actions like like, favorite, delete, or settings.
          </Text>
        </Box>

        {/* Example Use Cases */}
        <Box>
          <Heading size="md" mb={2}>
            Example Use Cases
          </Heading>
          <Text color="gray.600">
            • Like or favorite actions  
            • Toolbar actions (edit, delete, share)  
            • Minimal UI controls  
            • Action buttons in tables or cards  
          </Text>
        </Box>

        {/* Variants */}
        <Box>
          <Heading size="md" mb={2}>
            Variants
          </Heading>

          <VStack align="start" gap={3}>
            <IconButton icon={<LuHeart />} />
            <IconButton variant="outline" icon={<LuHeart />} />
            <IconButton variant="ghost" icon={<LuHeart />} />
          </VStack>
        </Box>

        {/* Sizes */}
        <Box>
          <Heading size="md" mb={2}>
            Sizes
          </Heading>

          <VStack align="start" gap={3}>
            <IconButton size="sm" icon={<LuHeart />} />
            <IconButton size="md" icon={<LuHeart />} />
            <IconButton size="lg" icon={<LuHeart />} />
          </VStack>
        </Box>

      </VStack>
    </Box>
  );
}