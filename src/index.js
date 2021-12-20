import ReactDOM from "react-dom";
import App from "./App";
import { StoreProvider } from "easy-peasy";

import { ColorModeScript } from "@chakra-ui/color-mode";
import theme from "./theme";
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

const app = document.getElementById("root");
ReactDOM.render(
<>
<ColorModeScript initialColorMode={theme.config.initialColorMode} />
<Root />

</>
, app);
