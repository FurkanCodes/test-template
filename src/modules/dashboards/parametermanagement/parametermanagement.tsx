// @ts-ignore
import React from 'react';
import {ThemeProvider} from "@mui/material/styles";
import Box from "@mui/material/Box";
import CssBaseline from "@mui/material/CssBaseline";
import Toolbar from "@mui/material/Toolbar";
import {Typography} from "@mui/material";
import {defaultTheme} from "src/constants/defaultConfig.ts";


const ParameterManagement= () => {
    return(
        <>
            <ThemeProvider theme={defaultTheme}>
                <Box sx={{display: 'flex'}}>
                    <CssBaseline/>

                    <Box
                        component="main"
                        sx={{
                            backgroundColor: (theme) =>
                                theme.palette.mode === 'light'
                                    ? theme.palette.grey[100]
                                    : theme.palette.grey[900],
                            flexGrow: 1,
                            height: '100vh',
                            overflow: 'auto',
                        }}
                    >
                        <Toolbar/>
                        <Box maxWidth="lg" sx={{mt: 3, mb: 3 }} >
                            <Typography style={{color: 'red', fontSize: '1.375rem', marginLeft: '0.1rem'}}>EPİAŞ Web Servis</Typography>

                        </Box>
                    </Box>
                </Box>
            </ThemeProvider>
        </>
    )
}
export default ParameterManagement;