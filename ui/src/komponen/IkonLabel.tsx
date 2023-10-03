import { ActionIcon, Box, Flex, Text } from "@mantine/core";
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

const renderIkon = (mode: ModeKontak) => {
  let ikon: JSX.Element = <></>;
  switch (EModeKontak[mode]) {
    case EModeKontak.EMAIL:
      ikon = <IconMail />;
      break;
    case EModeKontak.GMAIL:
      ikon = <IconBrandGmail />;
      break;
    case EModeKontak.X:
      ikon = <IconBrandX />;
      break;
    case EModeKontak.INSTAGRAM:
      ikon = <IconBrandInstagram />;
      break;
    case EModeKontak.TIKTOK:
      ikon = <IconBrandTiktok />;
      break;
    case EModeKontak.DISCORD:
      ikon = <IconBrandDiscord />;
      break;
    case EModeKontak.SLACK:
      ikon = <IconBrandSlack />;
      break;
    case EModeKontak.DOCKER:
      ikon = <IconBrandDocker />;
      break;
    case EModeKontak.GITHUB:
      ikon = <IconBrandGithub />;
      break;
    default:
      ikon = <IconPhone />;
      break;
  }

  return (
    <>
      <ActionIcon variant="subtle" c={EWarna.TEKS}>
        {ikon}
      </ActionIcon>
    </>
  );
};

const IkonLabel = ({ mode = "TELP", teks = "" }: IkonLabelProps) => {
  return (
    <Box>
      <Flex gap={2} align="center">
        {renderIkon(mode)}
        <Text style={{ paddingTop: "0.3em" }}>{teks}</Text>
      </Flex>
    </Box>
  );
};

export default IkonLabel;
