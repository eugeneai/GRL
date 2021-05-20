import React, {useEffect, useRef} from 'react'
import { MapContainer, Marker, Popup } from 'react-leaflet'
import { useSelector } from 'react-redux'
import './map.css'

import ListBaseMaps from './ListBaseMaps'
import GeoJsonLayer from './GeoJsonLayer'

export default function LeafletMap() {
  
  const mapRef = useRef();
  const position = [53.105, 107.405]
  const visible = useSelector(state => state.interface.commonVisible)
  const lineParameters = useSelector(state => state.interface.lineParameters)

  useEffect(() => {
    console.log("LeafletMap", {...lineParameters})
  }, [lineParameters])

  return (
    <MapContainer center={position} zoom={7}>
      <ListBaseMaps />
      <Marker position={position}>
        <Popup>Ольхон</Popup>
      </Marker>

      {visible && <GeoJsonLayer lineParameters={lineParameters} ref={mapRef}/> }
      
    </MapContainer>
  )
}





