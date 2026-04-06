import { Box, Heading, Text, VStack } from "@chakra-ui/react";
import { useState } from "react";
import ComponentPreview from "../../components/docs/ComponentPreview";
import { Field, RadioGroup } from "ai-ui-kit";

export default function RadioGroupPage() {
  const [selected, setSelected] = useState<string | null>("option1");

  const codeString = `import { useState } from "react";
import { Field, RadioGroup } from "ai-ui-kit";

const [selected, setSelected] = useState("option1");

<Field
  label="Choose an option"
  helperText="Select one of the options below"
>
  <RadioGroup
    value={selected}
    onValueChange={(details) => setSelected(details.value)}
    direction="column"
    options={[
      { label: "Option 1", value: "option1" },
      { label: "Option 2", value: "option2" },
      { label: "Option 3", value: "option3" },
    ]}
  />
</Field>;`;

  return (
    <Box maxW="900px">
      <VStack align="start" gap={8}>

        {/* Title */}
        <Box>
          <Heading>RadioGroup</Heading>
          <Text color="gray.600" mt={2}>
            A component for selecting a single option from a list.
            Built with controlled state and flexible layout options.
          </Text>
        </Box>

        {/* 🔥 Preview + Code */}
        <ComponentPreview
          title="Basic Usage"
          demo={
            <Field
              label="Choose an option"
              helperText="Select one of the options below"
            >
              <RadioGroup
                value={selected}
                onValueChange={(details) =>
                  setSelected(details.value)
                }
                direction="column"
                gap={4}
                options={[
                  { label: "Option 1", value: "option1" },
                  { label: "Option 2", value: "option2" },
                  { label: "Option 3", value: "option3" },
                ]}
              />

              <Text mt={2}>Selected: {selected ?? "none"}</Text>
            </Field>
          }
          code={codeString}
        />

        {/* Usage */}
        <Box>
          <Heading size="md" mb={2}>
            Usage
          </Heading>
          <Text color="gray.600">
            Use <b>RadioGroup</b> when users need to select exactly one option
            from multiple choices.
          </Text>
        </Box>

        {/* Controlled Pattern */}
        <Box>
          <Heading size="md" mb={2}>
            Controlled State
          </Heading>
          <Text color="gray.600">
            The selected value is controlled via React state using{" "}
            <b>value</b> and <b>onValueChange</b>.
          </Text>
        </Box>

        {/* Variants */}
        <Box>
          <Heading size="md" mb={2}>
            Variants
          </Heading>

          <VStack align="start" gap={4}>
            {/* Column */}
            <RadioGroup
              value={selected}
              onValueChange={(d) => setSelected(d.value)}
              direction="column"
              options={[
                { label: "Column 1", value: "1" },
                { label: "Column 2", value: "2" },
              ]}
            />

            {/* Row */}
            <RadioGroup
              value={selected}
              onValueChange={(d) => setSelected(d.value)}
              direction="row"
              gap={4}
              options={[
                { label: "Row 1", value: "r1" },
                { label: "Row 2", value: "r2" },
              ]}
            />
          </VStack>
        </Box>

        {/* Example Use Cases */}
        <Box>
          <Heading size="md" mb={2}>
            Example Use Cases
          </Heading>
          <Text color="gray.600">
            • Plan selection (Basic / Pro)  
            • Gender selection  
            • Settings (Yes / No)  
            • Preferences  
          </Text>
        </Box>

        {/* Notes */}
        <Box>
          <Heading size="md" mb={2}>
            Notes
          </Heading>
          <Text color="gray.600">
            • <b>value</b> controls selected option  
            • <b>onValueChange</b> updates state  
            • <b>direction</b> controls layout (row/column)  
            • Use inside <b>Field</b> for better structure  
          </Text>
        </Box>

      </VStack>
    </Box>
  );
}