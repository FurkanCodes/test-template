// @ts-ignore
import {React, useState} from 'react';
import Grid from "@mui/material/Grid";
import {LocalizationProvider} from "@mui/x-date-pickers/LocalizationProvider";
import {AdapterDayjs} from "@mui/x-date-pickers/AdapterDayjs";
import {DemoContainer} from "@mui/x-date-pickers/internals/demo";
import {DatePicker} from "@mui/x-date-pickers/DatePicker";
import {Box, Button, Snackbar} from "@mui/material";
import SnackbarContent from "@mui/material/SnackbarContent";

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
            <Grid container spacing={3}>
                {/* Başlangıç Tarihi */}
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

                {/* Bitiş Tarihi */}
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

                {/* Listele Butonu */}
                <Grid item xs={12} md={3} lg={3}>
                    <Button
                        variant="contained"
                        sx={{
                            marginTop: '1rem',
                            backgroundColor: '#F04F47',
                            width: '80% !important',
                            borderRadius: '0.5rem !important',
                            marginLeft: '2rem',
                        }}
                        onClick={handleListeleClick}
                    >
                        Listele
                    </Button>
                </Grid>

                {/* Tahsisat Gönder Butonu */}
                <Grid item xs={12} md={3} lg={3}>
                    <Button
                        variant="contained"
                        sx={{
                            marginTop: '1rem',
                            backgroundColor: '#0A8FDC',
                            width: '80% !important',
                            borderRadius: '0.5rem !important'
                        }}
                        onClick={handleClickTahsisat}
                    >
                        Tahsisat Gönder
                    </Button>
                    {/* Snackbar */}
                    <Snackbar
                        anchorOrigin={{vertical: 'bottom', horizontal: 'right'}}
                        autoHideDuration={5000}
                        open={openTahsisat}
                        onClose={handleCloseTahsisat}
                    >
                        <SnackbarContent
                            sx={{
                                backgroundColor: '#11C15B',
                                color: 'white',
                                borderRadius: '4rem'
                            }}
                            message="01.01.2024–03.01.2024 günleri için tahsisat gönderimi başarıyla sağlanmıştır."
                        />
                    </Snackbar>
                </Grid>

                <Grid container spacing={3}sx={{marginTop: '2rem'}}   >
                    {/* Başlangıç Tarihi */}
                    <Grid item xs={12} md={3} lg={3}>
                        <Button
                            variant="contained"
                            sx={{
                                backgroundColor: '#0A8FDC',
                                width: '100% !important',
                                height: '100% !important',
                                borderRadius: '0.5rem !important',
                                marginLeft: '2rem',
                                fontSize: '0.8rem',
                                whiteSpace: 'nowrap'
                            }}
                            onClick={handleClickEslesmeAl}

                        >
                            Eşleşme Al
                        </Button>
                        <Snackbar
                            anchorOrigin={{vertical: 'bottom', horizontal: 'right'}}
                            autoHideDuration={5000}
                            open={openEslesmeAl}
                            onClose={handleCloseEslesmeAl}
                        >
                            <SnackbarContent
                                sx={{
                                    backgroundColor: '#11C15B',
                                    color: 'white',
                                    borderRadius: '4rem'
                                }}
                                message="EPİAŞ ile Eşleşme Sağlanmıştır."
                            />
                        </Snackbar>
                    </Grid>

                    {/* Bitiş Tarihi */}
                    <Grid item xs={12} md={3} lg={3}>
                        <Button
                            variant="contained"
                            sx={{
                                backgroundColor: ' #0A8FDC',
                                width: '100% !important',
                                borderRadius: '0.5rem !important',
                                marginLeft: '2rem',
                                height: '100% !important',
                                fontSize: '0.8rem',
                                whiteSpace: 'nowrap'
                            }}
                            onClick={handleClickPiyasaFiyati}

                        >
                            Piyasa Fiyatlarını Getir
                        </Button>
                        <Snackbar
                            anchorOrigin={{vertical: 'bottom', horizontal: 'right'}}
                            autoHideDuration={5000}
                            open={openPiyasaFiyati}
                            onClose={handleClosePiyasaFiyati}
                        >
                            <SnackbarContent
                                sx={{
                                    backgroundColor: '#11C15B',
                                    color: 'white',
                                    borderRadius: '4rem'
                                }}
                                message="Piyasa Fiyatları Getirilmiştir"
                            />
                        </Snackbar>
                    </Grid>


                    <Grid item xs={12} md={3} lg={3}>
                        <Button
                            variant="contained"
                            sx={{
                                backgroundColor: '#0A8FDC',
                                width: '100% !important',
                                borderRadius: '0.5rem !important',
                                marginLeft: '2rem',
                                height: '100% !important',
                                fontSize: '0.8rem',
                                whiteSpace: 'nowrap'

                        }}
                            onClick={handleClickiletimEslesmeleri}

                        >
                            İletim Eşleşmelerini Getir
                        </Button>
                        <Snackbar
                            anchorOrigin={{vertical: 'bottom', horizontal: 'right'}}
                            autoHideDuration={5000}
                            open={openiletimEslesmeleri}
                            onClose={handleCloseiletimEslesmeleri}
                        >
                            <SnackbarContent
                                sx={{
                                    backgroundColor: '#11C15B',
                                    color: 'white',
                                    borderRadius: '4rem'
                                }}
                                message="İletim Eşleşmeleri Getirilmiştir"
                            />
                        </Snackbar>

                    </Grid>
                </Grid>

                </Grid>
        </Box>
    );
};

export default FilterComponent;
