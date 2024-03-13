import Table from "@mui/material/Table";
import TableHead from "@mui/material/TableHead";
import TableBody from "@mui/material/TableBody";
import TableHeading from "./TableHeading";
import TableItem from "./TableItem";
import AppTableContainer from "src/components/AppTableContainer";
import AppLoader from "src/components/AppLoader";
import { InvoiceType } from "src/types/models/invoice";

type Props = {
  invoiceData: InvoiceType[];
  loading: boolean;
  onChangeStatus: (invoice: InvoiceType, status: number) => void;
};

const InvoiceTable = ({ invoiceData, loading, onChangeStatus }: Props) => {
  return (
    <AppTableContainer>
      {loading ? (
        <AppLoader />
      ) : (
        <Table stickyHeader className="table">
          <TableHead>
            <TableHeading />
          </TableHead>
          <TableBody>
            {invoiceData.map((data) => (
              <TableItem
                data={data}
                key={data.id}
                onChangeStatus={onChangeStatus}
              />
            ))}
          </TableBody>
        </Table>
      )}
    </AppTableContainer>
  );
};

export default InvoiceTable;
