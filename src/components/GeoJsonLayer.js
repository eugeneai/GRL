import React from 'react';
import { GeoJSON, FeatureGroup, Popup } from 'react-leaflet';
import { useSelector } from 'react-redux'

import BtnGetInfo from "./BtnGetInfo";

export default function GeoJsonLayer({lineParameters}) {
  
  const features = useSelector(state => state.data.features)
  const ids = useSelector(state => state.sparql.displayedData)
  
  return (    
    <FeatureGroup>
      {
        !ids.length && 
          features.map(f => {
            return (
              <GeoJSON
                key={f.properties.ID}
                data={f}
                style={lineParameters}
              >
                <Popup>
                  <h3>{f.properties.Name}</h3>
                  <BtnGetInfo id={f.properties.ID}/>
                </Popup>
              </GeoJSON>
            )
          })
      } 
      {
        ids.length && 
        // eslint-disable-next-line array-callback-return
          features.filter(f => ids.includes(f.properties.ID)).map( f => {
            return (
              <GeoJSON
                key={f.properties.ID}
                data={f}
                style={lineParameters}
              >
                <Popup>
                  <h3>{f.properties.Name}</h3>
                  <BtnGetInfo id={f.properties.ID}/>
                </Popup>
              </GeoJSON>
            )
          })
      }
    </FeatureGroup>
  )
}



