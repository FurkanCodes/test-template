import AppComponentHeader from "src/components/AppComponentHeader";
import AppGridContainer from "src/components/AppGridContainer";
import Grid from "@mui/material/Grid";
import AppComponentCard from "src/components/AppComponentCard";
import SimpleMap from "./Simple";
import SimpleMapSource from "./Simple?raw";

const GoogleMap = () => {
  return (
    <>
      <AppComponentHeader
        title="Google Map"
        description="A wrapper around google.maps.Map"
        refUrl="https://developers.google.com/maps/documentation/javascript/3.exp/reference#Map/"
      />

      <AppGridContainer>
        <Grid item xs={12}>
          <AppComponentCard
            title="Simple Map"
            component={SimpleMap}
            source={SimpleMapSource}
          />
        </Grid>
      </AppGridContainer>
    </>
  );
};

export default GoogleMap;
