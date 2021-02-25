import React from "react";
import { BrowserRouter as Router } from "react-router-dom";
import Routes from "./routes";
import { SocketProvider } from "./hooks/useSocket";

const App = () => {
  return (
    <SocketProvider>
      <Router>
        <Routes />
      </Router>
    </SocketProvider>
  );
};

export default App;
