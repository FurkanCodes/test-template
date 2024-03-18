import React, { useState } from 'react';
import Grid from "@mui/material/Grid";
import { LocalizationProvider } from "@mui/x-date-pickers/LocalizationProvider";
import { AdapterDayjs } from "@mui/x-date-pickers/AdapterDayjs";
import { DemoContainer } from "@mui/x-date-pickers/internals/demo";
import { DatePicker } from "@mui/x-date-pickers/DatePicker";
import { Alert, Box, Button } from "@mui/material";

const FilterComponent = ({ onFilter, rows }) => {
    const [state, setState] = useState({
        openTahsisat: false,
        openEslesmeAl: false,
        openPiyasaFiyati: false,
        openIletimEslesmeleri: false,
        startDate: null,
        endDate: null
    });

    const handleListeleClick = () => {
        if (state.startDate && state.endDate) {
            const filteredData = rows.filter(row => {
                const rowDate = new Date(row.gasname);
                return rowDate >= state.startDate && rowDate <= state.endDate;
            });
            onFilter(filteredData);
        }
    };

    const toggleState = (key) => {
        setState(prevState => ({
            ...prevState,
            [key]: !prevState[key]
        }));
    };

    return (
        <Box sx={{ marginTop: '1.5rem' }}>
            <Grid container spacing={4}>
                <Grid item xs={12} md={3} lg={3}>
                    <LocalizationProvider dateAdapter={AdapterDayjs}>
                        <DemoContainer components={['DatePicker']}>
                            <DatePicker
                                label="Başlangıç Tarihi"
                                value={state.startDate}
                                onChange={date => setState(prevState => ({ ...prevState, startDate: date }))}
                                sx={{
                                    width: '100% !important',
                                    height: '4rem !important',
                                }}
                            />
                        </DemoContainer>
                    </LocalizationProvider>
                </Grid>

                <Grid item xs={12} md={3} lg={3}>
                    <LocalizationProvider dateAdapter={AdapterDayjs}>
                        <DemoContainer components={['DatePicker']}>
                            <DatePicker
                                label="Bitiş Tarihi"
                                value={state.endDate}
                                onChange={date => setState(prevState => ({ ...prevState, endDate: date }))}
                                sx={{
                                    width: '100% !important',
                                    height: '4rem !important',
                                }}
                            />
                        </DemoContainer>
                    </LocalizationProvider>
                </Grid>

                <Grid item xs={12} md={6} lg={3}>
                    <Button
                        variant="contained"
                        sx={{
                            marginTop: '1rem',
                            backgroundColor: '#F04F47',
                            width: '100% !important',
                            borderRadius: '0.5rem !important',
                        }}
                        onClick={handleListeleClick}
                    >
                        Listele
                    </Button>
                </Grid>

                <Grid item xs={12} md={6} lg={3}>
                    <Button
                        variant="contained"
                        sx={{
                            marginTop: '1rem',
                            backgroundColor: '#0A8FDC',
                            width: '100% !important',
                            borderRadius: '0.5rem !important'
                        }}
                        onClick={() => toggleState('openTahsisat')}
                    >
                        Tahsisat Gönder
                    </Button>
                    <Alert
                        onClose={() => toggleState('openTahsisat')}
                        severity="success"
                        sx={{
                            borderRadius: '1rem',
                            marginTop: '1rem',
                            display: state.openTahsisat ? 'block' : 'none',
                            position: 'fixed',
                            bottom: '2rem',
                            right: '2rem',
                            zIndex: 9999,
                        }}
                    >
                        01.01.2024–03.01.2024 günleri için tahsisat gönderimi başarıyla sağlanmıştır.
                    </Alert>
                </Grid>

                <Grid container spacing={3} sx={{ marginTop: '1.2rem' }}>
                    <Grid item xs={12} md={3} lg={3}>
                        <Button
                            variant="contained"
                            sx={{
                                backgroundColor: '#0A8FDC',
                                width: '97% !important',
                                height: '100% !important',
                                borderRadius: '0.5rem !important',
                                fontSize: '0.8rem',
                                whiteSpace: 'nowrap',
                                marginLeft: '1rem'
                            }}
                            onClick={() => toggleState('openEslesmeAl')}
                        >
                            Eşleşme Al
                        </Button>
                        <Alert
                            onClose={() => toggleState('openEslesmeAl')}
                            severity="success"
                            sx={{
                                borderRadius: '1rem',
                                marginTop: '1rem',
                                display: state.openEslesmeAl ? 'block' : 'none',
                                position: 'fixed',
                                bottom: '2rem',
                                right: '2rem',
                                zIndex: 9999,
                            }}
                        >
                            EPİAŞ Tarafından Eşleşme Alınmıştır.
                        </Alert>
                    </Grid>

                    <Grid item xs={12} md={3} lg={3}>
                        <Button
                            variant="contained"
                            sx={{
                                backgroundColor: ' #0A8FDC',
                                width: '97% !important',
                                borderRadius: '0.5rem !important',
                                height: '100% !important',
                                fontSize: '0.8rem',
                                whiteSpace: 'nowrap',
                                marginLeft: '1rem'
                            }}
                            onClick={() => toggleState('openPiyasaFiyati')}
                        >
                            Piyasa Fiyatlarını Getir
                        </Button>
                        <Alert
                            onClose={() => toggleState('openPiyasaFiyati')}
                            severity="success"
                            sx={{
                                borderRadius: '1rem',
                                marginTop: '1rem',
                                display: state.openPiyasaFiyati ? 'block' : 'none',
                                position: 'fixed',
                                bottom: '2rem',
                                right: '2rem',
                                zIndex: 9999,
                            }}
                        >
                            EPİAŞ Tarafından Piyasa Fiyatları Getirilmiştir.
                        </Alert>
                    </Grid>

                    <Grid item xs={12} md={3} lg={3}>
                        <Button
                            variant="contained"
                            sx={{
                                backgroundColor: '#0A8FDC',
                                width: '96% !important',
                                borderRadius: '0.5rem !important',
                                height: '100% !important',
                                fontSize: '0.8rem',
                                whiteSpace: 'nowrap',
                                marginLeft: '0.9rem'
                            }}
                            onClick={() => toggleState('openIletimEslesmeleri')}
                        >
                            İletim Eşleşmelerini Getir
                        </Button>
                        <Alert
                            onClose={() => toggleState('openIletimEslesmeleri')}
                            severity="success"
                            sx={{
                                borderRadius: '1rem',
                                marginTop: '1rem',
                                display: state.openIletimEslesmeleri ? 'block' : 'none',
                                position: 'fixed',
                                bottom: '2rem',
                                right: '2rem',
                                zIndex: 9999,
                            }}
                        >
                            EPİAŞ Tarafından İletim Eşleşmeleri Getirilmiştir.
                        </Alert>
                    </Grid>
                </Grid>
            </Grid>
        </Box>
    );
};

export default FilterComponent;
