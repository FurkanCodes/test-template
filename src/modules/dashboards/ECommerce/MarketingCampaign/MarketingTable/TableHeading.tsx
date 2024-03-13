import TableCell from "@mui/material/TableCell";
import TableHeader from "src/components/AppTable/TableHeader";

const TableHeading = () => {
  return (
    <TableHeader>
      <TableCell>Name</TableCell>
      <TableCell>Duration</TableCell>
      <TableCell>Spend</TableCell>
      <TableCell>Budget</TableCell>
      <TableCell>Graph</TableCell>
    </TableHeader>
  );
};

export default TableHeading;
