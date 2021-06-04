import React from 'react';
import {GeoJSON, FeatureGroup, Popup} from 'react-leaflet';
import { useSelector } from 'react-redux'
import CustomBtnInfo from "../../CustomBtnInfo";

export default function GeoJsonLayer2({tabId}) {

  const features = useSelector(state => state.data.features)
  const tab = useSelector(state => state.newr.tabs[tabId])

  
  const style = {
    weight: tab.lineWidth,
    color: tab.color
  }
  
  console.log("tab.data: ", tab.data)
  
  return (
    <FeatureGroup>
      {features.filter(f => tab.data.includes(f.properties.ID)).map( f => {
          return (
            <GeoJSON
              key={f.properties.ID}
              data={f}
              style={style}
            >
              <Popup>
                <h3>{f.properties.Name}</h3>
                <CustomBtnInfo id={f.properties.ID}/>
              </Popup>
            </GeoJSON>
          )
      })}
    </FeatureGroup>
  )
}