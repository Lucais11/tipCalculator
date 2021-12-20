import ReactDOM from "react-dom";
import App from "./App";
import { StoreProvider } from "easy-peasy";
import store from "./store";

import { ChakraProvider } from "@chakra-ui/provider";

const Root = () => {
  return (
    <StoreProvider store={store}>
      <ChakraProvider>
        <App />
      </ChakraProvider>
    </StoreProvider>
  );
};

const app = document.getElementById("app");
ReactDOM.render(<Root />, app);
