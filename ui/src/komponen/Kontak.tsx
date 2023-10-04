import { Box, Center, Grid } from "@mantine/core";
import { EWarna } from "../enum";
import IkonLabel from "./IkonLabel";
import { KontakProps } from "../props/Kontak.props";

const Kontak = ({ data = [], bgKontak = EWarna.TEKS }: KontakProps) => {
  return (
    <div>
      <Box bg={bgKontak}>
        <Grid
          justify="space-between"
          align="center"
          styles={{
            root: {
              padding: "2em 5em 2em 5em",
            },
          }}
        >
          {data.length > 0 &&
            data.map((kontak, indeks) => {
              return (
                <Grid.Col key={indeks} span={4}>
                  <Center>
                    <IkonLabel
                      mode={kontak.mode}
                      teks={kontak.teks}
                      warnaIkon={kontak.warnaIkon}
                      warnaTeks={kontak.warnaTeks}
                    />
                  </Center>
                </Grid.Col>
              );
            })}
        </Grid>
      </Box>
    </div>
  );
};

export default Kontak;
