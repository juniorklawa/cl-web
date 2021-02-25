import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import api from "../../services/api";
import "./styles.css";

const Dashboard = () => {
  const [toggleClassLevels, setToggleClassLevels] = useState(false);
  const [levels, setLevels] = useState({});
  const [isLoading, setIsLoading] = useState(false);
  useEffect(() => {
    async function fetchData() {
      try {
        setIsLoading(true);
        const { data } = await api.get("api/exercises");
        setLevels(data);
      } catch (err) {
        alert(err);
      } finally {
        setIsLoading(false);
      }
    }
    fetchData();
  }, []);

  return (
    <div id="container">
      {!isLoading ? (
        <>
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

          <div
            onClick={() => setToggleClassLevels((prevState) => !prevState)}
            id="option-button"
          >
            Google Docs
          </div>

          {toggleClassLevels && (
            <>
              <h4> Nível do aluno</h4>

              <Link
                to={{
                  pathname: "/google-docs",
                  state: { execiseUrl: levels.easy },
                }}
              >
                <div
                  onClick={() =>
                    setToggleClassLevels((prevState) => !prevState)
                  }
                  id="level-button"
                >
                  Level A
                </div>
              </Link>

              <Link
                to={{
                  pathname: "/google-docs",
                  state: { execiseUrl: levels.medium },
                }}
              >
                <div
                  onClick={() =>
                    setToggleClassLevels((prevState) => !prevState)
                  }
                  id="level-button"
                >
                  Level B
                </div>
              </Link>

              <Link
                to={{
                  pathname: "/google-docs",
                  state: { execiseUrl: levels.hard },
                }}
              >
                <div
                  onClick={() =>
                    setToggleClassLevels((prevState) => !prevState)
                  }
                  id="level-button"
                >
                  Level C
                </div>
              </Link>
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
