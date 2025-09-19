import { ChakraProvider } from "@chakra-ui/react";
import React from "react";
import { createRoot } from "react-dom/client";
import { BrowserRouter as Router } from "react-router-dom";
import { ToastContainer } from "react-toastify";
import App from "./App";
import QueryProvider from "./context/QueryProvider";
import SocketProvider from "./context/SocketProvider";

import 'react-toastify/dist/ReactToastify.css';
import "./index.css";
import AuthProvider from "./context/AuthProvider";

const root = createRoot(document.getElementById("root"));
root.render(
  <ChakraProvider>
    <QueryProvider>
          <Router>
      <AuthProvider>
        <SocketProvider>
            <ToastContainer />
            <App />
        </SocketProvider>
      </AuthProvider>
          </Router>
      {/* <ToastContainer /> */}
    </QueryProvider>
  </ChakraProvider>
);
