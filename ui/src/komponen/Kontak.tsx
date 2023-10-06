import { Box, Center, Grid } from "@mantine/core";
import { EWarna } from "../enum";
import IkonLabel from "./IkonLabel";
import { KontakProps } from "../props/Kontak.props";

const Kontak = ({ data = [], bgKontak = EWarna.TEKS }: KontakProps) => {
  return (
    <div style={{ display: "flex", flexDirection: "column" }}>
      <Box
        bg={bgKontak}
        // style={{ display: "flex", flexDirection: "row" }}
      >
        <Grid
          justify="space-between"
          align="center"
          styles={{
            root: {
              // width: "100%",
              // padding: "2em 5em 2em 5em",
            },
            inner: {
              // width: "100%",
              // display: "inline-block",
              // flexDirection: "row",
            },
          }}
          columns={100}
        >
          {data.length > 0 &&
            data.map((kontak, indeks) => {
              return (
                <Grid.Col
                  key={indeks}
                  span={25}
                  // style={{ display: "flex", flexDirection: "row" }}
                >
                  {/* <Center> */}
                  <IkonLabel
                    mode={kontak.mode}
                    teks={kontak.teks}
                    warnaIkon={kontak.warnaIkon}
                    warnaTeks={kontak.warnaTeks}
                  />
                  {/* </Center> */}
                </Grid.Col>
              );
            })}
        </Grid>
      </Box>
    </div>
  );
};

export default Kontak;
