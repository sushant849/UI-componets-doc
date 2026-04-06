import { Box, Heading, Text, VStack } from "@chakra-ui/react";
import ComponentPreview from "../../components/docs/ComponentPreview";
import { TableComponent } from "ai-ui-kit";

type User = {
  id: number;
  name: string;
  age: number;
  status: "active" | "inactive";
};

const fullData: User[] = Array.from({ length: 25 }).map((_, i) => ({
  id: i + 1,
  name: `User ${i + 1}`,
  age: 20 + (i % 10),
  status: i % 2 === 0 ? "active" : "inactive",
}));

export default function TableComponentPage() {
  const codeString = `import { TableComponent } from "ai-ui-kit";

<TableComponent
  data={data}
  variant="outline"
  size="sm"
  striped
  caption="User Management Table"
  columns={[
    { key: "id", header: "ID" },
    { key: "name", header: "Name" },
    { key: "age", header: "Age" },
    { key: "status", header: "Status" },
  ]}
/>;`;

  return (
    <Box maxW="1000px">
      <VStack align="start" gap={8}>

        {/* Title */}
        <Box>
          <Heading>TableComponent</Heading>
          <Text color="gray.600" mt={2}>
            A flexible and customizable table component for displaying structured
            data with support for custom rendering, styling, and scrolling.
          </Text>
        </Box>

        {/* 🔥 Preview + Code */}
        <ComponentPreview
          title="User Table Example"
          demo={
            <TableComponent
              data={fullData}
              variant="outline"
              size="sm"
              striped
              caption="User Management Table"
              captionProps={{
                textAlign: "center",
                fontWeight: "bold",
              }}
              columns={[
                {
                  key: "id",
                  header: "ID",
                  headerProps: { textAlign: "center" },
                  cellProps: { textAlign: "center" },
                },
                {
                  key: "name",
                  header: "Name",
                  render: (value) => <b>{value}</b>,
                },
                {
                  key: "age",
                  header: "Age",
                  render: (value) => `${value} yrs`,
                },
                {
                  key: "status",
                  header: "Status",
                  render: (value) => (
                    <span
                      style={{
                        color: value === "active" ? "green" : "red",
                        fontWeight: 600,
                      }}
                    >
                      {value}
                    </span>
                  ),
                },
              ]}
              headerProps={{ bg: "gray.100" }}
              bodyProps={{ bg: "white" }}
              rowProps={{ _hover: { bg: "gray.50" } }}
              scrollProps={{
                maxH: "250px",
                borderWidth: "1px",
              }}
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
            Use <b>TableComponent</b> to display tabular data with full control
            over rendering, styling, and behavior.
          </Text>
        </Box>

        {/* Features */}
        <Box>
          <Heading size="md" mb={2}>
            Features
          </Heading>
          <Text color="gray.600">
            • Custom column rendering  
            • Header & cell styling  
            • Scrollable table  
            • Caption support  
            • Hover effects  
            • Fully typed data  
          </Text>
        </Box>

        {/* Example Use Cases */}
        <Box>
          <Heading size="md" mb={2}>
            Example Use Cases
          </Heading>
          <Text color="gray.600">
            • Admin dashboards  
            • User management systems  
            • Analytics tables  
            • Logs and reports  
          </Text>
        </Box>

        {/* Notes */}
        <Box>
          <Heading size="md" mb={2}>
            Notes
          </Heading>
          <Text color="gray.600">
            • <b>columns</b> define structure and rendering  
            • <b>render</b> allows custom UI per cell  
            • <b>scrollProps</b> enables scrollable tables  
            • Works well with large datasets  
          </Text>
        </Box>

      </VStack>
    </Box>
  );
}