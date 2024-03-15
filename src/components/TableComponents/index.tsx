// @ts-ignore
import React from 'react';
import { MaterialReactTable, useMaterialReactTable, type MRT_ColumnDef } from 'material-react-table';

type TableProps = {
    columns: MRT_ColumnDef<any>[],
    data: any[]
}

const TableComponent = ({ columns, data }: TableProps) => {
    const table = useMaterialReactTable({
        columns,
        data,
    });

    return <MaterialReactTable table={table} />;
};

export default TableComponent;
