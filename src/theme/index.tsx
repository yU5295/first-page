import PropTypes from "prop-types";
import { CssBaseline } from "@mui/material";
import {
  ThemeProvider as MUIThemeProvider,
  createTheme,
  StyledEngineProvider,
} from "@mui/material/styles";
 
ThemeProvider.propTypes = {
  children: PropTypes.node,
};

declare module "@mui/material/styles" {
    interface TypeBackground {
      footer?: string;
      transparent?: string;
    }
  }
  

export default function ThemeProvider({
  children,
}: {
  children: React.ReactNode;
}) {
    const theme = createTheme({
        palette: {
          mode: "dark",
          primary: {
            main: "#707AED",
            light:"#21BEE2",
            dark:"#6A9FEF",
          },
          secondary: {
            main: "#DB1DFB",
            light: "#816AEF",
            dark: "#4D69CD",
          },
          background: {
            default: "#231D24",
            footer: "#383039",
            transparent: "transparent",
          },
        },
      });
    
 
  return (
    <StyledEngineProvider injectFirst>
      <MUIThemeProvider theme={theme}>
        <CssBaseline />
        {children}
      </MUIThemeProvider>
    </StyledEngineProvider>
  );
}
