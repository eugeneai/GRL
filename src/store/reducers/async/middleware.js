import {batch} from "react-redux";
import {load_all_data} from "../geoJsonReducer";

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

export const fetchAllIds = (tabId) => {
  
  return (dispatch) => {
    
    const query = `PREFIX rdf:  <http://www.w3.org/1999/02/22-rdf-syntax-ns#>
    PREFIX : <http://192.168.2.2:7200/repositories/ActiveFaults#>
    SELECT ?id
    WHERE
    {
        ?s rdf:type :Fault.
        ?s :ID ?id.
    }`.replace(/ +/g, ' ').trim()
    
    console.log(query)
    
    const encodedQuery = "http://localhost:7200/repositories/ActiveFaults?query=" + encodeURIComponent(query)

    fetch(encodedQuery)
      .then(response => response.text())
      .then(text => text.replace(/\r/g, "").split("\n"))
      .then(array => {
        array.shift()
        array.pop()
        dispatch({type: "SET_TAB_DATA", payload: { newdata: array, tabId: tabId}})
      }, error => {
        console.error(error)
      })
  }
}

export const fetchIdsBy = (tabId, ops, action) => {
  
  const {seismicOption, kinematicLevelOption, historicalAgeOption} = ops;
  
  return (dispatch) => {
    
    const getStringType = (type) => {
      if (type !== "All") {
        return `?s rdf:type :${type}.`
      }
      return ' '
    }
    
    const query = `PREFIX rdf:  <http://www.w3.org/1999/02/22-rdf-syntax-ns#>
    PREFIX : <http://192.168.2.2:7200/repositories/ActiveFaults#>
    SELECT ?id
    WHERE
    {
        ?s rdf:type :Fault.
        ${getStringType(seismicOption)}
        ${getStringType(kinematicLevelOption)}
        ${getStringType(historicalAgeOption)}
        ?s :ID ?id.
    }`.replace(/ +/g, ' ').trim()
    
    
    console.log(seismicOption)
    console.log(query)

    const encodedQuery = "http://localhost:7200/repositories/ActiveFaults?query=" + encodeURIComponent(query)

    fetch(encodedQuery)
      .then(response => response.text())
      .then(text => text.replace(/\r/g, "").split("\n"))
      .then(array => {
        array.shift()
        array.pop()
        batch( () => {
          dispatch({type: "SET_TAB_DATA", payload: { newdata: array, tabId: tabId}})
          dispatch(action)
        })
      }, error => {
        console.error(error)
      })
  }
}

export const fetchInfoByID = (id) => {
  
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
        data => dispatch({type: "SET_INFO_BY_ID", payload: data}),
        error => console.error(error)
      )

  }
}