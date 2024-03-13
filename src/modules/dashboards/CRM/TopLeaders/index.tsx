import AppCard from "src/components/AppCard";
import TopLeadersTable from "./TopLeadersTable";
import { TopLeaderType } from "src/types/models/dashboards/CRM";
import IntlMessages from "src/helpers/IntlMessages";

type Props = {
  topLeaders: TopLeaderType[];
};
const TopLeaders = ({ topLeaders }: Props) => {
  return (
    <AppCard
      contentStyle={{ paddingLeft: 0, paddingRight: 0 }}
      title={<IntlMessages id="dashboard.crm.topLeaders" />}
      action={<IntlMessages id="common.viewAll" />}
    >
      <TopLeadersTable topLeaders={topLeaders} />
    </AppCard>
  );
};

export default TopLeaders;
