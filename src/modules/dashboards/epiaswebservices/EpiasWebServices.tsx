import React, {useState} from 'react';
import ExampleTable from '../../../components/TableComponents';
import FilterComponent from "src/modules/dashboards/epiaswebservices/components/FilterComponent.tsx";
import {Box, Card, Tab, Tabs, Typography} from '@mui/material';

const EpiasWebServices = () => {

    const columnsFirst = [

        {accessorKey: 'gasname', header: 'Gaz Günü', size: 130,},
        {accessorKey: 'shippername', header: 'Taşıtan', size: 130,},
        {accessorKey: 'pointname', header: 'Nokta', size: 130,},
        {accessorKey: 'periodname', header: 'Periyot', size: 130,},
        {accessorKey: 'directionname', header: 'Yönü', size: 130,},
        {accessorKey: 'amountname', header: 'Miktar', size: 130,},
    ];

    const dataFirst = [
        {gasname: '01/01/2024', shippername: 'Taşıtan A', pointname: 'Nokta A', periodname: 'P1', directionname: 'Pozitif', amountname: '1500'},
        {gasname: '01/01/2024', shippername: 'Taşıtan A', pointname: 'Nokta A', periodname: 'P1', directionname: 'Pozitif', amountname: '1500'},
        {gasname: '01/01/2024', shippername: 'Taşıtan A', pointname: 'Nokta A', periodname: 'P1', directionname: 'Pozitif', amountname: '1500'},
        {gasname: '01/01/2024', shippername: 'Taşıtan A', pointname: 'Nokta A', periodname: 'P1', directionname: 'Pozitif', amountname: '1500'},
        {gasname: '01/01/2024', shippername: 'Taşıtan A', pointname: 'Nokta A', periodname: 'P1', directionname: 'Pozitif', amountname: '1500'},
        {gasname: '01/01/2024', shippername: 'Taşıtan A', pointname: 'Nokta A', periodname: 'P1', directionname: 'Pozitif', amountname: '1500'},
        {gasname: '01/01/2024', shippername: 'Taşıtan A', pointname: 'Nokta A', periodname: 'P1', directionname: 'Pozitif', amountname: '1500'},


    ];

    const columnsSecond = [

        {accessorKey: 'gasname', header: 'Gaz Günü', size: 130,},
        {accessorKey: 'grfname', header: 'GRF', size: 130,},
        {accessorKey: 'dgafname', header: 'DGAF', size: 130,},
        {accessorKey: 'dgsfname', header: 'DGSF', size: 130,},
        {accessorKey: 'idafname', header: 'İDAF', size: 130,},
        {accessorKey: 'idsfname', header: 'İDSF', size: 130,},
    ];


    const dataSecond = [
        {gasname: '01/01/2024', grfname: 'GRF', dgafname: 'DGAF', dgsfname: 'DGSF', idafname: 'İDAF', idsfname: 'İDSF'},
        {gasname: '01/01/2024', grfname: 'GRF', dgafname: 'DGAF', dgsfname: 'DGSF', idafname: 'İDAF', idsfname: 'İDSF'},
        {gasname: '01/01/2024', grfname: 'GRF', dgafname: 'DGAF', dgsfname: 'DGSF', idafname: 'İDAF', idsfname: 'İDSF'},
        {gasname: '01/01/2024', grfname: 'GRF', dgafname: 'DGAF', dgsfname: 'DGSF', idafname: 'İDAF', idsfname: 'İDSF'},
        {gasname: '01/01/2024', grfname: 'GRF', dgafname: 'DGAF', dgsfname: 'DGSF', idafname: 'İDAF', idsfname: 'İDSF'},
        {gasname: '01/01/2024', grfname: 'GRF', dgafname: 'DGAF', dgsfname: 'DGSF', idafname: 'İDAF', idsfname: 'İDSF'},
        {gasname: '01/01/2024', grfname: 'GRF', dgafname: 'DGAF', dgsfname: 'DGSF', idafname: 'İDAF', idsfname: 'İDSF'},
        {gasname: '01/01/2024', grfname: 'GRF', dgafname: 'DGAF', dgsfname: 'DGSF', idafname: 'İDAF', idsfname: 'İDSF'},
        {gasname: '01/01/2024', grfname: 'GRF', dgafname: 'DGAF', dgsfname: 'DGSF', idafname: 'İDAF', idsfname: 'İDSF'},


    ];

    const columnsThird = [

        {accessorKey: 'gasname', header: 'Gaz Günü', size: 130,},
        {accessorKey: 'bidamountname', header: 'Taşıtan', size: 130,},
        {accessorKey: 'bidpricename', header: 'Nokta', size: 130,},
        {accessorKey: 'matchamountname', header: 'Periyot', size: 130,},
        {accessorKey: 'matchpricename', header: 'Yönü', size: 130,},
        {accessorKey: 'matchamountnamef', header: 'Miktar', size: 130,},
        {accessorKey: 'directionname', header: 'Miktar', size: 130,},
        {accessorKey: 'justificationcodename', header: 'Miktar', size: 130,},
    ];


    const dataThird = [
        {gasname: '01/01/2024', bidamountname: '2500', bidpricename: '125.462', matchamountname: '1500', matchpricename: '3000', matchamountnamef: '4.500.451', directionname: 'Alış', justificationcodename: '0012'},
        {gasname: '01/01/2024', bidamountname: '2500', bidpricename: '125.462', matchamountname: '1500', matchpricename: '3000', matchamountnamef: '4.500.451', directionname: 'Alış', justificationcodename: '0012'},
        {gasname: '01/01/2024', bidamountname: '2500', bidpricename: '125.462', matchamountname: '1500', matchpricename: '3000', matchamountnamef: '4.500.451', directionname: 'Alış', justificationcodename: '0012'},
        {gasname: '01/01/2024', bidamountname: '2500', bidpricename: '125.462', matchamountname: '1500', matchpricename: '3000', matchamountnamef: '4.500.451', directionname: 'Alış', justificationcodename: '0012'},
        {gasname: '01/01/2024', bidamountname: '2500', bidpricename: '125.462', matchamountname: '1500', matchpricename: '3000', matchamountnamef: '4.500.451', directionname: 'Alış', justificationcodename: '0012'},
        {gasname: '01/01/2024', bidamountname: '2500', bidpricename: '125.462', matchamountname: '1500', matchpricename: '3000', matchamountnamef: '4.500.451', directionname: 'Alış', justificationcodename: '0012'},
        {gasname: '01/01/2024', bidamountname: '2500', bidpricename: '125.462', matchamountname: '1500', matchpricename: '3000', matchamountnamef: '4.500.451', directionname: 'Alış', justificationcodename: '0012'},
        {gasname: '01/01/2024', bidamountname: '2500', bidpricename: '125.462', matchamountname: '1500', matchpricename: '3000', matchamountnamef: '4.500.451', directionname: 'Alış', justificationcodename: '0012'},
        {gasname: '01/01/2024', bidamountname: '2500', bidpricename: '125.462', matchamountname: '1500', matchpricename: '3000', matchamountnamef: '4.500.451', directionname: 'Alış', justificationcodename: '0012'},
        {gasname: '01/01/2024', bidamountname: '2500', bidpricename: '125.462', matchamountname: '1500', matchpricename: '3000', matchamountnamef: '4.500.451', directionname: 'Alış', justificationcodename: '0012'},
        {gasname: '01/01/2024', bidamountname: '2500', bidpricename: '125.462', matchamountname: '1500', matchpricename: '3000', matchamountnamef: '4.500.451', directionname: 'Alış', justificationcodename: '0012'},
        {gasname: '01/01/2024', bidamountname: '2500', bidpricename: '125.462', matchamountname: '1500', matchpricename: '3000', matchamountnamef: '4.500.451', directionname: 'Alış', justificationcodename: '0012'},
        {gasname: '01/01/2024', bidamountname: '2500', bidpricename: '125.462', matchamountname: '1500', matchpricename: '3000', matchamountnamef: '4.500.451', directionname: 'Alış', justificationcodename: '0012'},


    ];
    const [activeTab, setActiveTab] = useState('tab1');

    const handleChangeTab = (event, newValue) => {
        setActiveTab(newValue);
    };

    return (
        <Box>
            <Card sx={{ width: '100%',  height: '100%', padding: '2rem'}}>
            <Typography style={{color: 'red', fontSize: '1.375rem', marginLeft: '0.1rem'}}>EPİAŞ Web Servis</Typography>
            <FilterComponent/>
            <Tabs
                value={activeTab}
                onChange={handleChangeTab}
                textColor="secondary"
                indicatorColor="secondary"
                aria-label="secondary tabs example"
                sx={{marginTop: '3rem'}}
            >
                <Tab value="tab1" label="Eşleşme Al"/>
                <Tab value="tab2" label="Piyasa Fiyatları"/>
                <Tab value="tab3" label="İletim Eşleşmeleri"/>
            </Tabs>
            {activeTab === 'tab1' && <ExampleTable columns={columnsFirst} data={dataFirst}/>}
            {activeTab === 'tab2' && <ExampleTable columns={columnsSecond} data={dataSecond}/>}
            {activeTab === 'tab3' && <ExampleTable columns={columnsThird} data={dataThird}/>}
            </Card>
        </Box>
    );
};

export default EpiasWebServices;
