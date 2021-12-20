import React from "react";
import { Box, Text } from "@chakra-ui/react";

var formatter = new Intl.NumberFormat("en-US", {
  style: "currency",
  currency: "USD",
});

const BigNumber = ({ number }) => {
  return (
    <Box>
      <Text fontSize="6xl" color="teal.500">
        {formatter.format(number || 0)}
      </Text>
    </Box>
  );
};

export default BigNumber;
