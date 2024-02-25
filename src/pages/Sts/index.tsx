import React, { useState } from 'react'
import ComboboxAtom from './components/Combobox/ComboboxAtom'
import {
  ActionIcon,
  Alert,
  Button,
  ButtonGroup,
  Card,
  Container,
  Flex,
  Group,
  Stack,
  Text,
  ThemeIcon,
  Title,
  rem,
} from '@mantine/core'
import DateInputAtom from './components/DateInput/DateInputAtom'
import {
  IconChevronCompactDown,
  IconChevronDown,
  IconInfoCircle,
  IconPhoto,
  IconUpload,
  IconX,
} from '@tabler/icons-react'
import { Dropzone, IMAGE_MIME_TYPE } from '@mantine/dropzone'
import Example from './components/Datatable/Datatable'
import { notifications } from '@mantine/notifications'

function Sts() {
  const [showDataTable, setShowDataTable] = useState(false) // Initial state set to false

  const handleKaydetClick = () => {
    setShowDataTable(!showDataTable) // Toggle the state
  }

  return (
    <div>
      {showDataTable ? (
        <Example />
      ) : (
        <>
       
          <Title
            order={3}
            style={{
              color: 'red', // Text color
              fontFamily: 'sans-serif',
              fontWeight: 'bold', // Font weight
              paddingLeft: '6.5rem',
              paddingTop: '1rem',
            }}
          >
            STS Başvuru
          </Title>
          <Flex
            mih={100}
            gap='xl'
            justify='space-around'
            align='center'
            direction='row'
            wrap='wrap'
            mr={100}
            ml={100}
          >
            <ComboboxAtom></ComboboxAtom>
            <ComboboxAtom></ComboboxAtom>
            <DateInputAtom></DateInputAtom>
            <ComboboxAtom></ComboboxAtom>
            <ComboboxAtom></ComboboxAtom>
            <DateInputAtom></DateInputAtom>
            <ComboboxAtom></ComboboxAtom>
            <ComboboxAtom></ComboboxAtom>
          </Flex>
          <Group justify='flex-end' gap='lg' mr={100} ml={100}>
            <Button onClick={handleKaydetClick}>Kaydet</Button>
            <Button
              onClick={() =>
                notifications.show({
                  title: 'KAYDET',
                  message: 'Kaydete bas🤥',
                })
              }
              color='red'
            >
              Listele
            </Button>
          </Group>
          {/* upload */}

          <Group justify='center' gap='xs' pr={250} pt={40}>
            <Card shadow='sm' withBorder w={400} h={600} ml={100}>
              <Flex direction={'column'} style={{ height: '100%' }}>
                <Flex align='center'>
                  <ThemeIcon
                    mb={30}
                    variant='transparent'
                    color='red'
                    radius='xs'
                    aria-label='Settings'
                  >
                    <IconChevronDown style={{ width: '70%', height: '70%' }} />
                  </ThemeIcon>
                  <Text size='sm' ml={10} mb={30}>
                    YÜKLEMEK İSTEDİĞİNİZ BELGEYİ SEÇİN
                  </Text>
                </Flex>
                <Dropzone
                  onDrop={files => console.log('accepted files', files)}
                  onReject={files => console.log('rejected files', files)}
                  maxSize={5 * 1024 ** 2}
                  accept={IMAGE_MIME_TYPE}
                  h={20}
                  style={{ flexGrow: 1, overflow: 'auto' }} // Ensure the Dropzone takes up the remaining space and handles overflow
                >
                  <Group
                    justify='center'
                    gap='xl'
                    mih={220}
                    style={{ pointerEvents: 'none' }}
                  >
                    <Dropzone.Accept>
                      <IconUpload
                        style={{
                          width: rem(52),
                          height: rem(52),
                          color: 'var(--mantine-color-blue-6)',
                        }}
                        stroke={1.5}
                      />
                    </Dropzone.Accept>
                    <Dropzone.Reject>
                      <IconX
                        style={{
                          width: rem(52),
                          height: rem(52),
                          color: 'var(--mantine-color-red-6)',
                        }}
                        stroke={1.5}
                      />
                    </Dropzone.Reject>
                    <Dropzone.Idle>
                      <IconPhoto
                        style={{
                          width: rem(52),
                          height: rem(52),
                          color: 'var(--mantine-color-dimmed)',
                        }}
                        stroke={1.5}
                      />
                    </Dropzone.Idle>

                    <div>
                      <Text size='xl' inline>
                        Belgeyi sürükleyebilirsin
                      </Text>
                      <Text size='sm' c='dimmed' inline mt={7}>
                        Belli bir boyutu geçmediği sürece, istediğiniz kadar
                        yükleyebilirsiniz.
                      </Text>
                    </div>
                  </Group>
                </Dropzone>
                <Button
                  onClick={() =>
                    notifications.show({
                      title: 'Henüz Eklemedik',
                      message: 'HENÜZ ÇALIŞMIYOR 🤥',
                    })
                  }
                  mt={10}
                >
                  YÜKLE
                </Button>
              </Flex>
            </Card>

            <Stack bg='var(--mantine-color-body)' gap='sm' pl={20} pb={300}>
              {' '}
              <Alert variant='light' color='blue' radius='xs' title='DİKKAT!'>
                Lorem ipsum dolor sit, amet consectetur adipisicing elit. At
                officiis, quae tempore necessitatibus placeat saepe.
              </Alert>
              <Alert variant='light' color='blue' radius='xs' title='DUYURU'>
                Lorem ipsum dolor sit, amet consectetur adipisicing elit. At
                officiis, quae tempore necessitatibus placeat saepe.
              </Alert>
              <Alert variant='light' color='blue' radius='xs' title='DİKKAT'>
                Lorem ipsum dolor sit, amet consectetur adipisicing elit. At
                officiis, quae tempore necessitatibus placeat saepe.
              </Alert>
            </Stack>
          </Group>
        </>
      )}
    </div>
  )
}

export default Sts
