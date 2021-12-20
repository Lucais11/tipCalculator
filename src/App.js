import { Box, Center } from "@chakra-ui/react";

import Card from "./components/Card";

const App = () => {
  return (
    <Box height="100vh" bgGradient="linear(to-r, green.200, pink.500)">
      <Center height="100%">
        <Card />
      </Center>
    </Box>
  );
};

export default App;
