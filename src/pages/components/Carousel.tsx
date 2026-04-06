import { Box, Heading, Text, VStack } from "@chakra-ui/react";
import ComponentPreview from "../../components/docs/ComponentPreview";
import { Carousel } from "ai-ui-kit";

export default function CarouselPage() {
  const items = [
    { id: 1, text: "Slide 1" },
    { id: 2, text: "Slide 2" },
    { id: 3, text: "Slide 3" },
  ];

  const codeString = `import { Carousel } from "ai-ui-kit";

const items = [
  { id: 1, text: "Slide 1" },
  { id: 2, text: "Slide 2" },
  { id: 3, text: "Slide 3" },
];

<Carousel
  items={items}
  renderItem={(item) => (
    <div>{item.text}</div>
  )}
  showControls
  showIndicators
/>;`;

  return (
    <Box maxW="900px">
      <VStack align="start" gap={8}>

        {/* Title */}
        <Box>
          <Heading>Carousel</Heading>
          <Text color="gray.600" mt={2}>
            A flexible carousel component for displaying items in a sliding
            view. Supports custom rendering using a render function.
          </Text>
        </Box>

        {/* 🔥 Preview + Code */}
        <ComponentPreview
          title="Basic Usage"
          demo={
            <Carousel
              items={items}
              renderItem={(item) => (
                <Box
                  h="120px"
                  display="flex"
                  alignItems="center"
                  justifyContent="center"
                  bg="gray.100"
                >
                  {item.text}
                </Box>
              )}
              showControls
              showIndicators
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
            Use <b>Carousel</b> to display content in a sliding format.
            It is highly customizable using the <b>renderItem</b> function.
          </Text>
        </Box>

        {/* Render Function */}
        <Box>
          <Heading size="md" mb={2}>
            renderItem
          </Heading>
          <Text color="gray.600">
            The <b>renderItem</b> prop allows you to fully control how each slide
            is rendered. This makes the carousel extremely flexible for different UI needs.
          </Text>
        </Box>

        {/* Example Use Cases */}
        <Box>
          <Heading size="md" mb={2}>
            Example Use Cases
          </Heading>
          <Text color="gray.600">
            • Image sliders  
            • Product showcases  
            • Testimonials  
            • Feature highlights  
          </Text>
        </Box>

        {/* Variants */}
        <Box>
          <Heading size="md" mb={2}>
            Variants
          </Heading>

          <VStack align="start" gap={4}>
            {/* With controls */}
            <Carousel
              items={items}
              renderItem={(item) => <Box p={4}>{item.text}</Box>}
              showControls
            />

            {/* Without controls */}
            <Carousel
              items={items}
              renderItem={(item) => <Box p={4}>{item.text}</Box>}
              showIndicators
            />
          </VStack>
        </Box>

        {/* Notes */}
        <Box>
          <Heading size="md" mb={2}>
            Notes
          </Heading>
          <Text color="gray.600">
            • <b>items</b> is an array of data  
            • <b>renderItem</b> controls slide UI  
            • <b>showControls</b> enables navigation arrows  
            • <b>showIndicators</b> shows dots  
          </Text>
        </Box>

      </VStack>
    </Box>
  );
}