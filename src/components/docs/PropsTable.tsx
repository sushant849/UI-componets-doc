import {
  Box,
  TableRoot,
  TableHeader,
  TableBody,
  TableRow,
  TableColumnHeader,
  TableCell,
  Text,
} from "@chakra-ui/react";

export interface PropRow {
  name: string;
  type: string;
  description: string;
}

export interface PropsTableProps {
  props: PropRow[];
}

export default function PropsTable({ props: rows }: PropsTableProps) {
  return (
    <Box overflowX="auto" borderWidth="1px" borderRadius="l3" borderColor="border">
      <TableRoot size="sm" variant="line">
        <TableHeader>
          <TableRow>
            <TableColumnHeader>Prop</TableColumnHeader>
            <TableColumnHeader>Type</TableColumnHeader>
            <TableColumnHeader>Description</TableColumnHeader>
          </TableRow>
        </TableHeader>
        <TableBody>
          {rows.map((row) => (
            <TableRow key={row.name}>
              <TableCell>
                <Text fontFamily="mono" fontSize="sm">
                  {row.name}
                </Text>
              </TableCell>
              <TableCell>
                <Text fontFamily="mono" fontSize="sm" color="fg.muted">
                  {row.type}
                </Text>
              </TableCell>
              <TableCell>
                <Text fontSize="sm">{row.description}</Text>
              </TableCell>
            </TableRow>
          ))}
        </TableBody>
      </TableRoot>
    </Box>
  );
}
