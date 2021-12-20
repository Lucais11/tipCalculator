import React from "react";
import {
  InputGroup,
  InputLeftElement,
  Input,
  Box,
  Button,
} from "@chakra-ui/react";

const NumberInput = ({ Icon }) => {
  return (
    <InputGroup bg="gray.100">
      <InputLeftElement
        pointerEvents="none"
        children={
          <Box color="gray.400">
            <Icon />
          </Box>
        }
      />
      <Input type="number" />
    </InputGroup>
  );
};

export default NumberInput;
