import React, {useRef} from 'react';
import { GeoJSON, FeatureGroup, Popup } from 'react-leaflet';
import { useSelector } from 'react-redux'

export default function GeoJsonLayer({lineParameters}) {
  const features = useSelector(state => state.data.features)
  const mapRef = useRef();

  let style = () => {
    return { ...lineParameters}
  }

  return (    
    <FeatureGroup>
      {features.map(f => {
        return (
          <GeoJSON 
            key={f.properties.name} 
            data={f} 
            style={style()}
            ref={mapRef}
          >
            <Popup>{f.properties.name}</Popup>
          </GeoJSON>
        )  
      })}
    </FeatureGroup>
  )
}



