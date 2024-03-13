import TableCell from "@mui/material/TableCell";
import TableHeader from "src/components/AppTable/TableHeader";

const TableHeading = () => {
  return (
    <TableHeader>
      <TableCell>User</TableCell>
      <TableCell>% change</TableCell>
      <TableCell>USD Amount</TableCell>
    </TableHeader>
  );
};

export default TableHeading;
