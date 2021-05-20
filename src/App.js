import React, {Fragment} from 'react'
import L from 'leaflet'
import MenuComponent from './components/MenuComponent'
import LeafletMap from './components/LeafletMap'

// Путь до маркеров
L.Icon.Default.imagePath = "https://unpkg.com/leaflet@1.7.1/dist/images/";

function App() {
  return (
    <Fragment>
      <MenuComponent />
      <LeafletMap />
    </Fragment>
  );
}

export default App;
