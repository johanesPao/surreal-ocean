import { ActionIcon, Box, Flex, Text } from "@mantine/core";
import { notifications } from "@mantine/notifications";
import {
  IconBrandDiscord,
  IconBrandDocker,
  IconBrandGithub,
  IconBrandGmail,
  IconBrandInstagram,
  IconBrandSlack,
  IconBrandTiktok,
  IconBrandX,
  IconMail,
  IconPhone,
} from "@tabler/icons-react";
import { EModeKontak, EWarna } from "../enum";
import { IkonLabelProps, ModeKontak } from "../props/IkonLabel.props";

const renderIkon = (mode: ModeKontak, warnaIkon: string) => {
  const notifikasi = () => {
    notifications.show({
      title: "test",
      message: "test",
      autoClose: 2000,
    });
  };

  let ikon: JSX.Element = <></>;
  switch (EModeKontak[mode]) {
    case EModeKontak.EMAIL:
      ikon = <IconMail color={warnaIkon} />;
      break;
    case EModeKontak.GMAIL:
      ikon = <IconBrandGmail color={warnaIkon} />;
      break;
    case EModeKontak.X:
      ikon = <IconBrandX color={warnaIkon} />;
      break;
    case EModeKontak.INSTAGRAM:
      ikon = <IconBrandInstagram color={warnaIkon} />;
      break;
    case EModeKontak.TIKTOK:
      ikon = <IconBrandTiktok color={warnaIkon} />;
      break;
    case EModeKontak.DISCORD:
      ikon = <IconBrandDiscord color={warnaIkon} />;
      break;
    case EModeKontak.SLACK:
      ikon = <IconBrandSlack color={warnaIkon} />;
      break;
    case EModeKontak.DOCKER:
      ikon = <IconBrandDocker color={warnaIkon} />;
      break;
    case EModeKontak.GITHUB:
      ikon = <IconBrandGithub color={warnaIkon} />;
      break;
    default:
      ikon = <IconPhone color={warnaIkon} />;
      break;
  }

  return (
    <Flex style={{ display: "flex", flexDirection: "row" }}>
      <ActionIcon.Group
        // size="xl"
        variant="light"
        // color={warnaIkon}
        // onClick={() => {
        //   notifications.show({
        //     id: mode,
        //     title: "test",
        //     message: "test",
        //     autoClose: 2000,
        //   });
        // }}
      >
        {ikon}
      </ActionIcon.Group>
    </Flex>
  );
};

const IkonLabel = ({
  mode = "TELP",
  teks = "",
  warnaIkon = EWarna.TEKS,
  warnaTeks = EWarna.TEKS,
}: IkonLabelProps) => {
  return (
    <Box>
      <Flex gap={10} align="center">
        {renderIkon(mode, warnaIkon)}
        <Text
          style={{
            paddingTop: "0.3em",
            color: warnaTeks,
            display: "flex",
            flexDirection: "row",
          }}
        >
          {teks}
        </Text>
      </Flex>
    </Box>
  );
};

export default IkonLabel;
