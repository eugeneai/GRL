import React from "react";
import {MapContainer, ZoomControl} from "react-leaflet";
import "./AppMap.css";
import ListBaseMaps2 from "./ListBaseMaps2";
import GeoJsonLayer2 from "./GeoJsonLayer2";
import {useSelector} from "react-redux";


export default function AppMap() {
  const position = [53.105, 107.405]
  const tabs = useSelector(state => state.newr.tabs)
  const visibles = tabs.map(t => t.visible)
  
  return (
    <MapContainer className="map" center={position} zoom={7} zoomControl={false}>
      <ListBaseMaps2 />
      <ZoomControl position="bottomleft" />
      
      {/* eslint-disable-next-line array-callback-return */}
      {visibles.map( (v, id) => {
        if(v){
          return <GeoJsonLayer2 tabId={id} key={id}/>
        }
      })}
      
    </MapContainer>
  )
}