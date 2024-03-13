//
import SimpleFunnel from "./Components/SimpleFunnel";
// import SimpleFunnelSource from "raw-loader!./Components/SimpleFunnel";
import Grid from "@mui/material/Grid";

import AppComponentCard from "src/components/AppComponentCard";
import AppComponentHeader from "src/components/AppComponentHeader";
import AppGridContainer from "src/components/AppGridContainer";

const FunnelChart = () => {
  return (
    <>
      <AppComponentHeader
        title="Funnel Chart"
        refUrl="http://recharts.org/en-US/api/FunnelChart/"
      />

      <AppGridContainer>
        <Grid item xs={12} lg={12}>
          <AppComponentCard
            title="Simple FunnelChart"
            component={SimpleFunnel}
            // source={SimpleFunnelSource}
          />
        </Grid>
      </AppGridContainer>
    </>
  );
};

export default FunnelChart;
