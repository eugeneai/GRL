import { load_all_data } from "../dataReducer";

export const fetchFeatures = () => {
  return (dispatch) => {

    fetch("geojson.json")
      .then(response => response.json())
      .then(data => {
        dispatch(load_all_data(data.features)) 
      }, (error) => {
        console.error(error);
      });
  }
}