import AppCard from "src/components/AppCard";
import AppList from "src/components/AppList";
import RecentActivityCell from "./RecentActivityCell";
import AppScrollbar from "src/components/AppScrollbar";
import AppMenu from "src/components/AppMenu";
import { RecentActivityType } from "src/types/models/dashboards/CRM";
import IntlMessages from "src/helpers/IntlMessages";

type Props = {
  data: RecentActivityType[];
};
const RecentActivities = ({ data }: Props) => {
  return (
    <AppCard
      sxStyle={{ height: 1 }}
      contentStyle={{ paddingLeft: 0, paddingRight: 0 }}
      title={<IntlMessages id="dashboard.crm.recentActivities" />}
      action={<AppMenu />}
    >
      <AppScrollbar
        sx={{
          height: 640,
        }}
      >
        <AppList
          data={data}
          renderRow={(activity) => (
            <RecentActivityCell key={activity.id} activity={activity} />
          )}
        />
      </AppScrollbar>
    </AppCard>
  );
};

export default RecentActivities;
