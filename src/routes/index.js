import React from "react";
import { Route, Switch } from "react-router-dom";
import Dashboard from "../pages/Dashboard";
import Whiteboard from "../pages/Whiteboard";
import GoogleDocs from "../pages/GoogleDocs";
import CollabEditor from "../pages/CollabEditor";

const Routes = () => {
  return (
    <>
      <Switch>
        <Route exact path="/">
          <Dashboard />
        </Route>
        <Route exact path="/whiteboard">
          <Whiteboard />
        </Route>

        <Route exact path="/collabeditor">
          <CollabEditor />
        </Route>

        <Route exact path="/google-docs/:level">
          <GoogleDocs />
        </Route>
      </Switch>
    </>
  );
};

export default Routes;
