import "draft-js/dist/Draft.css";
import React, { useEffect, useState } from "react";
// Components
import CustomEditor from "../../components/CustomEditor";
import { useSocket } from "../../hooks/useSocket";

const CollabEditor = () => {
  const { socket } = useSocket();

  const [response, setResponse] = useState("");

  useEffect(() => {
    socket.on("newUser", (data) => {
      setResponse(data);
    });

    socket.on("content", (data) => {
      setResponse(data);
      console.log("exec");
    });
  }, [socket]);

  return (
    <CustomEditor
      response={response}
      setResponse={setResponse}
      socket={socket}
    />
  );
};

export default CollabEditor;
