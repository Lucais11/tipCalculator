import React from "react";
import { Center, Box, Text } from "@chakra-ui/react";

const TipButton = ({ value, ...rest }) => {
  return (
    <Box {...rest} rounded="md" padding="5px" cursor="pointer">
      <Center>
        <Text fontWeight="bold" fontSize="2xl">
          {value}
        </Text>
      </Center>
    </Box>
  );
};

export default TipButton;
