import AppCard from "src/components/AppCard";
import { useIntl } from "react-intl";
import CustomerItem from "./CustomerItem";
import AppList from "src/components/AppList";
import AppScrollbar from "src/components/AppScrollbar";
import { NewCustomersType } from "src/types/models/dashboards/Ecommerce";

type Props = {
  newCustomers: NewCustomersType[];
};

const NewCustomers = (props: Props) => {
  const { messages } = useIntl();
  return (
    <AppCard
      title={messages["eCommerce.newCustomers"] as string}
      contentStyle={{ px: 0 }}
    >
      <AppScrollbar sx={{ maxHeight: 300 }}>
        <AppList
          data={props.newCustomers}
          renderRow={(item) => <CustomerItem key={item.id} item={item} />}
        />
      </AppScrollbar>
    </AppCard>
  );
};

export default NewCustomers;
