import { HtmlEditor, MenuBar } from "@aeaton/react-prosemirror";
import { menu, options } from "@aeaton/react-prosemirror-config-default";
import React, { useEffect, useState } from "react";
import io from "socket.io-client";
import ReactQuill from "react-quill";
import "react-quill/dist/quill.snow.css";

const ENDPOINT = "http://localhost:8080";

const socket = io(ENDPOINT);

const App = () => {
  const [response, setResponse] = useState("");

  useEffect(() => {
    socket.on("newUser", (data) => {
      console.log("novo usuario", data);
      setResponse(data);
    });

    socket.on("content", (data) => {
      setResponse(data);
    });
  }, []);

  useEffect(() => {
    const delayDebounceFn = setTimeout(() => {
      console.log(response);
      socket.emit("content", response);
    }, 500);

    return () => clearTimeout(delayDebounceFn);
  }, [response]);

  return (
    <ReactQuill
      theme="snow"
      value={response}
      onChange={(content) => {
        setResponse(content);
      }}
    />
  );
};
export default App;
{
  /* <textarea
value={response}
onChange={(e) => {
  setResponse(e.target.value);
  socket.emit("content", e.target.value);
}}
/> */
}
