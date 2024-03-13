import SimpleScatterChart from "./Components/SimpleScatterChart";
// import SimpleScatterChartSource from "raw-loader!./Components/SimpleScatterChart";
import ThreeDimScatterChart from "./Components/ThreeDimScatterChart";
// import ThreeDimScatterChartSource from "raw-loader!./Components/ThreeDimScatterChart";
import Grid from "@mui/material/Grid";

import AppComponentCard from "src/components/AppComponentCard";
import AppComponentHeader from "src/components/AppComponentHeader";
import AppGridContainer from "src/components/AppGridContainer";

const Scatter = () => {
  return (
    <>
      <AppComponentHeader
        title="ScatterChart"
        refUrl="http://recharts.org/en-US/api/ScatterChart"
      />

      <AppGridContainer>
        <Grid item xs={12} lg={6}>
          <AppComponentCard
            title="Simple Scatter Chart"
            component={SimpleScatterChart}
            // source={SimpleScatterChartSource}
          />
        </Grid>
        <Grid item xs={12} lg={6}>
          <AppComponentCard
            title="Three Dim Scatter Chart"
            component={ThreeDimScatterChart}
            // source={ThreeDimScatterChartSource}
          />
        </Grid>
      </AppGridContainer>
    </>
  );
};

export default Scatter;
