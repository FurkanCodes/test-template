import Box from "@mui/material/Box";
import { Button } from "@mui/material";
import { useLayoutContext } from "src/context/AppContextProvider/LayoutContextProvider";
import Typography from "@mui/material/Typography";
import FooterWrapper from "./FooterWrapper";

const AppFooter = () => {
  const { footer, footerType, navStyle } = useLayoutContext();

  return (
    <>
      {footer &&
      footerType === "fluid" &&
      navStyle !== "h-default" &&
      navStyle !== "hor-light-nav" &&
      navStyle !== "hor-dark-layout" ? (
        <FooterWrapper className="footer">
          <div className="footerContainer">
            <Typography>Copy right src 2021</Typography>
            <Box sx={{ ml: "auto" }}>
              <Button
                sx={{
                  px: 5,
                }}
                color="primary"
              >
                Buy Now
              </Button>
            </Box>
          </div>
        </FooterWrapper>
      ) : null}
    </>
  );
};

export default AppFooter;