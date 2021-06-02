import React, {Fragment} from 'react'
import TopBar from "../components/MapApplication/TopBar";
import LeftBar from "../components/MapApplication/LeftBar";
import RightBar from "../components/MapApplication/RightBar";
import AppMap from "../components/MapApplication/AppMap/AppMap";

export default function MapApplication() {
  
  return (
    <Fragment>
      <div className="interface-wrapper">
        <TopBar />
        <LeftBar />
        <RightBar />
        <AppMap />
      </div>
    </Fragment>
  );
}

