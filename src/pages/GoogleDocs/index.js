import React from "react";

const GoogleDocs = () => {
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
        src="https://docs.google.com/document/d/1OSVCC3dKgWCJ26kl6lqp0SlCxmOzHGC9Bm3_OqjsapQ/edit?usp=sharing"
        title="WTP Iframe"
      />
    </div>
  );
};

export default GoogleDocs;
