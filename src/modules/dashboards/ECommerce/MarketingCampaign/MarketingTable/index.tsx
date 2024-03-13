import Table from "@mui/material/Table";
import TableHead from "@mui/material/TableHead";
import TableBody from "@mui/material/TableBody";
import AppTableContainer from "src/components/AppTableContainer";
import AppScrollbar from "src/components/AppScrollbar";

import TableHeading from "./TableHeading";
import TableItem from "./TableItem";
import { MarketingCampaignType } from "src/types/models/dashboards/Ecommerce";

type Props = {
  marketingCampaign: MarketingCampaignType[];
};

const OrderTable = ({ marketingCampaign }: Props) => {
  return (
    <AppTableContainer>
      <AppScrollbar sx={{ maxHeight: { xs: 365, lg: 340 } }}>
        <Table stickyHeader>
          <TableHead>
            <TableHeading />
          </TableHead>
          <TableBody>
            {marketingCampaign.map((data) => (
              <TableItem data={data} key={data.id} />
            ))}
          </TableBody>
        </Table>
      </AppScrollbar>
    </AppTableContainer>
  );
};

export default OrderTable;
