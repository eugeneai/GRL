import React from 'react'
import {BrowserRouter, Route, Switch} from "react-router-dom";

import MapApplication from "./pages/MapApplication";

function RouterWrapper() {
  return (
    <BrowserRouter>
      <Switch>
        <Route path="/" exact component={MapApplication} />
      </Switch>
    </BrowserRouter>
  );
}

export default RouterWrapper;
