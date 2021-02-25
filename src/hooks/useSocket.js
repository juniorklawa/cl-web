import React, { createContext, useContext } from "react";
import io from "socket.io-client";
const SocketContext = createContext({});

const SocketProvider = ({ children }) => {
  const ENDPOINT = 'https://2f7bf8bf7e74.ngrok.io';

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
