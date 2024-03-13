/* eslint-disable @typescript-eslint/no-unused-vars */
import Card from '@mui/material/Card'
import Box from '@mui/material/Box'

import AnnouncementWrapper from './AnnouncementTabs'
import { Divider, Typography } from '@mui/material'
import { Link } from 'react-router-dom'
import { DataGrid, GridColDef, GridValueGetterParams } from '@mui/x-data-grid'

type AuthWrapperProps = {
  children: any
}

const columns: GridColDef[] = [
  { field: 'id', headerName: 'ID', width: 90 },
  {
    field: 'firstName',
    headerName: 'First name',
    width: 150,
    editable: true,
  },
  {
    field: 'lastName',
    headerName: 'Last name',
    width: 150,
    editable: true,
  },
]

const rows = [
  { id: 1, firstName: 'Referans Stok Seviyesi', lastName: '12312313123' },
  { id: 2, firstName: 'İletişim Şebeke Stoğu', lastName: '12312312312' },
  { id: 3, firstName: 'Jaime', age: 31 },
  { id: 4, firstName: 'Arya', age: 11 },
  { id: 5, firstName: 'Daenerys', age: null },
  { id: 6, firstName: null, age: 150 },
]

// Define a custom tab component
const TabContent = ({ label, children }) => (
  <div>
    <h2>{label}</h2>
    <p>{children}</p>
  </div>
)

const AuthWrapper: React.FC<AuthWrapperProps> = ({ children }) => {
  return (
    <Box
      sx={{
        flex: 1,
        height: '100%',
        display: 'flex',
        flexDirection: 'column',
        justifyContent: 'center',
        marginBottom: '15rem',
        alignItems: 'center',
      }}
    >
      <Box
        component='img'
        sx={{
          width: '50%',
          paddingBottom: 10,
          maxWidth: '10rem',
        }}
        alt='LOGO'
        src='https://upload.wikimedia.org/wikipedia/tr/b/be/Botaslogo.png?20200221205653'
      />

      <Box
        sx={{
          width: { xs: '100%', sm: '50%', lg: '80%' },

          display: 'flex',
          justifyContent: 'space-evenly',
          gap: '20rem',
        }}
      >
        {/* Login Start */}
        <Card
          sx={{
            height: '100%',
            minHeight: { xs: 320, sm: 450 },
            width: { xs: '100%', sm: '40%', lg: '100%' },
            backgroundColor: 'hsla(360, 100%, 100%, 0.4)',
            display: 'flex',
          }}
        >
          {/* Announcement Start */}

          <Box
            sx={{
              width: { xs: '50%', sm: '60%', lg: '100%' },
              position: 'relative',
              padding: { xs: 1, lg: 5 },
              display: { xs: 'none', sm: 'flex' },
              alignItems: { sm: 'center' },
              flexDirection: { sm: 'column' },
              borderRadius: '10px',
              overflow: 'auto',
              height: '36rem', // Set a fixed height

              fontSize: 14,
            }}
          >
            <AnnouncementWrapper>
              <TabContent label='Genel Bilgiler'>
                <Divider
                  textAlign='left'
                  sx={{ paddingBottom: '0.6rem' }}
                  component={'h1'}
                >
                  {' '}
                  18 OCAK 2024 Güncel Verileri
                </Divider>

                <DataGrid
                  rows={rows}
                  columns={columns}
                  hideFooter
                  style={{ height: '400px' }}
                />
              </TabContent>
              <TabContent label='Duyurular'>Duyurular</TabContent>
              <TabContent label='Şeffaflık'>Şeffaflık</TabContent>
            </AnnouncementWrapper>
          </Box>
          {/* Announcement Ends */}
          <Box
            sx={{
              width: '70%',
              padding: { xs: 5, lg: 10 },
              display: 'flex',
              flexDirection: 'column',
              justifyContent: 'center',
              bgcolor: 'hsla(360, 100%, 100%, 0.9)',
            }}
          >
            <Box
              sx={{
                mb: 10,
                display: 'flex',
                alignItems: 'center',
              }}
            >
              <Box
                component='img'
                sx={{
                  width: '50%',

                  maxWidth: '5rem',
                }}
                alt='LOGO'
                src='src/assets/kırmızı.png'
              />
            </Box>
            <Box sx={{ width: '100%' }}>{children}</Box>
          </Box>

          {/* Login Ends */}
        </Card>
        {/* Footer */}
        <Box
          sx={{
            width: '100%',
            padding: 2,
            backgroundColor: theme => theme.palette.grey[800],
            color: theme => theme.palette.common.white,
            textAlign: 'center',
            position: 'absolute',
            bottom: 0,
          }}
        >
          <Typography variant='body2'>
            &copy; {new Date().getFullYear()} BOTAŞ
          </Typography>
        </Box>
      </Box>
    </Box>
  )
}

export default AuthWrapper
