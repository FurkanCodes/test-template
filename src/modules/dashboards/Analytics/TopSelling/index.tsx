import AppCard from "src/components/AppCard";
import ProductCell from "./ProductCell";
import { useIntl } from "react-intl";
import AppList from "src/components/AppList";
import { TopSellingProductType } from "src/types/models/dashboards/Analytics";
import IntlMessages from "src/helpers/IntlMessages";

type Props = {
  products: TopSellingProductType[];
};
const TopSelling = ({ products }: Props) => {
  const { messages } = useIntl();
  return (
    <AppCard
      contentStyle={{ px: 0 }}
      sxStyle={{ height: 1 }}
      title={<IntlMessages id="dashboard.analytics.topSellingProducts" />}
      footer={"+12 " + messages["common.more"]}
    >
      <AppList
        animation="transition.slideRightBigIn"
        data={products}
        renderRow={(data, index) => <ProductCell key={index} data={data} />}
      />
    </AppCard>
  );
};

export default TopSelling;
