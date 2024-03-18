import * as React from 'react'
import Tabs from '@mui/material/Tabs'
import Tab from '@mui/material/Tab'
import Typography from '@mui/material/Typography'
import Box from '@mui/material/Box'

interface TabPanelProps {
  children?: React.ReactNode
  index: number
  value: number
}

function CustomTabPanel(props: TabPanelProps) {
  const { children, value, index, ...other } = props

  return (
    <div
      role='tabpanel'
      hidden={value !== index}
      id={`simple-tabpanel-${index}`}
      aria-labelledby={`simple-tab-${index}`}
      {...other}
    >
      {value === index && (
        <Box sx={{ p: 3 }}>
          <Typography color={'black'}>{children}</Typography>
        </Box>
      )}
    </div>
  )
}

function a11yProps(index: number) {
  return {
    id: `simple-tab-${index}`,
    'aria-controls': `simple-tabpanel-${index}`,
  }
}

// Define a type for the children
interface TabChildProps {
  label: string
  children: React.ReactNode
}

interface AnnouncementWrapperProps {
  children: React.ReactElement<TabChildProps>[]
}

export default function AnnouncementWrapper({
  children,
}: AnnouncementWrapperProps) {
  const [value, setValue] = React.useState(0)

  const handleChange = (event: React.SyntheticEvent, newValue: number) => {
    setValue(newValue)
  }

  return (
    <Box sx={{ width: '100%' }}>
      <Box
        sx={{
          borderBottom: 1,
          borderWidth: '100%',
          borderColor: 'divider',
          width: '100%',
        }} // Ensure the Box spans the full width
      >
        <Tabs
          variant='fullWidth'
          value={value}
          onChange={handleChange}
          aria-label='basic tabs example'
        >
          {children.map((child, index) => (
            <Tab label={child.props.label} {...a11yProps(index)} />
          ))}
        </Tabs>
      </Box>
      {children.map((child, index) => (
        <CustomTabPanel value={value} index={index}>
          {child.props.children}
        </CustomTabPanel>
      ))}
    </Box>
  )
}
