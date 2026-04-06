import { Box, Heading, Text, VStack } from "@chakra-ui/react";
import { useState } from "react";
import ComponentPreview from "../../components/docs/ComponentPreview";
import { Input } from "ai-ui-kit";

export default function InputPage() {
  const [text, setText] = useState("test");

  const codeString = `import { useState } from "react";
import { Input } from "ai-ui-kit";

const [text, setText] = useState("test");

<Input
  value={text}
  onChange={(e) => setText(e.target.value)}
  placeholder="Type something..."
  clearable
/>;`;

  return (
    <Box maxW="900px">
      <VStack align="start" gap={8}>

        {/* Title */}
        <Box>
          <Heading>Input</Heading>
          <Text color="gray.600" mt={2}>
            A flexible input component with support for controlled state,
            clearable input, and custom behaviors.
          </Text>
        </Box>

        {/* 🔥 Preview + Code */}
        <ComponentPreview
          title="Controlled Input"
          demo={
            <Box maxW="300px">
              <Input
                value={text}
                onChange={(e) => setText(e.target.value)}
                placeholder="Type something..."
                clearable
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
            Use <b>Input</b> for text entry fields in forms, search bars, and
            user inputs. It supports controlled patterns and enhanced UX features.
          </Text>
        </Box>

        {/* Controlled Pattern */}
        <Box>
          <Heading size="md" mb={2}>
            Controlled State
          </Heading>
          <Text color="gray.600">
            This component is typically used as a controlled input where the
            value is managed via React state.
          </Text>
        </Box>

        {/* Variants */}
        <Box>
          <Heading size="md" mb={2}>
            Variants
          </Heading>

          <VStack align="start" gap={4}>
            {/* Default */}
            <Input placeholder="Default input" />

            {/* With value */}
            <Input value="Hello" readOnly />

            {/* Clearable */}
            <Input defaultValue="Clear me" clearable />

            {/* Disabled */}
            <Input placeholder="Disabled" disabled />
          </VStack>
        </Box>

        {/* Example Use Cases */}
        <Box>
          <Heading size="md" mb={2}>
            Example Use Cases
          </Heading>
          <Text color="gray.600">
            • Forms (name, email, password)  
            • Search bars  
            • Filters  
            • Chat input fields  
          </Text>
        </Box>

        {/* Notes */}
        <Box>
          <Heading size="md" mb={2}>
            Notes
          </Heading>
          <Text color="gray.600">
            • <b>value</b> + <b>onChange</b> → controlled usage  
            • <b>clearable</b> adds clear button  
            • <b>defaultValue</b> for uncontrolled input  
            • Supports disabled and read-only states  
          </Text>
        </Box>

      </VStack>
    </Box>
  );
}