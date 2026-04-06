import { Box, Heading, Text, VStack } from "@chakra-ui/react";
import ComponentPreview from "../../components/docs/ComponentPreview";
import { Field } from "ai-ui-kit";
import { Input } from "@chakra-ui/react";

export default function FieldPage() {
  const codeString = `import { Field } from "ai-ui-kit";
import { Input } from "@chakra-ui/react";

<Field
  label="Username"
  helperText="Your username must be unique"
  required
>
  <Input placeholder="Username" />
</Field>;`;

  return (
    <Box maxW="900px">
      <VStack align="start" gap={8}>

        {/* Title */}
        <Box>
          <Heading>Field</Heading>
          <Text color="gray.600" mt={2}>
            A wrapper component for form inputs that provides labels, helper
            text, and validation support.
          </Text>
        </Box>

        {/* 🔥 Preview + Code */}
        <ComponentPreview
          title="Basic Usage"
          demo={
            <Field
              label="Username"
              helperText="Your username must be unique"
              required
            >
              <Input placeholder="Username" />
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
            Use <b>Field</b> to wrap form inputs and provide consistent labeling,
            helper text, and validation messaging.
          </Text>
        </Box>

        {/* Example Use Cases */}
        <Box>
          <Heading size="md" mb={2}>
            Example Use Cases
          </Heading>
          <Text color="gray.600">
            • Form inputs (text, email, password)  
            • Settings forms  
            • Signup/login forms  
            • Dashboard input fields  
          </Text>
        </Box>

        {/* Variants */}
        <Box>
          <Heading size="md" mb={2}>
            Variants
          </Heading>

          <VStack align="start" gap={4}>
            {/* Required */}
            <Field label="Email" required>
              <Input placeholder="Email" />
            </Field>

            {/* Helper text */}
            <Field label="Password" helperText="Minimum 8 characters">
              <Input placeholder="Password" type="password" />
            </Field>

            {/* Error */}
            <Field
              label="Username"
              errorText="Username already taken"
            >
              <Input placeholder="Username" />
            </Field>
          </VStack>
        </Box>

        {/* Notes */}
        <Box>
          <Heading size="md" mb={2}>
            Notes
          </Heading>
          <Text color="gray.600">
            • <b>label</b> defines the field name  
            • <b>helperText</b> provides guidance  
            • <b>errorText</b> shows validation errors  
            • <b>required</b> marks mandatory fields  
            • Works with any input component  
          </Text>
        </Box>

      </VStack>
    </Box>
  );
}