import React from "react";
import { useLocation } from "react-router-dom";

const GoogleDocs = () => {
  const {
    state: { execiseUrl },
  } = useLocation();

  return (
    <div
      style={{
        height: "100vh",
        width: "100%",
      }}
    >
      <iframe
        width="100%"
        height="100%"
        frameborder="0"
        allowFullScreen
        src={execiseUrl}
        title="WTP Iframe"
      />
    </div>
  );
};

export default GoogleDocs;
