// @ts-ignore
import * as React from 'react';
import { createTheme, ThemeProvider } from '@mui/material/styles';
import Box from '@mui/material/Box';
import FilterComponent from 'src/modules/dashboards/epiaswebservices/components/FilterComponent.tsx';
import TableComponent from 'src/modules/dashboards/epiaswebservices/components/TableComponent.tsx';
import Typography from "@mui/material/Typography";

const defaultTheme = createTheme();

export default function EpiasWebServices() {
    return (
        <ThemeProvider theme={defaultTheme}>

                    <Box>
                        <Typography style={{ color: 'red', fontSize: '1.375rem', marginLeft: '0.1rem' }}>EPİAŞ Web Servis</Typography>
                        <Box style={{ overflowY: 'auto' }}>
                            <FilterComponent/>
                            <TableComponent/>
                        </Box>
                    </Box>
        </ThemeProvider>
    );
}
