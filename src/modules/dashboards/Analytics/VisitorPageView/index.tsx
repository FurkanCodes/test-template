import StatGraphs from "./StatGraphs";
import AppCard from "src/components/AppCard";
import AppSelect from "src/components/AppSelect";
import { useIntl } from "react-intl";
import { VisitorsPageViewType } from "src/types/models/dashboards/Analytics";
import IntlMessages from "src/helpers/IntlMessages";

type Props = {
  data: VisitorsPageViewType[];
};
const VisitorPageView = ({ data = [] }: Props) => {
  const handleSelectionType = (data: VisitorsPageViewType) => {
    console.log("data: ", data);
  };
  const { messages } = useIntl();
  return (
    <AppCard
      sxStyle={{ height: 1 }}
      title={<IntlMessages id="dashboard.analytics.visitorsPageViews" />}
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
      <StatGraphs data={data} />
    </AppCard>
  );
};
export default VisitorPageView;
