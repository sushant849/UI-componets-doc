import { Box, Heading, Text, VStack } from "@chakra-ui/react";
import ComponentPreview from "../../components/docs/ComponentPreview";
import { Button } from "ai-ui-kit";
import { LuPlus, LuArrowRight } from "react-icons/lu";

export default function ButtonPage() {
  const codeString = `import { Button } from "ai-ui-kit";
import { LuPlus, LuArrowRight } from "react-icons/lu";

<Button
  variant="solid"
  size="md"
  colorPalette="blue"
  isLoading={false}
  disabled={false}
  leftIcon={<LuPlus />}
  rightIcon={<LuArrowRight />}
  onClick={() => console.log("clicked")}
>
  Click Me
</Button>;`;

  return (
    <Box maxW="900px">
      <VStack align="start" gap={8}>

        {/* Title + Description */}
        <Box>
          <Heading>Button</Heading>
          <Text color="gray.600" mt={2}>
            A flexible button component with support for icons, loading state,
            and multiple variants.
          </Text>
        </Box>

        {/* 🔥 Preview + Code */}
        <ComponentPreview
          title="Basic Usage"
          demo={
            <Button
              variant="solid"
              size="md"
              colorPalette="blue"
              leftIcon={<LuPlus />}
              rightIcon={<LuArrowRight />}
              onClick={() => alert("Clicked")}
            >
              Click Me
            </Button>
          }
          code={codeString}
        />

        {/* Usage */}
        <Box>
          <Heading size="md" mb={2}>
            Usage
          </Heading>
          <Text color="gray.600">
            Use the <b>Button</b> component to trigger actions such as form
            submission, navigation, or interactions. It supports icons,
            loading states, and multiple styles.
          </Text>
        </Box>

        {/* Example Use Cases */}
        <Box>
          <Heading size="md" mb={2}>
            Example Use Cases
          </Heading>
          <Text color="gray.600">
            • Submit forms  
            • Trigger API calls  
            • Navigate between pages  
            • Open modals or dialogs  
          </Text>
        </Box>

        {/* Variants Example */}
        <Box>
          <Heading size="md" mb={2}>
            Variants
          </Heading>

          <VStack align="start" gap={3}>
            <Button colorPalette="blue">Primary</Button>
            <Button variant="outline">Outline</Button>
            <Button variant="ghost">Ghost</Button>
          </VStack>
        </Box>

      </VStack>
    </Box>
  );
}