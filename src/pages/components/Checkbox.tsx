import { Box, Heading, Text, VStack } from "@chakra-ui/react";
import { useState } from "react";
import ComponentPreview from "../../components/docs/ComponentPreview";
import { Checkbox } from "ai-ui-kit";
import { FiCheckCircle } from "react-icons/fi";

export default function CheckboxPage() {
  const [agree, setAgree] = useState(false);

  const codeString = `import { Checkbox } from "ai-ui-kit";
import { useState } from "react";
import { FiCheckCircle } from "react-icons/fi";

const [agree, setAgree] = useState(false);

<Checkbox
  label="I accept Terms & Conditions"
  description="Required to continue"
  checked={agree}
  onCheckedChange={(e) => setAgree(!!e.checked)}
  icon={<FiCheckCircle size={20} color="green" />}
/>;`;

  return (
    <Box maxW="900px">
      <VStack align="start" gap={8}>

        {/* Title */}
        <Box>
          <Heading>Checkbox</Heading>
          <Text color="gray.600" mt={2}>
            A form control component used to select or toggle options.
            Supports labels, descriptions, custom icons, and controlled state.
          </Text>
        </Box>

        {/* 🔥 Preview + Code */}
        <ComponentPreview
          title="Controlled Checkbox"
          demo={
            <Checkbox
              label="I accept Terms & Conditions"
              description="Required to continue"
              checked={agree}
              onCheckedChange={(e) => setAgree(!!e.checked)}
              icon={<FiCheckCircle size={20} color="green" />}
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
            Use <b>Checkbox</b> for binary selections. It works best in forms,
            agreements, filters, and settings toggles.
          </Text>
        </Box>

        {/* Controlled Pattern */}
        <Box>
          <Heading size="md" mb={2}>
            Controlled State
          </Heading>
          <Text color="gray.600">
            This component is typically used as a controlled input where the
            checked state is managed using React state.
          </Text>
        </Box>

        {/* Example Use Cases */}
        <Box>
          <Heading size="md" mb={2}>
            Example Use Cases
          </Heading>
          <Text color="gray.600">
            • Terms & conditions agreement  
            • Settings toggles  
            • Multi-select filters  
            • Form inputs  
          </Text>
        </Box>

        {/* Variants */}
        <Box>
          <Heading size="md" mb={2}>
            Variants
          </Heading>

          <VStack align="start" gap={4}>
            <Checkbox label="Default" />

            <Checkbox
              label="With description"
              description="Additional info"
            />

            <Checkbox
              label="Custom icon"
              icon={<FiCheckCircle />}
            />

            <Checkbox
              label="Disabled"
              disabled
            />
          </VStack>
        </Box>

        {/* Notes */}
        <Box>
          <Heading size="md" mb={2}>
            Notes
          </Heading>
          <Text color="gray.600">
            • <b>checked</b> controls state  
            • <b>onCheckedChange</b> handles updates  
            • <b>icon</b> allows custom UI  
            • Supports label and description  
          </Text>
        </Box>

      </VStack>
    </Box>
  );
}