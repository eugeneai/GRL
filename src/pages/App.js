import React, {Fragment} from 'react'
import L from 'leaflet'
import MenuComponent from '../components/MenuComponent'
import MapComponent from '../components/LeafletMap'
import InfoComponent from "../components/InfoComponent";

// Путь до маркеров
L.Icon.Default.imagePath = "https://unpkg.com/leaflet@1.7.1/dist/images/";

function App() {
  return (
    <Fragment>
      <MenuComponent />
      <div className="flexWrapper">
        <MapComponent />
        <InfoComponent />
      </div>
    </Fragment>
  );
}

export default App;
