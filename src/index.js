import ReactDOM from "react-dom";
import App from "./App";
import { ChakraProvider } from "@chakra-ui/provider";

const Root = () => {
  return (
    <ChakraProvider>
      <App />
    </ChakraProvider>
  );
};

const app = document.getElementById("app");
ReactDOM.render(<Root />, app);
