import React from 'react';
import {BrowserRouter, Route} from "react-router-dom";
// import {BrowserRouter, Route, Switch} from "react-router-dom";  
// add Switch between BrowseRouter ans Route tags below

import MapApplication from "./pages/MapApplication";

function RouterWrapper() {
  return (
    <BrowserRouter>
      <Route path="/" exact component={MapApplication} />
    </BrowserRouter>
  );
}

export default RouterWrapper;
