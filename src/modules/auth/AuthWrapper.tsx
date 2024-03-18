/* eslint-disable @typescript-eslint/no-unused-vars */
import Card from '@mui/material/Card'
import Box from '@mui/material/Box'

import AnnouncementWrapper from './AnnouncementTabs'
import { Divider, Typography } from '@mui/material'
import { Link } from 'react-router-dom'
import { DataGrid, GridColDef, GridValueGetterParams } from '@mui/x-data-grid'

import { useEffect, useMemo, useState } from 'react'
import Particles, { initParticlesEngine } from '@tsparticles/react'
import { type Container, type ISourceOptions } from '@tsparticles/engine'
// import { loadAll } from "@/tsparticles/all"; // if you are going to use `loadAll`, install the "@tsparticles/all" package too.
// import { loadFull } from "tsparticles"; // if you are going to use `loadFull`, install the "tsparticles" package too.
import { loadSlim } from '@tsparticles/slim' // if you are going to use `loadSlim`, install the "@tsparticles/slim" package too.
// import { loadBasic } from "@tsparticles/basic"; // if you are going to use `loadBasic`, install the "@tsparticles/basic" package too.

type AuthWrapperProps = {
  children: any
}

const columns: GridColDef[] = [
  {
    field: 'firstName',
    headerName: 'First name',
    flex: 1, // Stretch the column width
    editable: true,
  },
  {
    field: 'lastName',
    headerName: 'Last name',
    flex: 1, // Stretch the column width
    editable: true,
  },
]

const rows = [
  { id: 1, firstName: 'Referans Stok Seviyesi', lastName: '12312313123' },
  { id: 2, firstName: 'İletişim Şebeke Stoğu', lastName: '12312312312' },
  { id: 3, firstName: 'Tahmini Sisteme Giriş [TMB]', lastName: '12312312312' },
  { id: 4, firstName: 'Tahmini Çıkış [TMB]', lastName: '12312313123' },
  { id: 5, firstName: 'Dahili Kullanım Gaz', lastName: '12312313123' },
  { id: 6, firstName: 'İletişim Şebekesi Stoğu', lastName: '12312313123' },
]

// Define a custom tab component
const TabContent = ({ label, children }) => (
  <div>
    <h2>{label}</h2>
    <p>{children}</p>
  </div>
)

const AuthWrapper: React.FC<AuthWrapperProps> = ({ children }) => {
  const [init, setInit] = useState(false)

  // this should be run only once per application lifetime
  useEffect(() => {
    initParticlesEngine(async engine => {
      // you can initiate the tsParticles instance (engine) here, adding custom shapes or presets
      // this loads the tsparticles package bundle, it's the easiest method for getting everything ready
      // starting from v2 you can add only the features you need reducing the bundle size
      //await loadAll(engine);
      //await loadFull(engine);
      await loadSlim(engine)
      //await loadBasic(engine);
    }).then(() => {
      setInit(true)
    })
  }, [])

  const particlesLoaded = async (container?: Container): Promise<void> => {
    console.log(container)
  }

  const options: ISourceOptions = {
    key: 'backgroundMask',
    name: 'Background Mask',
    particles: {
      number: {
        value: 40,
        density: {
          enable: true,
        },
      },
      color: {
        value: '#F4F7FE',
      },
      shape: {
        type: 'circle',
      },
      opacity: {
        value: 1,
      },
      size: {
        value: {
          min: 1,
          max: 3,
        },
      },
      links: {
        enable: true,
        distance: 150,
        color: '#F4F7FE',
        opacity: 1,
        width: 1,
      },
      move: {
        enable: true,
        speed: 2,
        direction: 'none',
      },
    },
    interactivity: {
      events: {
        onHover: {
          enable: true,
          mode: 'bubble',
        },
        onClick: {
          enable: true,
          mode: 'push',
        },
      },
      modes: {
        bubble: {
          distance: 300,
          size: 100,
          duration: 2,
          opacity: 1,
        },
        push: {
          quantity: 4,
        },
      },
    },
    backgroundMask: {
      enable: true,
      cover: {
        color: '#F4F7FE',
      },
    },
    background: {
      color: '#F4F7FE',
      image: "url('src/assets/botas-login-bg.jpg')",
      position: '50% 50%',
      repeat: 'no-repeat',
      size: 'cover',
    },
  }

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
      <Particles
        id='tsparticles'
        particlesLoaded={particlesLoaded}
        options={options}
      />
      <Box
        component='img'
        sx={{
          width: '50%',
          paddingBottom: 10,
          maxWidth: '10rem',
          position: 'relative',
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
            backgroundColor: 'white',
            display: 'flex',
            position: 'relative',
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
                <Box
                  component='p'
                  sx={{
                    fontSize: '1rem',
                    display: 'flex',
                    justifyContent: 'center',
                    fontWeight: 'bold',
                    paddingBottom: '0.8rem',
                  }}
                >
                  18 OCAK 2024 Güncel Verileri
                </Box>

                <DataGrid
                  rowHeight={70}
                  rows={rows}
                  columns={columns}
                  hideFooter
                  hideFooterPagination
                  hideFooterSelectedRowCount
                  slots={{
                    columnHeaders: () => null,
                  }}
                  style={{
                    height: 'auto',
                    width: '100%',
                    fontSize: '0.9rem',
                  }}
                />
              </TabContent>
              <TabContent label='Duyurular'>Duyurular</TabContent>
              <TabContent label='Şeffaflık'>Şeffaflık</TabContent>
            </AnnouncementWrapper>
          </Box>
          {/* Announcement Ends */}
          <Divider orientation='vertical' variant='middle' flexItem />
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
        {/* <Box
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
        </Box> */}
      </Box>
    </Box>
  )
}

export default AuthWrapper
