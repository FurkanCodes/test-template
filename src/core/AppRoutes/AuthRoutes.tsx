import React from "react";
const Signin = React.lazy(() => import("src/modules/auth/Signin"));
const Signup = React.lazy(() => import("src/modules/auth/Signup"));
const ForgotPassword = React.lazy(
  () => import("src/modules/auth/ForgetPassword/ForgetPasswordJwtAuth"),
);

export const authRouteConfig = [
  {
    path: "/signin",
    element: <Signin />,
  },
  {
    path: "/signup",
    element: <Signup />,
  },
  {
    path: "/forget-password",
    element: <ForgotPassword />,
  },

];
