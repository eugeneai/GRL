import React from 'react';
import { GeoJSON, FeatureGroup, Popup } from 'react-leaflet';
import { useSelector } from 'react-redux'

export default function GeoJsonLayer({lineParameters}) {
  const features = useSelector(state => state.data.features)
  
  return (    
    <FeatureGroup>
      {features.map(f => {
        return (
          <GeoJSON 
            key={f.properties.ID} 
            data={f} 
            style={lineParameters}
          >
            <Popup>{f.properties.Name}</Popup>
          </GeoJSON>
        )  
      })}
    </FeatureGroup>
  )
}



