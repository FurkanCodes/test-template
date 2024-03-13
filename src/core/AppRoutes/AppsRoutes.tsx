import React from "react";
import { Navigate } from "react-router-dom";
import { RoutePermittedRole } from "src/constants/AppEnums";


export const appsConfig = [
  // {
  //   permittedRole: RoutePermittedRole.User,
  //   path: [
  //     "/apps/mail/label/:label",
  //     "/apps/mail/label/:label/:id",
  //     "/apps/mail/:folder",
  //     "/apps/mail/:folder/:id",
  //   ],
  //   element: <Mail />,
  // },
  {
    permittedRole: RoutePermittedRole.User,
    path: "/apps/mail",
    element: <Navigate to="/apps/mail/inbox" />,
  },

  {
    permittedRole: RoutePermittedRole.User,
    path: "/apps/todo",
    element: <Navigate to="/apps/todo/all" />,
  },
  {
    permittedRole: RoutePermittedRole.User,
    path: "/apps/calender",
    element: <Navigate to="/apps/calender/all" />,
  },
  

];
