import { ActionIcon, Box, Flex, Text } from "@mantine/core";
import { IconPhone } from "@tabler/icons-react";
import { EWarna } from "../enum";

const IkonLabel = () => {
  return (
    <Box>
      <Flex gap={2} align="center">
        <ActionIcon variant="subtle" c={EWarna.TERSIER}>
          <IconPhone />
        </ActionIcon>
        <Text style={{ paddingTop: "0.3em" }}>(+62) 8111183385</Text>
      </Flex>
    </Box>
  );
};

export default IkonLabel;
