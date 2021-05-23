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
        console.log(array)
        dispatch(tLoad(array))
      }, (error) => {
        console.error(error)
      })
    
  }
}

// const searchRegExp = /duck/g;
// const replaceWith = 'goose';
//
// const result = 'duck duck go'.replace(searchRegExp, replaceWith);
//
// result; // => 'goose goose go'
