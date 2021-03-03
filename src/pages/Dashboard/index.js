import React, { useEffect, useState } from "react";
import { Link, useHistory } from "react-router-dom";
import api from "../../services/api";
import "./styles.css";

const Dashboard = () => {
  const [toggleClassLevels, setToggleClassLevels] = useState(false);
  const [levels, setLevels] = useState({});
  const [isLoading, setIsLoading] = useState(false);

  const history = useHistory()

  // useEffect(() => {
  //   async function fetchData() {
  //     try {
  //       setIsLoading(true);
  //       const { data } = await api.get("api/exercises");
  //       setLevels(data);
  //     } catch (err) {
  //       // alert(err);
  //     } finally {
  //       setIsLoading(false);
  //     }
  //   }
  //   fetchData();
  // }, []);

  const handlePush = (url) => {
    const win = window.open(url, "_blank");
    return win.focus();
  }

  return (
    <div id="container">
      {!isLoading ? (
        <>
          {/* <Link
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
          </Link> */}

          <div
            onClick={() => setToggleClassLevels((prevState) => !prevState)}
            id="option-button"
          >
            Google Docs
          </div>

          {toggleClassLevels && (
            <>
              <h4> Nível do aluno</h4>

             
                <div
                  onClick={() =>
                    handlePush('/google-docs/a')
                  }
                  id="level-button"
                >
                  Level A
                </div>


                <div
                  onClick={() =>
                    handlePush('/google-docs/b')
                  }
                  id="level-button"
                >
                  Level B
                </div>

             
                <div
                  onClick={() =>
                    handlePush('/google-docs/c')
                  }
                  id="level-button"
                >
                  Level C
                </div>

                <div
                  onClick={() =>
                    handlePush('/google-docs/teacher')
                  }
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
