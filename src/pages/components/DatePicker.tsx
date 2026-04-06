import { Box, Heading, Text, VStack } from "@chakra-ui/react";
import ComponentPreview from "../../components/docs/ComponentPreview";
import { DatePicker } from "ai-ui-kit";

export default function DatePickerPage() {
  const codeString = `import { DatePicker } from "ai-ui-kit";

<DatePicker
  label="Select date"
  format={(date) => {
    if (!date) return "";

    const d = date.toDate("UTC");

    const day = String(d.getDate()).padStart(2, "0");
    const month = String(d.getMonth() + 1).padStart(2, "0");
    const year = d.getFullYear();

    return \`\${day}/\${month}/\${year}\`;
  }}
  placeholder="Pick a date"
  closeOnSelect
/>;`;

  return (
    <Box maxW="900px">
      <VStack align="start" gap={8}>

        {/* Title */}
        <Box>
          <Heading>DatePicker</Heading>
          <Text color="gray.600" mt={2}>
            A flexible date selection component with customizable formatting,
            positioning, and input behavior.
          </Text>
        </Box>

        {/* 🔥 Preview + Code */}
        <ComponentPreview
          title="Basic Usage"
          demo={
            <DatePicker
              label="Select date"
              format={(date) => {
                if (!date) return "";

                const d = date.toDate("UTC");

                const day = String(d.getDate()).padStart(2, "0");
                const month = String(d.getMonth() + 1).padStart(2, "0");
                const year = d.getFullYear();

                return `${day}/${month}/${year}`;
              }}
              placeholder="Pick a date"
              closeOnSelect
              positioning={{ placement: "bottom-start" }}
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
            Use <b>DatePicker</b> to allow users to select dates in forms,
            filters, or scheduling interfaces.
          </Text>
        </Box>

        {/* Example Use Cases */}
        <Box>
          <Heading size="md" mb={2}>
            Example Use Cases
          </Heading>
          <Text color="gray.600">
            • Booking systems  
            • Date filters in dashboards  
            • Scheduling events  
            • Form inputs (DOB, deadlines)  
          </Text>
        </Box>

        {/* Formatting */}
        <Box>
          <Heading size="md" mb={2}>
            Custom Formatting
          </Heading>
          <Text color="gray.600">
            Use the <b>format</b> prop to control how the selected date is displayed.
          </Text>
        </Box>

        {/* Variants */}
        <Box>
          <Heading size="md" mb={2}>
            Variants
          </Heading>

          <VStack align="start" gap={4}>
            <DatePicker placeholder="Default" />

            <DatePicker
              label="Read Only"
              readOnly
              placeholder="Read only"
            />

            <DatePicker
              label="Disabled"
              disabled
              placeholder="Disabled"
            />
          </VStack>
        </Box>

        {/* Notes */}
        <Box>
          <Heading size="md" mb={2}>
            Notes
          </Heading>
          <Text color="gray.600">
            • <b>format</b> controls display output  
            • <b>closeOnSelect</b> improves UX  
            • <b>positioning</b> controls dropdown placement  
            • Supports disabled and read-only states  
          </Text>
        </Box>

      </VStack>
    </Box>
  );
}