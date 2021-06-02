import React from 'react'
import {BrowserRouter, Route, Switch} from "react-router-dom";

import App from "./pages/App";
import MapApplication from "./pages/MapApplication";
import TestPage from "./pages/TestPage";

function RouterWrapper() {
  return (
    <BrowserRouter>
      <Switch>
        <Route path="/" exact component={MapApplication} />
        <Route path="/old" exact component={App} />
        <Route path="/test" component={TestPage} />
      </Switch>
    </BrowserRouter>
  );
}

export default RouterWrapper;
