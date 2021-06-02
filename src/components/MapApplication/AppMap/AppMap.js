import React from "react";
import {MapContainer, ZoomControl} from "react-leaflet";
import "./AppMap.css";
import ListBaseMaps2 from "./ListBaseMaps2";
import GeoJsonLayer2 from "./GeoJsonLayer2";
import {useSelector} from "react-redux";


export default function AppMap() {
  const position = [53.105, 107.405]
  const isVisible = useSelector(state => state.newr.tabs[0].visible)

  
  return (
    <MapContainer className="map" center={position} zoom={7} zoomControl={false}>
      <ListBaseMaps2 />
      <ZoomControl position="bottomleft" />
      
      { isVisible && <GeoJsonLayer2 tabId={0}/>}
      {/* eslint-disable-next-line array-callback-return */}
      {/*{visibles.map( (v, id) => {*/}
      {/*  if(v) {*/}
      {/*    console.log("id: ", id)*/}
      {/*    return <GeoJsonLayer2 key={id} tabId={id}/>*/}
      {/*  }*/}
      {/*})}*/}
      
    </MapContainer>
  )
}