import React, { useState } from "react";
import {
  InputGroup,
  InputLeftElement,
  Input,
  Box,
  Button,
} from "@chakra-ui/react";

const NumberInput = ({ Icon, onChange, initial }) => {
  const [state, setState] = useState(initial || 0);
  const handleChange = (e) => {
    setState(e.target.value);
    onChange(e.target.value);
  };
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
      <Input type="number" value={state} onChange={handleChange} />
    </InputGroup>
  );
};

export default NumberInput;
