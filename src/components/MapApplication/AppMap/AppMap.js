import React from "react";
import {MapContainer, ZoomControl} from "react-leaflet";
import "./AppMap.css";
import ListBaseMaps from "./ListBaseMaps";
import GeoJsonLayer2 from "./GeoJsonLayer";
import {useSelector} from "react-redux";


export default function AppMap() {
  const position = [53.105, 107.405]
  const tabs = useSelector(state => state.newr.tabs)
  const visibles = tabs.map(t => t.visible)
  
  return (
    <MapContainer className="map" center={position} zoom={7} zoomControl={false}>
      <ListBaseMaps />
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