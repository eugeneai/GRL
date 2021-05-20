import React from 'react'
import { LayersControl, TileLayer } from 'react-leaflet'

const { BaseLayer } = LayersControl

export default function ListBaseMaps () {
  return (
    <LayersControl>
      <BaseLayer name="osm" checked>
        <TileLayer
          attribution='&copy; <a href="http://osm.org/copyright">OpenStreetMap</a> contributors'
          url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
        />
      </BaseLayer>
      <BaseLayer name="hot">
        <TileLayer
          attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors, Tiles style by <a href="https://www.hotosm.org/" target="_blank">Humanitarian OpenStreetMap Team</a> hosted by <a href="https://openstreetmap.fr/" target="_blank">OpenStreetMap France</a>'
          url="https://{s}.tile.openstreetmap.fr/hot/{z}/{x}/{y}.png"
          maxZoom="19"
        />
      </BaseLayer>
      <BaseLayer name="cycle">
        <TileLayer
          attribution='<a href="https://github.com/cyclosm/cyclosm-cartocss-style/releases" title="CyclOSM - Open Bicycle render">CyclOSM</a> | Map data: &copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
          url="https://dev.{s}.tile.openstreetmap.fr/cyclosm/{z}/{x}/{y}.png"
          maxZoom="20"
        />
      </BaseLayer>
      <BaseLayer name="thunderforest.cycle">
        <TileLayer
          attribution='&copy; <a href="http://www.thunderforest.com/">Thunderforest</a>, &copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
          url="https://{s}.tile.thunderforest.com/cycle/{z}/{x}/{y}.png?apikey=e2ea000f3fd34629bbaebd19a009a660"
          maxZoom="22"
        />
      </BaseLayer>
      <BaseLayer name="thunderforest.landscape">
        <TileLayer
          attribution='&copy; <a href="http://www.thunderforest.com/">Thunderforest</a>, &copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
          url="https://{s}.tile.thunderforest.com/landscape/{z}/{x}/{y}.png?apikey=e2ea000f3fd34629bbaebd19a009a660"
          maxZoom="22"
        />
      </BaseLayer>
      <BaseLayer name="cyclosm">
        <TileLayer
          attribution='<a href="https://github.com/cyclosm/cyclosm-cartocss-style/releases" title="CyclOSM - Open Bicycle render">CyclOSM</a> | Map data: &copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
          url="https://{s}.tile-cyclosm.openstreetmap.fr/cyclosm/{z}/{x}/{y}.png"
          maxZoom="20"
        />
      </BaseLayer>
      <BaseLayer name="Esri.DeLorme">
        <TileLayer
          attribution='Tiles &copy; Esri &mdash; Copyright: &copy;2012 DeLorme'
          url="https://server.arcgisonline.com/ArcGIS/rest/services/Specialty/DeLorme_World_Base_Map/MapServer/tile/{z}/{y}/{x}"
          minZoom="1"
          maxZoom="11"
        />
      </BaseLayer>
      <BaseLayer name="opentopomap">
        <TileLayer
          attribution='Map data: &copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors, <a href="http://viewfinderpanoramas.org">SRTM</a> | Map style: &copy; <a href="https://opentopomap.org">OpenTopoMap</a> (<a href="https://creativecommons.org/licenses/by-sa/3.0/">CC-BY-SA</a>)'
          url="https://{s}.tile.opentopomap.org/{z}/{x}/{y}.png"
          maxZoom="17"
        />
      </BaseLayer>
    </LayersControl>
  )
}
  
