import { Box, Heading, Text, VStack } from "@chakra-ui/react";
import { useState } from "react";
import ComponentPreview from "../../components/docs/ComponentPreview";
import { Field, Slider } from "ai-ui-kit";

export default function SliderPage() {
  const [values, setValues] = useState<number[]>([50]);

  const codeString = `import { useState } from "react";
import { Field, Slider } from "ai-ui-kit";

const [values, setValues] = useState([50]);

<Field label="Select a value" helperText="Drag the slider">
  <Slider
    value={values}
    onValueChange={(details) => setValues(details.value)}
    min={0}
    max={100}
    step={1}
    showValue
  />
</Field>;`;

  return (
    <Box maxW="900px">
      <VStack align="start" gap={8}>

        {/* Title */}
        <Box>
          <Heading>Slider</Heading>
          <Text color="gray.600" mt={2}>
            An interactive component for selecting numeric values within a range.
            Supports controlled state and real-time value updates.
          </Text>
        </Box>

        {/* 🔥 Preview + Code */}
        <ComponentPreview
          title="Basic Usage"
          demo={
            <Box maxW="400px">
              <Field label="Select a value" helperText="Drag the slider">
                <Slider
                  value={values}
                  onValueChange={(details) =>
                    setValues(details.value)
                  }
                  min={0}
                  max={100}
                  step={1}
                  showValue
                  style={{ width: "100%" }}
                />
                <Text mt={2}>Selected Value: {values[0]}</Text>
              </Field>
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
            Use <b>Slider</b> when users need to select a numeric value
            interactively within a defined range.
          </Text>
        </Box>

        {/* Controlled Pattern */}
        <Box>
          <Heading size="md" mb={2}>
            Controlled State
          </Heading>
          <Text color="gray.600">
            The slider uses an array of values. Even for a single thumb,
            the value is stored as an array.
          </Text>
        </Box>

        {/* Variants */}
        <Box>
          <Heading size="md" mb={2}>
            Variants
          </Heading>

          <VStack align="start" gap={4}>
            {/* Default */}
            <Slider defaultValue={[30]} />

            {/* With steps */}
            <Slider defaultValue={[20]} step={5} />

            {/* Range style (future ready) */}
            <Slider defaultValue={[20]} min={0} max={200} />
          </VStack>
        </Box>

        {/* Example Use Cases */}
        <Box>
          <Heading size="md" mb={2}>
            Example Use Cases
          </Heading>
          <Text color="gray.600">
            • Volume control  
            • Price filters  
            • Range selection  
            • Settings adjustments  
          </Text>
        </Box>

        {/* Notes */}
        <Box>
          <Heading size="md" mb={2}>
            Notes
          </Heading>
          <Text color="gray.600">
            • <b>value</b> is always an array  
            • <b>onValueChange</b> returns updated array  
            • <b>min / max / step</b> control range  
            • <b>showValue</b> displays current value  
          </Text>
        </Box>

      </VStack>
    </Box>
  );
}