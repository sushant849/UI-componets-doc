import { Box, Heading, Text, VStack } from "@chakra-ui/react";
import { useState } from "react";
import ComponentPreview from "../../components/docs/ComponentPreview";
import { Fieldset, Checkbox } from "ai-ui-kit";

export default function FieldsetPage() {
  const [selected, setSelected] = useState<string[]>([]);

  const handleChange = (value: string, checked: boolean) => {
    setSelected((prev) =>
      checked
        ? [...prev, value]
        : prev.filter((v) => v !== value)
    );
  };

  const hasError = selected.length === 0;

  const codeString = `import { useState } from "react";
import { Fieldset, Checkbox } from "ai-ui-kit";

const [selected, setSelected] = useState([]);

const handleChange = (value, checked) => {
  setSelected((prev) =>
    checked
      ? [...prev, value]
      : prev.filter((v) => v !== value)
  );
};

<Fieldset
  legend="Select at least one option"
  errorText={selected.length === 0 ? "You must select at least one" : undefined}
>
  <Checkbox
    label="Option 1"
    checked={selected.includes("1")}
    onCheckedChange={(e) => handleChange("1", !!e.checked)}
  />

  <Checkbox
    label="Option 2"
    checked={selected.includes("2")}
    onCheckedChange={(e) => handleChange("2", !!e.checked)}
  />
</Fieldset>;`;

  return (
    <Box maxW="900px">
      <VStack align="start" gap={8}>

        {/* Title */}
        <Box>
          <Heading>Fieldset</Heading>
          <Text color="gray.600" mt={2}>
            A form grouping component used to organize related inputs under a
            common label with validation support.
          </Text>
        </Box>

        {/* 🔥 Preview + Code */}
        <ComponentPreview
          title="Checkbox Group with Validation"
          demo={
            <Fieldset
              legend="Select at least one option"
              errorText={hasError ? "You must select at least one" : undefined}
            >
              <Checkbox
                label="Option 1"
                checked={selected.includes("1")}
                onCheckedChange={(e) =>
                  handleChange("1", !!e.checked)
                }
              />

              <Checkbox
                label="Option 2"
                checked={selected.includes("2")}
                onCheckedChange={(e) =>
                  handleChange("2", !!e.checked)
                }
              />
            </Fieldset>
          }
          code={codeString}
        />

        {/* Usage */}
        <Box>
          <Heading size="md" mb={2}>
            Usage
          </Heading>
          <Text color="gray.600">
            Use <b>Fieldset</b> to group related form elements like checkboxes,
            radios, or inputs under a common label.
          </Text>
        </Box>

        {/* Validation */}
        <Box>
          <Heading size="md" mb={2}>
            Validation
          </Heading>
          <Text color="gray.600">
            Use the <b>errorText</b> prop to display validation errors when
            conditions are not met.
          </Text>
        </Box>

        {/* Example Use Cases */}
        <Box>
          <Heading size="md" mb={2}>
            Example Use Cases
          </Heading>
          <Text color="gray.600">
            • Checkbox groups  
            • Radio groups  
            • Multi-select forms  
            • Form validation sections  
          </Text>
        </Box>

        {/* Notes */}
        <Box>
          <Heading size="md" mb={2}>
            Notes
          </Heading>
          <Text color="gray.600">
            • <b>legend</b> acts as the group label  
            • <b>errorText</b> shows validation message  
            • Works with any form inputs  
            • Helps improve accessibility and structure  
          </Text>
        </Box>

      </VStack>
    </Box>
  );
}