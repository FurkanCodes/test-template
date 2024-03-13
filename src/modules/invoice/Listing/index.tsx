import InvoiceSideBar from "./InvoiceSideBar";
import InvoiceList from "./InvoiceList";
import { useIntl } from "react-intl";
import AppsContainer from "src/components/AppsContainer";

const InvoiceListing = () => {
  const { messages } = useIntl();

  return (
    <AppsContainer
      title={messages["sidebar.invoice"] as string}
      sidebarContent={<InvoiceSideBar />}
    >
      <InvoiceList />
    </AppsContainer>
  );
};

export default InvoiceListing;
