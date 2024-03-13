import SocialMediaGraph from "./SocialMediaGraph";
import Box from "@mui/material/Box";
import { Fonts } from "src/constants/AppEnums";
import AppCard from "src/components/AppCard";
import { SocialMediaDaumType } from "src/types/models/dashboards/CRM";
import IntlMessages from "src/helpers/IntlMessages";

type Props = {
  socialMediaData: SocialMediaDaumType[];
};
const SocialMediaAdvertise = ({ socialMediaData = [] }: Props) => {
  return (
    <AppCard
      title={<IntlMessages id="dashboard.socialMedia" />}
      sxStyle={{ height: 1 }}
    >
      <SocialMediaGraph socialMediaData={socialMediaData} />
      <Box
        sx={{
          mb: 1,
          mx: { xs: -2, xl: -3 },
          display: "flex",
          justifyContent: "space-between",
        }}
      >
        {socialMediaData.map((item) => {
          return (
            <Box
              sx={{
                px: { xs: 2, xl: 3 },
              }}
              key={item.id}
            >
              <Box
                component="h4"
                sx={{
                  mb: 1,
                  fontWeight: Fonts.MEDIUM,
                  fontSize: 18,
                  color: item.color,
                }}
              >
                {item.revenue}
              </Box>
              <Box
                sx={{
                  position: "relative",
                }}
              >
                <Box
                  component="p"
                  sx={{
                    color: "text.secondary",
                    fontSize: 14,
                    textTransform: "capitalize",
                  }}
                >
                  {item.name}
                </Box>
                <Box
                  component="span"
                  sx={{ color: item.changeColor, fontSize: 13 }}
                >
                  {item.change}
                </Box>
              </Box>
            </Box>
          );
        })}
      </Box>
    </AppCard>
  );
};

export default SocialMediaAdvertise;
