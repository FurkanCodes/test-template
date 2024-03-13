import AppCard from "src/components/AppCard";
import StatGraphs from "./StatGraphs";
import { AtcStaticType } from "src/types/models/dashboards/Crypto";
import IntlMessages from "src/helpers/IntlMessages";

type Props = {
  data: AtcStaticType[];
};
const ATCStatics = ({ data }: Props) => {
  return (
    <AppCard title={<IntlMessages id="dashboard.crypto.atcStatics" />}>
      <StatGraphs data={data} />
    </AppCard>
  );
};

export default ATCStatics;
