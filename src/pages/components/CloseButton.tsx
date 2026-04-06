import { Box, Heading, Text, VStack } from "@chakra-ui/react";
import ComponentPreview from "../../components/docs/ComponentPreview";
import { CloseButton } from "ai-ui-kit";
import { LuX } from "react-icons/lu";

export default function CloseButtonPage() {
  const codeString = `import { CloseButton } from "ai-ui-kit";
import { LuX } from "react-icons/lu";

<CloseButton
  size="sm"
  variant="outline"
  colorPalette="red"
  icon={<LuX />}
  onClick={() => console.log("close")}
/>;`;

  return (
    <Box maxW="900px">
      <VStack align="start" gap={8}>

        {/* Title + Description */}
        <Box>
          <Heading>CloseButton</Heading>
          <Text color="gray.600" mt={2}>
            A compact button component used to dismiss or close elements such
            as modals, alerts, or panels.
          </Text>
        </Box>

        {/* 🔥 Preview + Code */}
        <ComponentPreview
          title="Basic Usage"
          demo={
            <CloseButton
              size="sm"
              variant="outline"
              colorPalette="red"
              icon={<LuX />}
              onClick={() => alert("Closed")}
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
            Use <b>CloseButton</b> to provide a clear action for dismissing UI
            elements like modals, notifications, or side panels.
          </Text>
        </Box>

        {/* Example Use Cases */}
        <Box>
          <Heading size="md" mb={2}>
            Example Use Cases
          </Heading>
          <Text color="gray.600">
            • Close modals or dialogs  
            • Dismiss alerts or notifications  
            • Remove items from a list  
            • Hide side panels or drawers  
          </Text>
        </Box>

        {/* Variants */}
        <Box>
          <Heading size="md" mb={2}>
            Variants
          </Heading>

          <VStack align="start" gap={3}>
            <CloseButton icon={<LuX />} />
            <CloseButton variant="outline" icon={<LuX />} />
            <CloseButton variant="ghost" icon={<LuX />} />
          </VStack>
        </Box>

      </VStack>
    </Box>
  );
}