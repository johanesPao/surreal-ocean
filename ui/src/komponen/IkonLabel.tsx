// import { notifications } from "@mantine/notifications";
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
  // const notifikasi = () => {
  //   notifications.show({
  //     title: "test",
  //     message: "test",
  //     autoClose: 2000,
  //   });
  // };

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
    <div>
      {ikon}
    </div>
  );
};

const IkonLabel = ({
  mode = "TELP",
  teks = "",
  warnaIkon = EWarna.TEKS,
  warnaTeks = EWarna.TEKS,
}: IkonLabelProps) => {
  return (
    <div className="basis-1/4">
      <div className="flex flex-row justify-center">
        {renderIkon(mode, warnaIkon)}
        <text
          className="px-2"
          style={{
            color: warnaTeks,
          }}
        >
          {teks}
        </text>
      </div>
    </div>
  );
};

export default IkonLabel;
