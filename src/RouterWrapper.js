import React from 'react';
// import {BrowserRouter, Route, Switch} from "react-router-dom";
import {BrowserRouter, Route} from "react-router-dom";

import MapApplication from "./pages/MapApplication";

function RouterWrapper() {
  return (
    <BrowserRouter>
      <Route path="/" exact component={MapApplication} />
    </BrowserRouter>
  );
}

export default RouterWrapper;
