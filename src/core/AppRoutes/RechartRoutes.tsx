import { AreaChart, BarChart, ComposedChart, LineChart, PieChart, Treemap, Scatter, FunnelChart } from "recharts";
import { RoutePermittedRole } from "src/constants/AppEnums";
import { Radial } from "src/modules/thirdParty/recharts";

export const rechartsConfigs = [
  {
    permittedRole: RoutePermittedRole.User,
    path: "/recharts/area",
    element: <AreaChart />,
  },
  {
    permittedRole: RoutePermittedRole.User,
    path: "/recharts/bar",
    element: <BarChart />,
  },
  {
    permittedRole: RoutePermittedRole.User,
    path: "/recharts/composed",
    element: <ComposedChart />,
  },
  {
    permittedRole: RoutePermittedRole.User,
    path: "/recharts/line",
    element: <LineChart />,
  },
  {
    permittedRole: RoutePermittedRole.User,
    path: "/recharts/pie",
    element: <PieChart />,
  },
  // {
  //   permittedRole: RoutePermittedRole.User,
  //   path: "/recharts/radar",
  //   element: <Radar />,
  // },
  {
    permittedRole: RoutePermittedRole.User,
    path: "/recharts/radial",
    element: <Radial />,
  },
  {
    permittedRole: RoutePermittedRole.User,
    path: "/recharts/treemap",
    element: <Treemap />,
  },
  {
    permittedRole: RoutePermittedRole.User,
    path: "/recharts/scatter",
    element: <Scatter />,
  },
  {
    permittedRole: RoutePermittedRole.User,
    path: "/recharts/funnel",
    element: <FunnelChart />,
  },
];
