import { EWarna } from "../enum";
import IkonLabel from "./IkonLabel";
import { KontakProps } from "../props/Kontak.props";

const Kontak = ({ data = [] }: KontakProps) => {
  return (
    <div className="flex flex-row md:flex-row justify-center flex-wrap gap-2">
      {data.length > 0 &&
        data.map((kontak) => {
          return (
            <IkonLabel
              mode={kontak.mode}
              teks={kontak.teks}
              warnaIkon={kontak.warnaIkon}
              warnaTeks={kontak.warnaTeks}
            />
          );
        })}
    </div>
  );
};

export default Kontak;
