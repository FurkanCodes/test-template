import React, { useState } from "react";
import ComboboxAtom from "./components/Combobox/ComboboxAtom";
import {
  ActionIcon,
  Alert,
  Button,
  ButtonGroup,
  Card,
  Container,
  Flex,
  Grid,
  Group,
  Paper,
  Stack,
  Text,
  ThemeIcon,
  Title,
  rem,
} from "@mantine/core";
import DateInputAtom from "./components/DateInput/DateInputAtom";
import {
  IconChevronCompactDown,
  IconChevronDown,
  IconInfoCircle,
  IconPhoto,
  IconUpload,
  IconX,
} from "@tabler/icons-react";
import { Dropzone, IMAGE_MIME_TYPE } from "@mantine/dropzone";
import Example from "./components/Datatable/Datatable";
import { notifications } from "@mantine/notifications";

function Sts() {
  const [showDataTable, setShowDataTable] = useState(false); // Initial state set to false

  const handleKaydetClick = () => {
    setShowDataTable(!showDataTable); // Toggle the state
  };

  return (
    <div>
      {showDataTable ? (
        <Example />
      ) : (
        // <>

        //   <Title
        //     order={3}
        //     style={{
        //       color: 'red', // Text color
        //       fontFamily: 'sans-serif',
        //       fontWeight: 'bold', // Font weight
        //       paddingLeft: '6.5rem',
        //       paddingTop: '1rem',
        //     }}
        //   >
        //     STS Başvuru
        //   </Title>
        //   <Flex
        //     mih={100}
        //     gap='xl'
        //     justify='space-around'
        //     align='center'
        //     direction='row'
        //     wrap='wrap'
        //     mr={100}
        //     ml={100}
        //   >
        //     <ComboboxAtom></ComboboxAtom>
        //     <ComboboxAtom></ComboboxAtom>
        //     <DateInputAtom></DateInputAtom>
        //     <ComboboxAtom></ComboboxAtom>
        //     <ComboboxAtom></ComboboxAtom>
        //     <DateInputAtom></DateInputAtom>
        //     <ComboboxAtom></ComboboxAtom>
        //     <ComboboxAtom></ComboboxAtom>
        //   </Flex>
        //   <Group justify='flex-end' gap='lg' mr={100} ml={100}>
        //     <Button onClick={handleKaydetClick}>Kaydet</Button>
        //     <Button
        //       onClick={() =>
        //         notifications.show({
        //           title: 'KAYDET',
        //           message: 'Kaydete bas🤥',
        //         })
        //       }
        //       color='red'
        //     >
        //       Listele
        //     </Button>
        //   </Group>
        //   {/* upload */}

        // </>
        <Paper shadow="xl" withBorder p="xl" m={20}>
          <Title order={3} pb={30}>
            STS Başvurusu
          </Title>
          <Grid justify="space-between" >
            <Grid.Col span={5}>
              {" "}
              <Flex direction={"column"} gap={"lg"}>
                <ComboboxAtom label={"Kurum"}></ComboboxAtom>
                <ComboboxAtom label={"Belge Türü"}></ComboboxAtom>
                <DateInputAtom placeholder={"Sisteme Giriş Tarihi"}></DateInputAtom>
                <DateInputAtom placeholder={"Ödeme Bitiş Tarihi"}></DateInputAtom>
                <DateInputAtom placeholder={"Ödeme Başlangıç Tarihi"}></DateInputAtom>
              </Flex>
            </Grid.Col>
            <Grid.Col span={6}>
              <Flex direction={"column"} gap={"sm"} justify={"flex-start"}>
                <ComboboxAtom label={"Yüklemek İstediğiniz Belgeyi Seçin"}></ComboboxAtom>
                <Dropzone
                  onDrop={(files) => console.log("accepted files", files)}
                  onReject={(files) => console.log("rejected files", files)}
                  maxSize={5 * 1024 ** 2}
                  accept={IMAGE_MIME_TYPE}
                  pb={1}
                >
                  <Group
                    justify="center"
                    gap="xl"
                    mih={192}
                    style={{ pointerEvents: "none" }}
                  >
                    <Dropzone.Accept>
                      <IconUpload
                        style={{
                          width: rem(52),
                          height: rem(52),
                          color: "var(--mantine-color-blue-6)",
                        }}
                        stroke={1.5}
                      />
                    </Dropzone.Accept>
                    <Dropzone.Reject>
                      <IconX
                        style={{
                          width: rem(52),
                          height: rem(52),
                          color: "var(--mantine-color-red-6)",
                        }}
                        stroke={1.5}
                      />
                    </Dropzone.Reject>
                    <Dropzone.Idle>
                      <IconPhoto
                        style={{
                          width: rem(52),
                          height: rem(52),
                          color: "var(--mantine-color-dimmed)",
                        }}
                        stroke={1.5}
                      />
                    </Dropzone.Idle>

                    <div>
                 
                      <Text size="sm" c="dimmed" inline mt={7}>
                      Yüklemek istediğiniz dosyayı buraya sürükleyiniz  ya da seçiniz.
                      </Text>
                    </div>
                  </Group>
                </Dropzone>
              </Flex>
            </Grid.Col>
        
          </Grid>
          <Button mt={30} onClick={() => setShowDataTable(true)}>Kaydet</Button>
        </Paper>
      )}
    </div>
  );
}

export default Sts;
