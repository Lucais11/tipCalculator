import React from "react";
import { Box, Flex, Text, Spacer } from "@chakra-ui/react";
import BigNumber from "./BigNumber";
import WideButton from "./WideButton";
import { useStoreState, useStoreActions } from "easy-peasy";
import { calcTipPerPerson, calcTotalPerPerson } from "../lib/calculator";

const Total = () => {
  const { bill, tip, people, hasBeenUsed } = useStoreState((state) => state);

  const reset = useStoreActions((actions) => actions.reset);

  return (
    <Box bg="teal.700" height="100%" padding="8" rounded="2xl">
      <Flex direction="column" height="100%">
        <Box height="25%">
          <Flex align="center" justify="space-between">
            <Box width="50%">
              <Text color="white" fontSize="xl">
                Tip Amount
              </Text>
              <Text color="teal.500" fontSize="sm" fontWeight="bold">
                / person
              </Text>
            </Box>
            <Box>
              <BigNumber number={calcTipPerPerson(bill, tip, people)} />
            </Box>
          </Flex>
        </Box>
        <Box height="25%">
          <Flex align="center" justify="space-between">
            <Box width="50%">
              <Text color="white" fontSize="xl">
                Total
              </Text>
              <Text color="teal.500" fontSize="sm" fontWeight="bold">
                / person
              </Text>
            </Box>
            <Box>
              <BigNumber number={calcTotalPerPerson(bill, tip, people)} />
            </Box>
          </Flex>
        </Box>
        <Spacer />
        <Flex height="50%" align="end">
          <WideButton disabled={!hasBeenUsed} onClick={reset} />
        </Flex>
      </Flex>
    </Box>
  );
};

export default Total;
