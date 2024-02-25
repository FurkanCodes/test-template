/* eslint-disable @typescript-eslint/no-unused-vars */
import React from "react";
import {
  ActionIcon,
  Box,
  Burger,
  Flex,
  Group,
  Image,
  ScrollArea,
  Text,
} from "@mantine/core";
import styles from "./Sidebar.module.scss";
import {
  IconGauge,
  IconNotes,
  IconCalendarStats,
  IconPresentationAnalytics,
  IconFileAnalytics,
  IconAdjustments,
  IconLock,
  IconX,
} from "@tabler/icons-react";
import UserButton from "src/components/UserButton/UserButton";
import { LinksGroup } from "src/components/SidebarLinks/Links";
import UserProfile from "src/constants/mocks/UserProfile.json";
import { useMediaQuery } from "@mantine/hooks";
import { Transition } from "@mantine/core";

const mockdata = [
  { label: "Anasayfa", icon: IconGauge, link: "/" },
  {
    label: "STS Modülü",
    icon: IconNotes,

    initiallyOpened: false,
    links: [
      { label: "STS Başvuru", link: "/sts" },
      { label: "Sözleşme Girişi", link: "/" },
      { label: "Sözleşme Onay", link: "/" },
      { label: "Teminat Miktarı", link: "/" },
    ],
  },
  {
    label: "Kullanıcı Yönetimi",
    icon: IconCalendarStats,
    link: "/KullaniciYonetimi",
  },
  { label: "Kapasite Yönetimi", icon: IconPresentationAnalytics },
  { label: "Sistem Parametreleri", icon: IconFileAnalytics },

  {
    title: "Akış",
    label: "Akış Yönetimi",
    icon: IconLock,
    links: [
      { label: "Deneme", link: "/" },
      { label: "Deneme", link: "/" },
      { label: "Deneme", link: "/" },
    ],
  },
];

// eslint-disable-next-line @typescript-eslint/no-unused-vars
function Sidebar({ opened, toggleMobile }) {
  const tablet_match = useMediaQuery("(max-width: 768px)");
  const links = mockdata.map((m) => (
    <Box pl={0} mb="md" key={m.title}>
      <Text
        tt="uppercase"
        size="xs"
        pl="md"
        fw={500}
        mb="sm"
        className={styles.linkHeader}
      >
        {m.title}
      </Text>

      <LinksGroup {...m} link={m.link || undefined} key={m.label} />
    </Box>
  ));

  return (
    <nav>
      <div className="navbar">
        <div className={styles.header}>
          <Flex justify="space-between" align="center" gap="sm">
            <div className={styles.logo}>
              <Group>
                <Image src="/public/kirmizi.png.png" h={50} w={60} />
                <Text
                component="span"
                inherit
                variant="gradient"
                gradient={{ from: 'red', to: 'blue' }}
              > BOTAŞ </Text>
              </Group>
            </div>
            {tablet_match && (
              <Burger
                opened={!opened}
                onClick={toggleMobile}
                aria-label="Toggle navigation"
              />
            )}
          </Flex>
        </div>
        {/* https://github.com/orgs/mantinedev/discussions/3588 */}

        <ScrollArea
          className={styles.links}
          scrollbarSize={2}
          scrollHideDelay={0}
          h="calc(100vh - var(--app-shell-header-height, 0px) - var(--app-shell-footer-height, 0px))"
        >
          <div className={styles.linksInner}>{links}</div>
        </ScrollArea>

        <div className={styles.footer}>
          <UserButton
            email={UserProfile.email}
            image={UserProfile.avatar}
            name={UserProfile.name}
          />
        </div>
      </div>
    </nav>
  );
}

export default Sidebar;
