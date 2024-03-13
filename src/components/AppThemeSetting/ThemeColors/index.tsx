import Box from "@mui/material/Box";
import { CustomizerItemWrapper } from "../index.style";
import AppGrid from "src/components/AppGrid";
import themeColorSets from "src/constants/ColorSets";
import { useThemeContext, useThemeActionsContext } from "src/context/AppContextProvider/ThemeContextProvider";
import IntlMessages from "src/helpers/IntlMessages";
import CustomColorCell from "../CustomColorCell";


export type ThemeColorsProps = {
  mode: string;
  primary: {
    main: string;
  };
  secondary: {
    main: string;
  };
  background: {
    paper: string;
    default: string;
  };
  text: {
    primary: string;
    secondary: string;
    disabled: string;
  };
  title: string;
};

const ThemeColors = () => {
  const { theme } = useThemeContext();

  const { updateTheme } = useThemeActionsContext();

  const updateThemeColors = (colorSet: ThemeColorsProps) => {
    theme.palette.primary.main = colorSet.primary.main;
    theme.palette.secondary.main = colorSet.secondary.main;
    theme.palette.background = colorSet.background;
    theme.palette.mode = colorSet.mode;
    theme.palette.text = colorSet.text;
    updateTheme({ ...theme });
  };
  return (
    <CustomizerItemWrapper>
      <Box component="h4" sx={{ mb: 2 }}>
        <IntlMessages id="customizer.themeColors" />
      </Box>
      <Box mt={4}>
        <AppGrid
          data={themeColorSets}
          itemPadding={5}
          responsive={{
            xs: 1,
            sm: 2,
          }}
          renderRow={(colorSet, index) => (
            <CustomColorCell
              key={index}
              updateThemeColors={updateThemeColors}
              themeColorSet={colorSet}
            />
          )}
        />
      </Box>
    </CustomizerItemWrapper>
  );
};

export default ThemeColors;
