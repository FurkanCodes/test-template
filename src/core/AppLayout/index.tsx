import { useEffect } from "react";
import { useRoutes } from "react-router-dom";
import AppContentView from "src/components/AppContentView";
import { Layouts } from "src/components/AppLayout";
import { initialUrl } from "src/constants/AppConst";
import { useLayoutContext, useLayoutActionsContext } from "src/context/AppContextProvider/LayoutContextProvider";
import { useSidebarActionsContext } from "src/context/AppContextProvider/SidebarContextProvider";
import generateRoutes from "src/helpers/RouteGenerator";
import { useAuthUser } from "src/hooks/AuthHooks";
import { useUrlSearchParams } from "use-url-search-params";
import { publicStructure, authorizedStructure, anonymousStructure } from "../AppRoutes";
import routesConfig from "../AppRoutes/routeconfig";

const AppLayout = () => {
  const { navStyle } = useLayoutContext();

  const { user, isAuthenticated } = useAuthUser();
  const { updateNavStyle } = useLayoutActionsContext();
  const { updateMenuStyle, setSidebarBgImage } = useSidebarActionsContext();
  const AppLayout = Layouts[navStyle];
  const [params] = useUrlSearchParams();

  const initURL = params?.redirect ? params?.redirect : initialUrl;
  const loginUrl = `/signin?redirect=${window.location.pathname}`;
  const generatedRoutes = generateRoutes({
    isAuthenticated: isAuthenticated,
    userRole: user?.role,
    publicStructure: publicStructure(initURL as string),
    authorizedStructure: authorizedStructure(loginUrl),
    anonymousStructure: anonymousStructure(initURL as string),
  });
  const routes = useRoutes(generatedRoutes);

  useEffect(() => {
    if (params.layout) updateNavStyle(params.layout as string);
    if (params.menuStyle) updateMenuStyle(params.menuStyle as string);
    if (params.sidebarImage) setSidebarBgImage(true);
  }, [params, setSidebarBgImage, updateNavStyle, updateMenuStyle]);

  console.log("AppLayout", initURL, initialUrl, loginUrl, isAuthenticated);
  return (
    <>
 
      {isAuthenticated ? (
        <AppLayout routes={routes} routesConfig={routesConfig} />
      ) : (
        <AppContentView routes={routes} />
      )}
    </>
  );
};

export default AppLayout;
