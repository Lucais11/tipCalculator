import React from "react";
import { Box, Flex } from "@chakra-ui/layout";
import Overview from "./Overview";
import Total from "./Total";

const Card = () => {
  return (
    <Box
      width="60vw"
      height="55vh"
      bg="white"
      rounded="2xl"
      padding="50px"
      boxShadow="lg"
    >
      <Flex height="100%">
        <Box width="50%" height="100%" paddingRight="10px">
          <Overview />
        </Box>
        <Box width="50%" paddingLeft="10px">
          <Total />
        </Box>
      </Flex>
    </Box>
  );
};

export default Card;
