import '@mantine/core/styles.css'
import '@mantine/dates/styles.css' //if using mantine date picker features
import 'mantine-react-table/styles.css' //make sure MRT styles were imported in your app root (once)
import {
  MantineReactTable,
  useMantineReactTable,
  type MRT_ColumnDef,
  type MRT_Row,
} from 'mantine-react-table'
import { Box, Button, MantineProvider } from '@mantine/core'
import { IconDownload } from '@tabler/icons-react'
import { mkConfig, generateCsv, download } from 'export-to-csv' //or use your library of choice here
import { data, type Person } from './makeData'
//Import Mantine React Table and its Types

//Import Mantine React Table Translations
import { MRT_Localization_TR } from 'mantine-react-table/locales/tr/index.cjs'
import { notifications } from '@mantine/notifications'
const columns: MRT_ColumnDef<Person>[] = [
  {
    accessorKey: 'firstName',
    header: 'İlk adı',
  },
  {
    accessorKey: 'lastName',
    header: 'Soy isim',
    enableClickToCopy: true,
  },
  {
    accessorKey: 'age',
    header: 'Yaş',
  },
]

const csvConfig = mkConfig({
  fieldSeparator: ',',
  decimalSeparator: '.',
  useKeysAsHeaders: true,
})

const Example = () => {
  const handleExportRows = (rows: MRT_Row<Person>[]) => {
    const rowData = rows.map(row => row.original)
    const csv = generateCsv(csvConfig)(rowData)
    download(csvConfig)(csv)
  }

  const handleExportData = () => {
    const csv = generateCsv(csvConfig)(data)
    download(csvConfig)(csv)
  }

  const table = useMantineReactTable({
    columns,
    data,
    enableRowSelection: true,
    columnFilterDisplayMode: 'popover',
    paginationDisplayMode: 'pages',
    positionToolbarAlertBanner: 'bottom',
    renderTopToolbarCustomActions: ({ table }) => (
      <Box
        style={{
          display: 'flex',
          gap: '16px',
          padding: '8px',
          flexWrap: 'wrap',
        }}
      >
        <Button
          color='red'
          //export all data that is currently in the table (ignore pagination, sorting, filtering, etc.)
          onClick={handleExportData}
          leftSection={<IconDownload />}
          variant='filled'
        >
          Export All Data
        </Button>
        <Button
          color='red'
          disabled={table.getPrePaginationRowModel().rows.length === 0}
          //export all rows, including from the next page, (still respects filtering and sorting)
          onClick={() =>
            handleExportRows(table.getPrePaginationRowModel().rows)
          }
          leftSection={<IconDownload />}
          variant='filled'
        >
          Export All Rows
        </Button>
      </Box>
    ),
  })

  return (
    <MantineProvider theme={{ primaryColor: 'red', primaryShade: 5 }}>
      <MantineReactTable
        columns={columns}
        data={data}
        enableColumnFilterModes
        enableColumnOrdering
        enableEditing
        enableColumnPinning
        enableRowActions
        enableRowSelection
        enableSelectAll={false}
        initialState={{ showColumnFilters: true, showGlobalFilter: true }}
        localization={MRT_Localization_TR}
        mantinePaperProps={{
          shadow: 'lg', //use a larger shadow
          //customize paper styles
          style: {
            width: '85rem',

            marginLeft: '8rem',
          },
        }}
        displayColumnDefOptions={{
          'mrt-row-actions': {
            size: 350, //set custom width

            mantineTableHeadCellProps: {
              align: 'center', //change head cell props
            },
          },

          'mrt-row-numbers': {
            enableColumnOrdering: true, //turn on some features that are usually off

            enableResizing: true,

            mantineTableHeadCellProps: {
              style: {
                fontSize: '1.2rem',
              },
            },
          },

          'mrt-row-select': {
            enableColumnActions: true,

            enableHiding: true,

            size: 100,
          },
        }}
        enableColumnResizing
        enableRowNumbers
        renderRowActions={({ row }) => (
          <Box style={{ display: 'flex', gap: '10px' }}>
            <Button
              onClick={() =>
                notifications.show({
                  title: 'Henüz Eklemedik',
                  message: 'HENÜZ ÇALIŞMIYOR ama ÇALIŞACAK🤥',
                })
              }
            >
              Ekle
            </Button>
            <Button
              onClick={() =>
                notifications.show({
                  title: 'Henüz Eklemedik',
                  message: 'HENÜZ ÇALIŞMIYOR ama ÇALIŞACAK🤥',
                })
              }
            >
              Sil
            </Button>
            <Button
              onClick={() =>
                notifications.show({
                  title: 'Henüz Eklemedik',
                  message: 'HENÜZ ÇALIŞMIYOR ama ÇALIŞACAK🤥',
                  style: { backgroundColor: 'red' },
                })
              }
            >
              Temizle
            </Button>
          </Box>
        )}
      />
    </MantineProvider>
  )
}

export default Example
