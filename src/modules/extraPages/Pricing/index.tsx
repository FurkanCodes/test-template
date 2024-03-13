import { Grid } from "@mui/material";
import AppGridContainer from "src/components/AppGridContainer";

import PackageOne from "./PackageOne";
import PackageFour from "./PackageFour";
import PackageThree from "./PackageThree";
import PackageTwo from "./PackageTwo";

import { pricingData } from "src/mockapi/fakedb/extraPages";

const PricingListing = () => {
  return (
    <AppGridContainer>
      <Grid item xs={12}>
        <PackageOne pricing={pricingData.pricingOne} />
      </Grid>
      <Grid item xs={12}>
        <PackageTwo pricing={pricingData.pricingTwo} />
      </Grid>
      <Grid item xs={12}>
        <PackageThree pricing={pricingData.pricingFour} />
      </Grid>
      <Grid item xs={12}>
        <PackageFour pricing={pricingData.pricingFour} />
      </Grid>
    </AppGridContainer>
  );
};

export default PricingListing;
