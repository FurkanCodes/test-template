// @ts-ignore
import React, {useState} from 'react';
import {Box, Tab, Tabs} from "@mui/material";
import {DataGrid} from "@mui/x-data-grid";

const TableComponent = () => {

    const columnsTabFirst = [
        {field: 'gasname', headerName: 'Gaz Günü', width: 130},
        {field: 'shippername', headerName: 'Taşıtan', width: 130},
        {field: 'pointname', headerName: 'Nokta', width: 130},
        {field: 'periodname', headerName: 'Periyot', width: 130},
        {field: 'directionname', headerName: 'Yönü', width: 130},
        {field: 'amountname', headerName: 'Miktar', width: 130},

    ];

    const columnsTabSecond = [
        {field: 'gasname', headerName: 'Gaz Günü', width: 130},
        {field: 'grfname', headerName: 'GRF', width: 130},
        {field: 'dgafname', headerName: 'DGAF', width: 130},
        {field: 'dgsfname', headerName: 'DGSF', width: 130},
        {field: 'idafname', headerName: 'İDAF', width: 130},
        {field: 'idsfname', headerName: 'İDSF', width: 130},

    ];

    const columnsTabThird = [
        {field: 'gasname', headerName: 'Gaz Günü', width: 130},
        {field: 'bidamountname', headerName: 'Teklif Miktarı', width: 130},
        {field: 'bidpricename', headerName: 'Teklif Fiyatı', width: 130},
        {field: 'matchamountname', headerName: 'Eşleşme Miktarı', width: 130},
        {field: 'matchpricename', headerName: 'Eşleşme Fiyatı', width: 130},
        {field: 'matchamountnamef', headerName: 'Eşleşme Tutarı', width: 130},
        {field: 'directionname', headerName: 'Yönü', width: 130},
        {field: 'justificationcodename', headerName: 'Gerekçe Kodu', width: 130},

    ];

    const rowsTabFirst = [
        {id: 1, gasname: '01/01/2024', shippername: 'Taşıtan A', pointname: 'Nokta A', periodname: 'P1', directionname: 'Pozitif', amountname: '1500'},
        {id: 2, gasname: '01/01/2024', shippername: 'Taşıtan A', pointname: 'Nokta A', periodname: 'P1', directionname: 'Pozitif', amountname: '1500'},
        {id: 3, gasname: '01/01/2024', shippername: 'Taşıtan A', pointname: 'Nokta A', periodname: 'P1', directionname: 'Pozitif', amountname: '1500'},
        {id: 4, gasname: '02/01/2024', shippername: 'Taşıtan A', pointname: 'Nokta A', periodname: 'P1', directionname: 'Pozitif', amountname: '1500'},
        {id: 5, gasname: '03/01/2024', shippername: 'Taşıtan A', pointname: 'Nokta A', periodname: 'P1', directionname: 'Pozitif', amountname: '1500'},
        {id: 6, gasname: '03/01/2024', shippername: 'Taşıtan A', pointname: 'Nokta A', periodname: 'P1', directionname: 'Pozitif', amountname: '1500'},
        {id: 7, gasname: '04/01/2024', shippername: 'Taşıtan A', pointname: 'Nokta A', periodname: 'P1', directionname: 'Pozitif', amountname: '1500'},
        {id: 8, gasname: '04/01/2024', shippername: 'Taşıtan A', pointname: 'Nokta A', periodname: 'P1', directionname: 'Pozitif', amountname: '1500'},
        {id: 9, gasname: '05/01/2024', shippername: 'Taşıtan A', pointname: 'Nokta A', periodname: 'P1', directionname: 'Pozitif', amountname: '1500'},

    ];
    const rowsTabSecond = [
        {id: 1, gasname: '01/01/2024', grfname: 'GRF', dgafname: 'DGAF', dgsfname: 'DGSF', idafname: 'İDAF', idsfname: 'İDSF'},
        {id: 2, gasname: '01/01/2024', grfname: 'GRF', dgafname: 'DGAF', dgsfname: 'DGSF', idafname: 'İDAF', idsfname: 'İDSF'},
        {id: 3, gasname: '02/01/2024', grfname: 'GRF', dgafname: 'DGAF', dgsfname: 'DGSF', idafname: 'İDAF', idsfname: 'İDSF'},
        {id: 4, gasname: '03/01/2024', grfname: 'GRF', dgafname: 'DGAF', dgsfname: 'DGSF', idafname: 'İDAF', idsfname: 'İDSF'},
        {id: 5, gasname: '04/01/2024', grfname: 'GRF', dgafname: 'DGAF', dgsfname: 'DGSF', idafname: 'İDAF', idsfname: 'İDSF'},
        {id: 6, gasname: '05/01/2024', grfname: 'GRF', dgafname: 'DGAF', dgsfname: 'DGSF', idafname: 'İDAF', idsfname: 'İDSF'},
        {id: 7, gasname: '05/01/2024', grfname: 'GRF', dgafname: 'DGAF', dgsfname: 'DGSF', idafname: 'İDAF', idsfname: 'İDSF'},
        {id: 8, gasname: '06/01/2024', grfname: 'GRF', dgafname: 'DGAF', dgsfname: 'DGSF', idafname: 'İDAF', idsfname: 'İDSF'},
        {id: 9, gasname: '06/01/2024', grfname: 'GRF', dgafname: 'DGAF', dgsfname: 'DGSF', idafname: 'İDAF', idsfname: 'İDSF'},

    ];

    const rowsTabThird = [
        {id: 1, gasname: '01/01/2024', bidamountname: '2500', bidpricename: '125.462', matchamountname: '1500', matchpricename: '3000', matchamountnamef: '4.500.451', directionname: 'Alış', justificationcodename: '0012'},
        {id: 2, gasname: '01/01/2024', bidamountname: '2500', bidpricename: '125.462', matchamountname: '1500', matchpricename: '3000', matchamountnamef: '4.500.451', directionname: 'Alış', justificationcodename: '0012'},
        {id: 3, gasname: '01/01/2024', bidamountname: '2500', bidpricename: '125.462', matchamountname: '1500', matchpricename: '3000', matchamountnamef: '4.500.451', directionname: 'Alış', justificationcodename: '0012'},
        {id: 4, gasname: '01/01/2024', bidamountname: '2500', bidpricename: '125.462', matchamountname: '1500', matchpricename: '3000', matchamountnamef: '4.500.451', directionname: 'Alış', justificationcodename: '0012'},
        {id: 5, gasname: '01/01/2024', bidamountname: '2500', bidpricename: '125.462', matchamountname: '1500', matchpricename: '3000', matchamountnamef: '4.500.451', directionname: 'Alış', justificationcodename: '0012'},
        {id: 6, gasname: '01/01/2024', bidamountname: '2500', bidpricename: '125.462', matchamountname: '1500', matchpricename: '3000', matchamountnamef: '4.500.451', directionname: 'Alış', justificationcodename: '0012'},
        {id: 7, gasname: '01/01/2024', bidamountname: '2500', bidpricename: '125.462', matchamountname: '1500', matchpricename: '3000', matchamountnamef: '4.500.451', directionname: 'Alış', justificationcodename: '0012'},
        {id: 8, gasname: '01/01/2024', bidamountname: '2500', bidpricename: '125.462', matchamountname: '1500', matchpricename: '3000', matchamountnamef: '4.500.451', directionname: 'Alış', justificationcodename: '0012'},
        {id: 9, gasname: '01/01/2024', bidamountname: '2500', bidpricename: '125.462', matchamountname: '1500', matchpricename: '3000', matchamountnamef: '4.500.451', directionname: 'Alış', justificationcodename: '0012'},
    ];




    const [value, setValue] = useState('one');

    // @ts-ignore
    const handleChangeTab = (event, newValue) => {
        setValue(newValue);
    };
    // @ts-ignore


    return (
        <>

            <Tabs
                value={value}
                onChange={handleChangeTab}
                textColor="secondary"
                indicatorColor="secondary"
                aria-label="secondary tabs example"
                sx={{marginTop: '3rem'}}
            >
                <Tab value="one" label="Eşleşme Al"
                     sx={{backgroundColor: '#DCDCDC', borderRadius: ' 12px 12px 0 0', color: 'black'}}/>
                <Tab value="two" label="Piyasa Fiyatlarını Getir"
                     sx={{backgroundColor: '#DCDCDC', borderRadius: ' 12px 12px 0 0', color: 'black'}}/>
                <Tab value="three" label="İletim Eşleşmelerini Getir"
                     sx={{backgroundColor: '#DCDCDC', borderRadius: ' 12px 12px 0 0', color: 'black'}}/>
            </Tabs>
            <Box>
            {value === 'one' && (
                <div style={{height: 400, width: '100%'}}>
                    <DataGrid
                        rows={rowsTabFirst}
                        columns={columnsTabFirst}
                        initialState={{
                            pagination: {
                                paginationModel: {page: 0, pageSize: 5},
                            },
                        }}
                        pageSizeOptions={[5, 10]}

                    />
                </div>
            )}
            {value === 'two' && (
                <div style={{height: 400, width: '100%'}}>
                    <DataGrid
                        rows={rowsTabSecond}
                        columns={columnsTabSecond}
                        initialState={{
                            pagination: {
                                paginationModel: {page: 0, pageSize: 5},
                            },
                        }}
                        pageSizeOptions={[5, 10]}

                    />
                </div>

            )}

            {value === 'three' && (
                <div style={{height: 400, width: '100%'}}>
                    <DataGrid
                        rows={rowsTabThird}
                        columns={columnsTabThird}
                        initialState={{
                            pagination: {
                                paginationModel: {page: 0, pageSize: 5},
                            },
                        }}
                        pageSizeOptions={[5, 10]}

                    />
                </div>

            )}
            </Box>
        </>
    )
}
export default TableComponent