import { Box, Flex, Grid } from "@mantine/core";
import { EWarna } from "../enum";
import IkonLabel from "./IkonLabel";

const Kontak = () => {
  return (
    <div>
      <Box bg={EWarna.SEKUNDER}>
        <Grid
          justify="space-between"
          align="center"
          styles={{
            root: {
              padding: "2em 5em 2em 5em",
            },
          }}
        >
          <Grid.Col span={4}>
            <IkonLabel />
          </Grid.Col>
          <Grid.Col span={4}>
            <IkonLabel />
          </Grid.Col>
          <Grid.Col span={4}>
            <IkonLabel />
          </Grid.Col>
        </Grid>
      </Box>
    </div>
  );
};

export default Kontak;
