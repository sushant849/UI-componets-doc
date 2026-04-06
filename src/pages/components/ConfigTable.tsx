import { Box, Heading, Text, VStack } from "@chakra-ui/react";
import ComponentPreview from "../../components/docs/ComponentPreview";
import PropsTable from "../../components/docs/PropsTable";
import { ConfigTable } from "ai-ui-kit";

export default function ConfigTablePage() {
  const columns = [
    { key: "name", label: "Name" },
    { key: "role", label: "Role" },
  ];

  const data = [
    { name: "ccube", role: "Developer" },
    { name: "AI Bot", role: "Assistant" },
  ];

  const codeString = `import { ConfigTable } from "ai-ui-kit";

      const columns = [
        { key: "name", label: "Name" },
        { key: "role", label: "Role" },
      ];

      const data = [
        { name: "Sushant", role: "Developer" },
        { name: "AI Bot", role: "Assistant" },
      ];

      <ConfigTable
        columns={columns}
        data={data}
        onEdit={(row) => console.log(row)}
        onDelete={(row) => console.log(row)}
      />;`;

  const propsData = [
    {
      name: "columns",
      type: "ConfigColumn[]",
      description: "Defines table columns (key + label)",
    },
    {
      name: "data",
      type: "T[]",
      description: "Array of row data",
    },
    {
      name: "onEdit",
      type: "(row) => void",
      description: "Callback when edit button is clicked",
    },
    {
      name: "onDelete",
      type: "(row) => void",
      description: "Callback when delete button is clicked",
    },
  ];

  return (
    <Box maxW="900px">
      <VStack align="start" gap={8}>
        <Box>
          <Heading>ConfigTable</Heading>
          <Text color="fg.muted">
            A reusable table component for displaying configuration data with edit and delete actions.
          </Text>
        </Box>

        {/* Preview + Code */}
        <ComponentPreview
          title="Basic Usage"
          demo={
            <ConfigTable
              columns={columns}
              data={data}
              onEdit={(row) => alert(`Edit ${row.name}`)}
              onDelete={(row) => alert(`Delete ${row.name}`)}
            />
          }
          code={codeString}
        />

        {/* Props Table */}
        <Box>
          <Heading size="md" mb={4}>
            Props
          </Heading>
          <PropsTable props={propsData} />
        </Box>

        {/* Notes */}
        <Box>
          <Heading size="md" mb={2}>
            Notes
          </Heading>
          <Text color="fg.muted">
            Supports dynamic columns and data; optional edit/delete actions; typed
            with generics.
          </Text>
        </Box>

      </VStack>
    </Box>
  );
}