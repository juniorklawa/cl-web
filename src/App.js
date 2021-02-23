import { Editor } from "@tinymce/tinymce-react";
import "draft-js/dist/Draft.css";
import React, { useEffect, useState } from "react";
import io from "socket.io-client";

const ENDPOINT = "http://localhost:8080";

const socket = io(ENDPOINT);

function App() {
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

  return (
    <Editor
      init={{
        height: 500,
        menubar: false,
        formats: {
          alignleft: {
            selector: "p,h1,h2,h3,h4,h5,h6,td,th,div,ul,ol,li,table,img",
            classes: "left",
          },
          aligncenter: {
            selector: "p,h1,h2,h3,h4,h5,h6,td,th,div,ul,ol,li,table,img",
            classes: "center",
          },
          alignright: {
            selector: "p,h1,h2,h3,h4,h5,h6,td,th,div,ul,ol,li,table,img",
            classes: "right",
          },
          alignjustify: {
            selector: "p,h1,h2,h3,h4,h5,h6,td,th,div,ul,ol,li,table,img",
            classes: "full",
          },
          bold: { inline: "span", classes: "bold" },
          italic: { inline: "span", classes: "italic" },
          underline: { inline: "span", classes: "underline", exact: true },
          strikethrough: { inline: "del" },
          forecolor: {
            inline: "span",
            classes: "forecolor",
            styles: { color: "%value" },
          },
          hilitecolor: {
            inline: "span",
            classes: "hilitecolor",
            styles: { backgroundColor: "%value" },
          },
          custom_format: {
            block: "h1",
            attributes: { title: "Header" },
            styles: { color: "red" },
          },
        },
        plugins: [
          "advlist autolink lists link image charmap print preview anchor",
          "searchreplace visualblocks code fullscreen",
          "insertdatetime media table paste code help wordcount",
        ],
        toolbar:
          "undo redo | formatselect | bold italic backcolor | \
             alignleft aligncenter alignright alignjustify | \
             bullist numlist outdent indent | removeformat | help",
      }}
      value={response}
      onEditorChange={(content, editor) => {
        setResponse(content);
        socket.emit("content", content);
      }}
    />
  );
}

export default App;
