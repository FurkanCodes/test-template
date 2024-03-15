// @ts-ignore
import {React, useState} from 'react';
import Grid from "@mui/material/Grid";
import {LocalizationProvider} from "@mui/x-date-pickers/LocalizationProvider";
import {AdapterDayjs} from "@mui/x-date-pickers/AdapterDayjs";
import {DemoContainer} from "@mui/x-date-pickers/internals/demo";
import {DatePicker} from "@mui/x-date-pickers/DatePicker";
import {Alert, Box, Button} from "@mui/material";

const FilterComponent = (onFilter, rows) => {
    const [openTahsisat, setOpenTahsisat] = useState(false);
    const [openEslesmeAl, setOpenEslesmeAl] = useState(false);
    const [openPiyasaFiyati, setOpenPiyasaFiyati] = useState(false);
    const [openiletimEslesmeleri, setOpeniletimEslesmeleri] = useState(false);
    const [startDate, setStartDate] = useState(null);
    const [endDate, setEndDate] = useState(null);

    const handleClickTahsisat = () => {
        setOpenTahsisat(true);
    };

    const handleCloseTahsisat = () => {
        setOpenTahsisat(false);
    };
    const handleClickEslesmeAl = () => {
        setOpenEslesmeAl(true);
    };

    const handleCloseEslesmeAl = () => {
        setOpenEslesmeAl(false);
    };
    const handleClickPiyasaFiyati = () => {
        setOpenPiyasaFiyati(true);
    };

    const handleClosePiyasaFiyati = () => {
        setOpenPiyasaFiyati(false);
    };
    const handleClickiletimEslesmeleri = () => {
        setOpeniletimEslesmeleri(true);
    };

    const handleCloseiletimEslesmeleri = () => {
        setOpeniletimEslesmeleri(false);
    };

    const handleListeleClick = () => {
        if (startDate && endDate) {
            const filteredData = rows.filter(row => {
                const rowDate = new Date(row.gasname);
                return rowDate >= startDate && rowDate <= endDate;
            });
            onFilter(filteredData);
        }
    };


    return (
        <Box sx={{marginTop: '1.5rem'}}>
            <Grid container spacing={4}>
                <Grid item xs={12} md={3} lg={3}>
                    <LocalizationProvider dateAdapter={AdapterDayjs}>
                        <DemoContainer components={['DatePicker']}>
                            <DatePicker
                                label="Başlangıç Tarihi"
                                value={startDate}
                                onChange={date => setStartDate(date)}
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
                                value={endDate}
                                onChange={date => setEndDate(date)}
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
                        onClick={handleClickTahsisat}
                    >
                        Tahsisat Gönder
                    </Button>
                    <Alert
                        onClose={handleCloseTahsisat}
                        severity="success"
                        sx={{
                            borderRadius: '1rem',
                            marginTop: '1rem',
                            display: openTahsisat ? 'block' : 'none',
                            position: 'fixed',
                            bottom: '2rem',
                            right: '2rem',
                            zIndex: 9999,
                        }}
                    >
                        01.01.2024–03.01.2024 günleri için tahsisat gönderimi başarıyla sağlanmıştır.
                    </Alert>
                </Grid>

                <Grid container spacing={3} sx={{marginTop: '1.2rem'}}>
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
                            onClick={handleClickEslesmeAl}

                        >
                            Eşleşme Al
                        </Button>
                        <Alert
                            onClose={handleCloseEslesmeAl}
                            severity="success"
                            sx={{
                                borderRadius: '1rem',
                                marginTop: '1rem',
                                display: openEslesmeAl ? 'block' : 'none',
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
                            onClick={handleClickPiyasaFiyati}

                        >
                            Piyasa Fiyatlarını Getir
                        </Button>
                        <Alert
                            onClose={handleClosePiyasaFiyati}
                            severity="success"
                            sx={{
                                borderRadius: '1rem',
                                marginTop: '1rem',
                                display: openPiyasaFiyati ? 'block' : 'none',
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
                            onClick={handleClickiletimEslesmeleri}

                        >
                            İletim Eşleşmelerini Getir
                        </Button>
                        <Alert
                            onClose={handleCloseiletimEslesmeleri}
                            severity="success"
                            sx={{
                                borderRadius: '1rem',
                                marginTop: '1rem',
                                display: openiletimEslesmeleri ? 'block' : 'none',
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
