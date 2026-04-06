import { Box, Heading, Text, VStack } from "@chakra-ui/react";
import { useState } from "react";
import ComponentPreview from "../../components/docs/ComponentPreview";
import { Input } from "ai-ui-kit";

export default function PasswordInputPage() {
  const [password, setPassword] = useState("test123");

  const codeString = `import { useState } from "react";
import { Input } from "ai-ui-kit";

const [password, setPassword] = useState("test123");

<Input
  value={password}
  onChange={(e) => setPassword(e.target.value)}
  isPassword
  clearable
  placeholder="Enter password"
/>;`;

  return (
    <Box maxW="900px">
      <VStack align="start" gap={8}>

        {/* Title */}
        <Box>
          <Heading>Password Input</Heading>
          <Text color="gray.600" mt={2}>
            A secure input field for passwords with built-in visibility toggle
            and clear functionality.
          </Text>
        </Box>

        {/* 🔥 Preview + Code */}
        <ComponentPreview
          title="Password Input"
          demo={
            <Box maxW="300px">
              <Input
                value={password}
                onChange={(e) => setPassword(e.target.value)}
                isPassword
                clearable
                placeholder="Enter password"
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
            Use this input for password fields where users can toggle visibility
            and optionally clear the value.
          </Text>
        </Box>

        {/* Features */}
        <Box>
          <Heading size="md" mb={2}>
            Features
          </Heading>
          <Text color="gray.600">
            • Show / hide password toggle  
            • Clear button support  
            • Controlled input pattern  
          </Text>
        </Box>

        {/* Variants */}
        <Box>
          <Heading size="md" mb={2}>
            Variants
          </Heading>

          <VStack align="start" gap={4}>
            {/* Default */}
            <Input isPassword placeholder="Enter password" />

            {/* With value */}
            <Input isPassword value="secret123" readOnly />

            {/* Disabled */}
            <Input isPassword disabled placeholder="Disabled" />
          </VStack>
        </Box>

        {/* Example Use Cases */}
        <Box>
          <Heading size="md" mb={2}>
            Example Use Cases
          </Heading>
          <Text color="gray.600">
            • Login forms  
            • Signup forms  
            • Change password forms  
            • Authentication flows  
          </Text>
        </Box>

        {/* Notes */}
        <Box>
          <Heading size="md" mb={2}>
            Notes
          </Heading>
          <Text color="gray.600">
            • <b>isPassword</b> enables secure input behavior  
            • Works with <b>value + onChange</b> (controlled)  
            • Combine with validation for strong password rules  
          </Text>
        </Box>

      </VStack>
    </Box>
  );
}