import AppCard from "src/components/AppCard";
import TransactionTable from "./TransactionTable";
import AppSelect from "src/components/AppSelect";
import { useIntl } from "react-intl";
import { TransactionDaumType } from "src/types/models/dashboards/Analytics";
import IntlMessages from "src/helpers/IntlMessages";

type Props = {
  transactionData: TransactionDaumType[];
};
const OrderNTransaction = ({ transactionData }: Props) => {
  const handleSelectionType = (data: TransactionDaumType) => {
    console.log("data: ", data);
  };
  const { messages } = useIntl();
  return (
    <AppCard
      sxStyle={{ height: 1 }}
      contentStyle={{ px: 0 }}
      title={<IntlMessages id="dashboard.analytics.ordersTransaction" />}
      action={
        <AppSelect
          menus={[
            messages["dashboard.thisWeek"],
            messages["dashboard.lastWeeks"],
            messages["dashboard.lastMonth"],
          ]}
          defaultValue={messages["dashboard.thisWeek"]}
          onChange={handleSelectionType}
        />
      }
    >
      <TransactionTable transactionData={transactionData} />
    </AppCard>
  );
};

export default OrderNTransaction;
