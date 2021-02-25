import React from "react";
import { Link } from "react-router-dom";
import "./styles.css";

function Dashboard() {
  return (
    <div id="container">
      <Link
        to={{
          pathname: "/collabeditor",
        }}
      >
        <div id="option-button">Collab</div>
      </Link>

      <Link
        to={{
          pathname: "/whiteboard",
        }}
      >
        <div id="option-button">Whiteboard</div>
      </Link>

      <Link
        to={{
          pathname: "/google-docs",
        }}
      >
        <div id="option-button">Google Docs</div>
      </Link>
    </div>
  );
}

export default Dashboard;
