import React, { createContext, useContext } from "react";
import io from "socket.io-client";
const SocketContext = createContext({});

const SocketProvider = ({ children }) => {
  const ENDPOINT = "http://localhost:8080";

  const socket = io(ENDPOINT);

  return (
    <SocketContext.Provider
      value={{
        socket,
      }}
    >
      {children}
    </SocketContext.Provider>
  );
};

function useSocket() {
  const context = useContext(SocketContext);
  if (!context) {
    throw new Error("useSocket must be used within a SocketProvider");
  }

  return context;
}

export { SocketProvider, useSocket };
