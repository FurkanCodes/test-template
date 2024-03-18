import React from 'react';
import {MaterialReactTable, MRT_ColumnDef, useMaterialReactTable} from 'material-react-table';
import { Card, CardContent } from "@mui/material";

type TableProps= {
    columns: MRT_ColumnDef<string>[],
    data: string[]
}

const TableComponent = ({ columns, data }: TableProps) => {
    const table = useMaterialReactTable({
        columns,
        data,
    });

    return (
        <Card>
            <CardContent>
                <MaterialReactTable table={table} />
            </CardContent>
        </Card>
    );
};

export default TableComponent;
