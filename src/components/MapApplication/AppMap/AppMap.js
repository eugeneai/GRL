import React from "react";
import {MapContainer, ZoomControl} from "react-leaflet";
import "./AppMap.css";
import ListBaseMaps2 from "./ListBaseMaps2";


export default function AppMap() {
  
  const position = [53.105, 107.405]
  
  return (
    <MapContainer className="map" center={position} zoom={7} zoomControl={false}>
      <ListBaseMaps2 />
      <ZoomControl position="bottomleft" />
    </MapContainer>
  )
}