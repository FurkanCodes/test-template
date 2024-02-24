import { AppShell, Container, rem, useMantineTheme } from '@mantine/core'
import { useDisclosure, useMediaQuery } from '@mantine/hooks'

import './Shell.modules.scss'
import HeaderNav from 'src/components/HeaderNav'
import { useState } from 'react'
import Sidebar from 'src/components/Sidebar'
import FooterNav from 'src/components/FooterNav/FooterNav'
import AppMain from 'src/components/AppMain/AppMain'
import Sts from 'src/pages/Sts'
import RouterSwitcher from 'src/routes/RouterSwitcher'

function Shell() {
  const theme = useMantineTheme()
  const [opened, setOpened] = useState(false)
  const tablet_match = useMediaQuery('(max-width: 768px)')
  const [mobileOpened, { toggle: toggleMobile }] = useDisclosure()
  const [desktopOpened, { toggle: toggleDesktop }] = useDisclosure(true)

  return (
    <AppShell
      layout='alt'
      header={{ height: 60 }}
      footer={{
        height: 72,
      }}
      navbar={{
        width: 300,
        breakpoint: 'md',
        collapsed: { mobile: !mobileOpened, desktop: !desktopOpened },
      }}
      padding={0}
    >
      <AppShell.Header
        style={{
          height: rem(60),
          border: 'none',
          boxShadow: tablet_match ? theme.shadows.md : theme.shadows.sm,
        }}
      >
        <Container fluid py='sm' px='lg'>
          <HeaderNav
            opened={opened}
            handleOpen={() => setOpened(o => !o)}
            desktopOpened={desktopOpened}
            mobileOpened={mobileOpened}
            toggleDesktop={toggleDesktop}
            toggleMobile={toggleMobile}
          />
        </Container>
      </AppShell.Header>
      <AppShell.Navbar
        style={{
          border: 'none',
          boxShadow: theme.shadows.md,
        }}
      >
        <Sidebar opened={opened} toggleMobile={toggleMobile} />
      </AppShell.Navbar>
      <AppShell.Main>
        <RouterSwitcher />
      </AppShell.Main>
      <AppShell.Footer
        p='md'
        style={{
          border: 'none',
          boxShadow:
            '0 -4px 6px -1px rgba(0, 0, 0, 0.1),            0 -2px 4px -1px rgba(0, 0, 0, 0.06)',
        }}
      >
        <Container fluid px='lg'>
          <FooterNav />
        </Container>
      </AppShell.Footer>
    </AppShell>
  )
}

export default Shell
