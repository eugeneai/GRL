import {batch} from "react-redux";

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