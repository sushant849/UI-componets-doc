import { Box, Heading, Text, VStack } from "@chakra-ui/react";
import { useState } from "react";
import ComponentPreview from "../../components/docs/ComponentPreview";
import { Input } from "ai-ui-kit";

export default function NumberInputPage() {
  const [number, setNumber] = useState<number>(42);

  const codeString = `import { useState } from "react";
import { Input } from "ai-ui-kit";

const [number, setNumber] = useState(42);

<Input
  type="number"
  value={number}
  onChange={(e) => setNumber(Number(e.target.value))}
  placeholder="Enter a number"
  clearable
/>;`;

  return (
    <Box maxW="900px">
      <VStack align="start" gap={8}>

        {/* Title */}
        <Box>
          <Heading>Number Input</Heading>
          <Text color="gray.600" mt={2}>
            A numeric input field built using the Input component with support
            for controlled state and number parsing.
          </Text>
        </Box>

        {/* 🔥 Preview + Code */}
        <ComponentPreview
          title="Basic Usage"
          demo={
            <Box maxW="300px">
              <Input
                type="number"
                value={number}
                onChange={(e) =>
                  setNumber(Number(e.target.value))
                }
                placeholder="Enter a number"
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
            Use this pattern when working with numeric inputs like age, price,
            quantity, or filters.
          </Text>
        </Box>

        {/* Important Handling */}
        <Box>
          <Heading size="md" mb={2}>
            Value Handling
          </Heading>
          <Text color="gray.600">
            Always convert the input value to a number using{" "}
            <b>Number()</b> to maintain correct data types.
          </Text>
        </Box>

        {/* Variants */}
        <Box>
          <Heading size="md" mb={2}>
            Variants
          </Heading>

          <VStack align="start" gap={4}>
            {/* Default */}
            <Input type="number" placeholder="Enter number" />

            {/* With value */}
            <Input type="number" value={100} readOnly />

            {/* Disabled */}
            <Input type="number" disabled placeholder="Disabled" />
          </VStack>
        </Box>

        {/* Example Use Cases */}
        <Box>
          <Heading size="md" mb={2}>
            Example Use Cases
          </Heading>
          <Text color="gray.600">
            • Age input  
            • Price fields  
            • Quantity selectors  
            • Filters (min/max values)  
          </Text>
        </Box>

        {/* Notes */}
        <Box>
          <Heading size="md" mb={2}>
            Notes
          </Heading>
          <Text color="gray.600">
            • Use <b>type="number"</b> for numeric input  
            • Convert values using <b>Number()</b>  
            • Combine with validation for better UX  
            • Supports all Input props like clearable, disabled  
          </Text>
        </Box>

      </VStack>
    </Box>
  );
}