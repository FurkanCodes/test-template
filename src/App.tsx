import { BrowserRouter } from "react-router-dom";
import CssBaseline from "@mui/material/CssBaseline";

import "src/mockapi";
import "./styles/index.css";
import AuthRoutes from "src/components/AuthRoutes";
import AppContextProvider from "src/context/AppContextProvider";
import InfoViewContextProvider from "src/context/AppContextProvider/InfoViewContextProvider";
import AppLocaleProvider from "src/context/AppLocaleProvider";
import AppStyleProvider from "src/context/AppStyleProvider";
import AppThemeProvider from "src/context/AppThemeProvider";
import AppAuthProvider from "src/core/AppAuthProvider";
import AppLayout from "src/core/AppLayout";


function App() {
  return (
    <>
      <AppContextProvider>
        <AppThemeProvider>
          <AppStyleProvider>
            <AppLocaleProvider>
              <BrowserRouter>
                <InfoViewContextProvider>
                  <AppAuthProvider>
                    <AuthRoutes>
                      <CssBaseline />
                      <AppLayout />
                    </AuthRoutes>
                  </AppAuthProvider>
                </InfoViewContextProvider>
              </BrowserRouter>
            </AppLocaleProvider>
          </AppStyleProvider>
        </AppThemeProvider>
      </AppContextProvider>
    </>
  );
}

export default App;
