import { Box, Heading, Text, VStack } from "@chakra-ui/react";
import { useState } from "react";
import ComponentPreview from "../../components/docs/ComponentPreview";
import { Field, Switch } from "ai-ui-kit";

export default function SwitchPage() {
  const [enabled, setEnabled] = useState(false);

  const codeString = `import { useState } from "react";
import { Field, Switch } from "ai-ui-kit";

const [enabled, setEnabled] = useState(false);

<Field
  label="Enable notifications"
  helperText="Turn on to receive alerts"
>
  <Switch
    checked={enabled}
    onCheckedChange={(details) => setEnabled(details.checked)}
    label="Notifications"
    description="Receive notifications by email"
  />
</Field>;`;

  return (
    <Box maxW="900px">
      <VStack align="start" gap={8}>

        {/* Title */}
        <Box>
          <Heading>Switch</Heading>
          <Text color="gray.600" mt={2}>
            A toggle component used to switch between two states (on/off).
            Ideal for settings, preferences, and feature toggles.
          </Text>
        </Box>

        {/* 🔥 Preview + Code */}
        <ComponentPreview
          title="Controlled Switch"
          demo={
            <Box maxW="400px">
              <Field
                label="Enable notifications"
                helperText="Turn on to receive alerts"
              >
                <Switch
                  checked={enabled}
                  onCheckedChange={(details) =>
                    setEnabled(details.checked)
                  }
                  label="Notifications"
                  description="Receive notifications by email"
                />

                <Text mt={2}>
                  Switch is {enabled ? "ON" : "OFF"}
                </Text>
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
            Use <b>Switch</b> for binary settings where users toggle between
            enabled and disabled states.
          </Text>
        </Box>

        {/* Controlled Pattern */}
        <Box>
          <Heading size="md" mb={2}>
            Controlled State
          </Heading>
          <Text color="gray.600">
            Manage switch state using <b>checked</b> and{" "}
            <b>onCheckedChange</b>.
          </Text>
        </Box>

        {/* Variants */}
        <Box>
          <Heading size="md" mb={2}>
            Variants
          </Heading>

          <VStack align="start" gap={4}>
            {/* Default */}
            <Switch label="Default switch" />

            {/* With description */}
            <Switch
              label="With description"
              description="Additional details"
            />

            {/* Disabled */}
            <Switch
              label="Disabled"
              disabled
            />
          </VStack>
        </Box>

        {/* Example Use Cases */}
        <Box>
          <Heading size="md" mb={2}>
            Example Use Cases
          </Heading>
          <Text color="gray.600">
            • Notifications toggle  
            • Dark mode switch  
            • Feature flags  
            • Settings panels  
          </Text>
        </Box>

        {/* Notes */}
        <Box>
          <Heading size="md" mb={2}>
            Notes
          </Heading>
          <Text color="gray.600">
            • <b>checked</b> controls state  
            • <b>onCheckedChange</b> updates state  
            • Supports label and description  
            • Ideal for boolean settings  
          </Text>
        </Box>

      </VStack>
    </Box>
  );
}