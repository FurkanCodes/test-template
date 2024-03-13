import BucketMinibarWrapper from "./BucketMinibarWrapper";
import Box from "@mui/material/Box";
import IconButton from "@mui/material/IconButton";
import SearchIcon from "@mui/icons-material/Search";
import AppLngSwitcher from "src/components/AppLngSwitcher";
import AppMessages from "src/components/AppMessages";
import AppNotifications from "src/components/AppNotifications";
import UserInfo from "../UserInfo";
import Logo from "src/assets/icon/logo.svg";
import { allowMultiLanguage } from "src/constants/AppConst";

const BucketMinibar = () => {
  return (
    <BucketMinibarWrapper>
      <Box
        sx={{
          display: "flex",
          flexDirection: "column",
          alignItems: "center",
          py: 1.5,
        }}
      >
        <IconButton
          sx={{
            flexDirection: "column",
            color: "white",
            mb: 2.5,
          }}
          aria-label="show 17 new notifications"
        >
          <img src={Logo} alt="Logo" />
        </IconButton>

        <IconButton
          className="search-icon-btn"
          aria-label="show 17 new notifications"
        >
          <SearchIcon />
        </IconButton>
        {allowMultiLanguage && (
          <AppLngSwitcher iconOnly={true} tooltipPosition="right" />
        )}

        <AppNotifications
          drawerPosition="left"
          tooltipPosition="right"
          sxNotificationContentStyle={{ width: 320 }}
        />
        <AppMessages
          drawerPosition="left"
          tooltipPosition="right"
          sxMessageContentStyle={{ width: 320 }}
        />
      </Box>
      <Box
        sx={{
          mt: "auto",
        }}
      >
        <UserInfo />
      </Box>
    </BucketMinibarWrapper>
  );
};

export default BucketMinibar;
