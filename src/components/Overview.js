import React from "react";
import NumberInput from "./NumberInput";
import TipButton from "./TipButton";
import { PlusSquareIcon } from "@chakra-ui/icons";
import { BsCurrencyDollar, BsPersonFill } from "react-icons/bs";
import { Box, Flex, Text } from "@chakra-ui/layout";
import { useStoreActions, useStoreState } from "easy-peasy";

const Overview = () => {
  const { updateBill, updateTip, updatePeople } = useStoreActions(
    (actions) => actions
  );

  const { bill, people } = useStoreState((state) => state);

  const handleTipClick = (num) => {
    updateTip(num);
  };

  const handleBill = (value) => {
    updateBill(value);
  };

  const handlePeople = (value) => {
    updatePeople(value);
  };

  return (
    <Flex height="100%" direction="column">
      <Box height="25%">
        <Text>Bill</Text>
        <NumberInput Icon={BsCurrencyDollar} onChange={handleBill} />
      </Box>
      <Box height="50%">
        <Text>Select Tip %</Text>
        <Flex wrap="wrap">
          <Box width="33%" padding="5px">
            <TipButton
              value="5%"
              bg="teal.700"
              color="white"
              onClick={() => handleTipClick(5)}
            />
          </Box>
          <Box width="33%" padding="5px">
            <TipButton
              value="10%"
              bg="teal.700"
              color="white"
              onClick={() => handleTipClick(10)}
            />
          </Box>
          <Box width="33%" padding="5px">
            <TipButton
              value="15%"
              bg="teal.700"
              color="white"
              onClick={() => handleTipClick(15)}
            />
          </Box>
          <Box width="33%" padding="5px">
            <TipButton
              value="25%"
              bg="teal.700"
              color="white"
              onClick={() => handleTipClick(25)}
            />
          </Box>
          <Box width="33%" padding="5px">
            <TipButton
              value="50%"
              bg="teal.700"
              color="white"
              onClick={() => handleTipClick(50)}
            />
          </Box>
          <Box width="33%" padding="5px">
            <TipButton value="Custom" bg="gray.200" color="gray.800" />
          </Box>
        </Flex>
      </Box>
      <Box height="25%">
        <Text>Number of people</Text>
        <NumberInput
          Icon={BsPersonFill}
          onChange={handlePeople}
          initial={people}
        />
      </Box>
    </Flex>
  );
};

export default Overview;
