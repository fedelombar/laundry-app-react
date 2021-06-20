import React from "react";
import ReactDOM from "react-dom";
import { ChakraProvider } from "@chakra-ui/react";

import theme from "./utils/theme";
// import Header from "./components/ui/Header";
// import { DashboardScreen } from "./components/dashboard/DashboardScreen";
import LaundryApp from "./LaudryApp";
import Header from "./components/ui/Header";

ReactDOM.render(
  <ChakraProvider theme={theme}>
    <Header />
    <LaundryApp />
  </ChakraProvider>,

  document.getElementById("root")
);
