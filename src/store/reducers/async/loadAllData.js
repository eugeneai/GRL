import { load_all_data } from "../dataReducer";
import { tLoad } from '../sparqlReducer'
import urls from './urls'

export const fetchFeatures = () => {
  return (dispatch) => {

    fetch("data.json")
      .then(response => response.json())
      .then(data => {
        dispatch(load_all_data(data.features)) 
      }, (error) => {
        console.error(error);
      });
  }
}

export const fetchSparql = (nameQuery = null) => {
  
  if (nameQuery == null) return (dispatch) => {
    dispatch(tLoad([]))
  }
  
  return (dispatch) => {
    
    fetch(urls[nameQuery])
      .then(response => response.text())
      .then(text => text.replace(/\r/g, "").split("\n"))
      .then(array => {
        array.shift()
        array.pop()
        dispatch(tLoad(array))
      }, (error) => {
        console.error(error)
      })
    
  }
}
