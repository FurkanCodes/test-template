import Table from "@mui/material/Table";
import TableHead from "@mui/material/TableHead";
import TableBody from "@mui/material/TableBody";
import TableHeading from "./TableHeading";
import TableItem from "./TableItem";
import AppTableContainer from "src/components/AppTableContainer";
import AppScrollbar from "src/components/AppScrollbar";
import { GainerLooserType } from "src/types/models/dashboards/Crypto";

type Props = {
  data: GainerLooserType[];
};
const GainerLooserTable = ({ data }: Props) => {
  return (
    <AppTableContainer>
      <AppScrollbar style={{ maxHeight: 320 }}>
        <Table stickyHeader>
          <TableHead>
            <TableHeading />
          </TableHead>
          <TableBody>
            {data.map((data: GainerLooserType) => (
              <TableItem data={data} key={data.id} />
            ))}
          </TableBody>
        </Table>
      </AppScrollbar>
    </AppTableContainer>
  );
};

export default GainerLooserTable;
