import React from 'react'
import {BrowserRouter, Route, Switch, NavLink} from "react-router-dom";

import App from "./pages/App";
import TestPage from "./pages/TestPage";

function RouterWrapper() {
  return (
    <BrowserRouter>
      <div className="Navbar">
        <NavLink to={"/"}>Map</NavLink>
        <NavLink to={"/test"}>Test</NavLink>
      </div>
      <Switch>
        <Route path="/" exact component={App} />
        <Route path="/test" component={TestPage} />
      </Switch>
      
    </BrowserRouter>
  );
}

export default RouterWrapper;
