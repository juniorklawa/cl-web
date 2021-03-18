import React, { useState } from "react";
import "./styles.css";

const Dashboard = () => {
  const [toggleClassLevels, setToggleClassLevels] = useState(false);
  const [isLoading] = useState(false);

  const handlePush = (url) => {
    const win = window.open(url, "_blank");
    return win.focus();
  };

  return (
    <div id="container">
      {!isLoading ? (
        <>
          <div
            onClick={() => setToggleClassLevels((prevState) => !prevState)}
            id="option-button"
          >
            Google Docs
          </div>

          <div
            onClick={() => window.ReactNativeWebView.postMessage('CLOSE_WEBVIEW')}
            id="option-button"
          >
            Teste WebWol
          </div>

          {toggleClassLevels && (
            <>
              <h4> Nível do aluno</h4>

              <div
                onClick={() => handlePush("/google-docs/a")}
                id="level-button"
              >
                Level A
              </div>

              <div
                onClick={() => handlePush("/google-docs/b")}
                id="level-button"
              >
                Level B
              </div>

              <div
                onClick={() => handlePush("/google-docs/c")}
                id="level-button"
              >
                Level C
              </div>

              <div
                onClick={() => handlePush("/google-docs/teacher")}
                id="level-button"
              >
                Roteiro completo
              </div>
            </>
          )}
        </>
      ) : (
        <>
          <h1>Carregando...</h1>
        </>
      )}
    </div>
  );
};

export default Dashboard;
