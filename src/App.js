import React from "react";
import Navigation from "./comps/Navigation";
import { withRouter } from "react-router-dom";
import BaseSwitch from "./comps/BaseSwitch";

function App() {
  return (
    <React.Fragment>
      <header>
        <Navigation />
      </header>
      <BaseSwitch />
    </React.Fragment>
  );
}

export default withRouter(App);
