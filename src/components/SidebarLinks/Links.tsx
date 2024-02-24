/* eslint-disable @typescript-eslint/no-explicit-any */
import { MouseEvent, useState } from 'react'
import {
  Group,
  Box,
  Collapse,
  ThemeIcon,
  Text,
  UnstyledButton,
  rem,
} from '@mantine/core'
import { IconChevronRight } from '@tabler/icons-react'
import classes from './NavbarLinksGroup.module.scss'
import { To, useNavigate } from 'react-router-dom'

interface LinksGroupProps {
  icon: React.FC<any>
  label: string
  initiallyOpened?: boolean
  links?: { label: string; link: string }[]
  link: string
}

export function LinksGroup({
  icon: Icon,
  label,
  initiallyOpened,
  links,
  link,
}: LinksGroupProps) {
  const hasLinks = Array.isArray(links)
  const [opened, setOpened] = useState(initiallyOpened || false)
  const navigate = useNavigate()

  const goNavigate = (e: any, link: To) => {
    e.preventDefault()
    console.log(link)
    navigate(link)
  }
  const items = (hasLinks ? links : []).map(link => (
    <Box<'a'>
      style={{
        marginLeft: '-24px',
        paddingLeft: '20px',
        fontSize: '18px', // Increase the font size
        padding: '10px', // Add padding around the text
      }}
      component='a'
      className={classes.link}
      href=''
      key={link.label}
      onClick={e => goNavigate(e, link.link)}
      fz='sm'
      lh='md'
    >
      {link.label}
    </Box>
  ))

  return (
    <>
      <div className={classes.container}>
        <UnstyledButton
          onClick={() => setOpened(o => !o)}
          className={classes.control}
        >
          <Group
            justify='space-between'
            align='center'
            style={{ margin: '0.2rem', fontSize: '1rem' }}
          >
            <Box
              style={{
                display: 'flex',
                alignItems: 'center',
              }}
            >
              <ThemeIcon color='red' variant='light' size={30}>
                <Icon style={{ width: rem(18), height: rem(18) }} />
              </ThemeIcon>

              <Box<'a'>
                component='a'
                ml='md'
                style={{
                  marginRight: '0.2rem',
                  paddingLeft: '0.2rem',
                }}
                onClick={e => goNavigate(e, link)}
              >
                {label}
              </Box>
            </Box>
            {hasLinks && (
              <IconChevronRight
                className={classes.chevron}
                stroke={1.5}
                style={{
                  width: rem(16),
                  height: rem(16),
                  transform: opened ? 'rotate(-90deg)' : 'none',
                }}
              />
            )}
          </Group>
        </UnstyledButton>
        {hasLinks ? (
          <>
            {' '}
            <Collapse in={opened}>
              <div className={classes.linkContainer}>{items} </div>
            </Collapse>
          </>
        ) : null}
      </div>
    </>
  )
}
