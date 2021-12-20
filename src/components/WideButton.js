import React from "react";
import { Button } from "@chakra-ui/react";

const WideButton = ({ disabled, onClick }) => {
  return (
    <Button
      width="100%"
      disabled={disabled}
      bg={disabled ? "teal.600" : "white"}
      color="teal.700"
      onClick={onClick}
    >
      Reset
    </Button>
  );
};

export default WideButton;
