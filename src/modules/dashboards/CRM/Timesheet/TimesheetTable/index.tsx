import Table from "@mui/material/Table";
import TableHead from "@mui/material/TableHead";
import TableBody from "@mui/material/TableBody";
import TableHeading from "./TableHeading";
import TableItem from "./TableItem";
import AppTableContainer from "src/components/AppTableContainer";
import AppScrollbar from "src/components/AppScrollbar";
import { TimesheetType } from "src/types/models/dashboards/CRM";

type Props = {
  timesheet: TimesheetType[];
};
const TimesheetTable = ({ timesheet }: Props) => {
  return (
    <AppTableContainer>
      <AppScrollbar style={{ maxHeight: 235 }}>
        <Table stickyHeader>
          <TableHead>
            <TableHeading />
          </TableHead>
          <TableBody>
            {timesheet.map((data) => (
              <TableItem data={data} key={data.id} />
            ))}
          </TableBody>
        </Table>
      </AppScrollbar>
    </AppTableContainer>
  );
};

export default TimesheetTable;
