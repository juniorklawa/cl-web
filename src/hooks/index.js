import React from "react";

import { SocketProvider } from "./useSocket";

const AppProvider = ({ children }) => (
  <SocketProvider>{children}</SocketProvider>
);

export default AppProvider;
