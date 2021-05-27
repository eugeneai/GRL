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

export const fetchInfoByID = (id) => {
  
  console.log("id", id)
  
  return (dispatch) => {
    const query = `PREFIX rdf: <http://www.w3.org/1999/02/22-rdf-syntax-ns#>
    PREFIX : <http://192.168.2.2:7200/repositories/ActiveFaults#>
    PREFIX rdfs: <http://www.w3.org/2000/01/rdf-schema#>
    SELECT ?label ?o
    WHERE { 
        :${id} ?p ?o.
        ?p rdfs:label ?label FILTER (langMatches(lang(?label), "ru")).
    }`.replace(/ +/g, ' ').trim()

    const encodedQuery = "http://localhost:7200/repositories/ActiveFaults?query=" + encodeURIComponent(query)

    fetch(encodedQuery)
      .then(response => response.text())
      .then(data => {
        console.log("data: ", data)
        const array = data.replace(/\r/g, "").split("\n")
        for (let num in array) {
          const border = array[num].indexOf(",")
          const nameProp = array[num].slice(0, border)
          const valueProp = array[num].slice(border+1)
          array[num] = [nameProp, valueProp]
        }
        array.shift()
        array.pop()
        console.log("array: ", array)
        return array
      })
      .then(
        data => dispatch({type: "SET_INFO_BLOCK", payload: {visible: true, id, data}}),
        error => console.error(error)
      )

  }
}
