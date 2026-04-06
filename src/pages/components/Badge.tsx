import { Box, Heading, Text, VStack, HStack } from "@chakra-ui/react";
import ComponentPreview from "../../components/docs/ComponentPreview";
import { Badge } from "ai-ui-kit";

export default function BadgePage() {
  const codeString = `import { Badge } from "ai-ui-kit";

<Badge
  sizes={{
    base: "xs",
    md: "md",
    xl: "lg",
  }}
  variants={{
    base: "subtle",
    md: "solid",
  }}
  colorPalettes={{
    base: "gray",
    md: "blue",
    xl: "green",
  }}
>
  Active
</Badge>;`;

  return (
    <Box maxW="900px">
      <VStack align="start" gap={8}>

        {/* Title */}
        <Box>
          <Heading>Badge</Heading>
          <Text color="gray.600" mt={2}>
            A flexible badge component used to highlight status, labels, or
            categories. Supports responsive sizes, variants, and colors.
          </Text>
        </Box>

        {/* 🔥 Preview + Code */}
        <ComponentPreview
          title="Responsive Badge"
          demo={
            <Badge
              sizes={{
                base: "xs",
                md: "md",
                xl: "lg",
              }}
              variants={{
                base: "subtle",
                md: "solid",
              }}
              colorPalettes={{
                base: "gray",
                md: "blue",
                xl: "green",
              }}
            >
              Active
            </Badge>
          }
          code={codeString}
        />

        {/* Usage */}
        <Box>
          <Heading size="md" mb={2}>
            Usage
          </Heading>
          <Text color="gray.600">
            Use <b>Badge</b> to display status indicators, labels, or categories.
            It supports responsive styling for different screen sizes.
          </Text>
        </Box>

        {/* Example Use Cases */}
        <Box>
          <Heading size="md" mb={2}>
            Example Use Cases
          </Heading>
          <Text color="gray.600">
            • Status indicators (Active, Pending, Failed)  
            • Tags or categories  
            • Notifications or counters  
            • Labels in dashboards  
          </Text>
        </Box>

        {/* Variants */}
        <Box>
          <Heading size="md" mb={2}>
            Variants
          </Heading>

          <HStack gap={4}>
            <Badge variant="solid" colorPalette="blue">
              Solid
            </Badge>
            <Badge variant="subtle" colorPalette="gray">
              Subtle
            </Badge>
            <Badge variant="outline" colorPalette="green">
              Outline
            </Badge>
          </HStack>
        </Box>

        {/* Sizes */}
        <Box>
          <Heading size="md" mb={2}>
            Sizes
          </Heading>

         <HStack gap={4}>
            <Badge sizes={{ base: "xs" }}>XS</Badge>
            <Badge sizes={{ base: "sm" }}>SM</Badge>
            <Badge sizes={{ base: "md" }}>MD</Badge>
            <Badge sizes={{ base: "lg" }}>LG</Badge>
         </HStack>
        </Box>

        {/* Notes */}
        <Box>
          <Heading size="md" mb={2}>
            Notes
          </Heading>
          <Text color="gray.600">
            • Supports responsive props via <b>sizes</b>, <b>variants</b>, and{" "}
            <b>colorPalettes</b>  
            • Can be used inline or inside cards/tables  
            • Great for highlighting statuses  
          </Text>
        </Box>

      </VStack>
    </Box>
  );
}