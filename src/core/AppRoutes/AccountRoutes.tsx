import { RoutePermittedRole } from "src/constants/AppEnums";
import Account from "src/modules/account/MyProfile";

export const accountPagesConfigs = [
  {
    permittedRole: RoutePermittedRole.User,
    path: "/my-account",
    element: <Account />,
  },
];
