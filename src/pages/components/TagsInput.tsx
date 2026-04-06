import { Box, Heading, Text, VStack } from "@chakra-ui/react";
import { useState } from "react";
import ComponentPreview from "../../components/docs/ComponentPreview";
import { Field, TagsInput } from "ai-ui-kit";

export default function TagsInputPage() {
  const [tags, setTags] = useState<string[]>(["react"]);

  const codeString = `import { useState } from "react";
import { Field, TagsInput } from "ai-ui-kit";

const [tags, setTags] = useState(["react"]);

<Field label="Tags" helperText="Type and press Enter to add tags">
  <TagsInput
    value={tags}
    onValueChange={(details) => setTags(details.value)}
    placeholder="Add tag..."
  />
</Field>;`;

  return (
    <Box maxW="900px">
      <VStack align="start" gap={8}>

        {/* Title */}
        <Box>
          <Heading>TagsInput</Heading>
          <Text color="gray.600" mt={2}>
            A multi-value input component for adding and managing tags.
            Users can type and press Enter to create tags dynamically.
          </Text>
        </Box>

        {/* 🔥 Preview + Code */}
        <ComponentPreview
          title="Basic Usage"
          demo={
            <Box maxW="400px">
              <Field label="Tags" helperText="Type and press Enter to add tags">
                <TagsInput
                  value={tags}
                  onValueChange={(details) =>
                    setTags(details.value)
                  }
                  placeholder="Add tag..."
                />

                <Text mt={2}>
                  Selected tags:{" "}
                  {tags.length ? tags.join(", ") : "none"}
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
            Use <b>TagsInput</b> when users need to enter multiple values such as
            keywords, labels, or categories.
          </Text>
        </Box>

        {/* Controlled Pattern */}
        <Box>
          <Heading size="md" mb={2}>
            Controlled State
          </Heading>
          <Text color="gray.600">
            The component uses an array of strings. Manage it using{" "}
            <b>value</b> and <b>onValueChange</b>.
          </Text>
        </Box>

        {/* Variants */}
        <Box>
          <Heading size="md" mb={2}>
            Variants
          </Heading>

          <VStack align="start" gap={4}>
            {/* Default */}
            <TagsInput placeholder="Add tags..." />

            {/* With default values */}
            <TagsInput defaultValue={["react", "chakra"]} />

            {/* Disabled */}
            <TagsInput disabled placeholder="Disabled" />
          </VStack>
        </Box>

        {/* Example Use Cases */}
        <Box>
          <Heading size="md" mb={2}>
            Example Use Cases
          </Heading>
          <Text color="gray.600">
            • Blog tags  
            • Search keywords  
            • Skills input  
            • Filters / categories  
          </Text>
        </Box>

        {/* Notes */}
        <Box>
          <Heading size="md" mb={2}>
            Notes
          </Heading>
          <Text color="gray.600">
            • <b>value</b> is an array of strings  
            • Press <b>Enter</b> to add a tag  
            • Supports controlled and uncontrolled usage  
            • Combine with Field for better UX  
          </Text>
        </Box>

      </VStack>
    </Box>
  );
}