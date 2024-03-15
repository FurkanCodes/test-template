import React from "react";
import { RoutePermittedRole } from "src/constants/AppEnums";

const HealthCare = React.lazy(
  () => import("src/modules/dashboards/HealthCare"),
);
const ECommerce = React.lazy(
  () => import("src/modules/dashboards/ECommerce"),
);
const CRM = React.lazy(() => import("src/modules/dashboards/CRM"));
const Crypto = React.lazy(() => import("src/modules/dashboards/Crypto"));
const Analytics = React.lazy(
  () => import("src/modules/dashboards/Analytics"),
);

const SigninAuth = React.lazy(
  () => import("src/features/Auth/Signin/SigninAuth"),
);

// @ts-ignore
const EpiasWebServices = React.lazy(() => import("src/modules/dashboards/epiaswebservices/EpiasWebServices.tsx"));
const ParameterManagement = React.lazy(() => import("src/modules/dashboards/parametermanagement/ParameterManagement.tsx"));

export const dashBoardConfigs = [
  {
    permittedRole: [RoutePermittedRole.User, RoutePermittedRole.Admin],
    path: "/dashboards/etalep",
    element: <Crypto />,
  },

  {
    permittedRole: RoutePermittedRole.User,
    path: "/signinroute",
    element: <SigninAuth />,
  },
  {
    permittedRole: RoutePermittedRole.User,
    path: "/dashboards/analytics",
    element: <Analytics />,
  },
  {
    permittedRole: RoutePermittedRole.User,
    path: "/dashboards/e-commerce",
    element: <ECommerce />,
  },
  {
    permittedRole: RoutePermittedRole.User,
    path: "/dashboards/crm",
    element: <CRM />,
  },
  {
    permittedRole: RoutePermittedRole.User,
    path: "/dashboards/health-care",
    element: <HealthCare />,
  },
  {
    permittedRole: RoutePermittedRole.User,
    path: "/dashboards/epiaswebservices",
    element: <EpiasWebServices />,
  },
  {
    permittedRole: RoutePermittedRole.User,
    path: "/dashboards/parametermanagement",
    element: <ParameterManagement />,
  },
  {
    permittedRole: RoutePermittedRole.User,
    path: "/dashboards/signinauth",
    element: <SigninAuth />,
  },
];
