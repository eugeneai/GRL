import { load_all_data } from "../dataReducer";
import { batch } from 'react-redux'
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

export const fetchSparql = ({type, option}) => {
  
  if (option === "All") return (dispatch) => {
    batch(() => {
      dispatch({type: type, payload: []})
      dispatch({type: "INTERSECTION"})
    })
    
  }
  
  return (dispatch) => {
    
    fetch(urls[option])
      .then(response => response.text())
      .then(text => text.replace(/\r/g, "").split("\n"))
      .then(array => {
        array.shift()
        array.pop()
        batch(() => {
          dispatch({type: type, payload: array})
          dispatch({type: "INTERSECTION"})
        })
      }, (error) => {
        console.error(error)
      })
    
  }
}
