import AudienceChart from "./AudienceChart";
import { Box } from "@mui/material";
import { useIntl } from "react-intl";
import AudienceCell from "./AudienceCell";
import AppCard from "src/components/AppCard";
import AppList from "src/components/AppList";
import { AgeOfAudienceType } from "src/types/models/dashboards/Ecommerce";

type Props = {
  audienceData: AgeOfAudienceType[];
};

const AgeOfAudience = ({ audienceData }: Props) => {
  const { messages } = useIntl();

  return (
    <AppCard
      sxStyle={{ height: 1 }}
      title={messages["dashboard.eCommerce.ageAudience"] as string}
      contentStyle={{
        paddingLeft: 0,
        paddingRight: 0,
        display: "flex",
        flexDirection: "column",
        justifyContent: "center",
      }}
    >
      <Box
        sx={{
          padding: "8px 12px",
        }}
      >
        <AudienceChart audienceData={audienceData} />
      </Box>

      <AppList
        data={audienceData}
        renderRow={(audience) => (
          <AudienceCell key={"audience-" + audience.id} audience={audience} />
        )}
      />
    </AppCard>
  );
};

export default AgeOfAudience;