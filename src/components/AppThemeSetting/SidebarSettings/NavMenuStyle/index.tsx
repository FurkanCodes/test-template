import { Box } from "@mui/material";
import AppSelectedIcon from "src/components/AppSelectedIcon";
import { useSidebarContext, useSidebarActionsContext } from "src/context/AppContextProvider/SidebarContextProvider";
import IntlMessages from "src/helpers/IntlMessages";
import { menuStyles, MenuStyleType } from "src/mockapi/fakedb/navigationStyle";

const NavMenuStyle = () => {
  const { menuStyle } = useSidebarContext();

  const { updateMenuStyle } = useSidebarActionsContext();
  const onMenuStyleChange = (menuStyle: string) => {
    updateMenuStyle(menuStyle);
  };

  return (
    <>
      <Box component="h4" sx={{ mb: 3 }}>
        <IntlMessages id="customizer.sidebarMenuStyle" />
      </Box>
      <Box
        sx={{
          display: "flex",
          alignItems: "center",
          flexWrap: "wrap",
          marginLeft: "-10px",
          marginRight: "-10px",
        }}
      >
        {menuStyles.map((menu: MenuStyleType) => {
          return (
            <Box
              sx={{
                paddingLeft: 2.5,
                paddingRight: 2.5,
                marginBottom: 5,
              }}
              key={menu.id}
            >
              <Box
                sx={{
                  position: "relative",
                  cursor: "pointer",
                }}
                onClick={() => onMenuStyleChange(menu.alias)}
              >
                <img src={menu.image} alt="nav" />
                {menuStyle === menu.alias ? <AppSelectedIcon /> : null}
              </Box>
            </Box>
          );
        })}
      </Box>
    </>
  );
};

export default NavMenuStyle;