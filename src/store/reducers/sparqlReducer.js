const initState = {
  displayedData: [],
  sortedData: {
    dataBySeismic: [],
    dataByHistoricAge: [],
    dataByKinematicType: []
  }
  
}

const sparqlReducer = (state = initState, action) => {
  switch (action.type) {
    
    case "LOAD_DATA_BY_SEISMIC":
      return {...state, sortedData: { ...this.state.sortedData, dataBySeismic: action.payload}}

    case "LOAD_DATA_BY_HISTORIC_AGE":
      return {...state, sortedData: { ...this.state.sortedData, dataByHistoricAge: action.payload}}

    case "LOAD_DATA_BY_KINEMATIC_TYPE":
      return {...state, sortedData: { ...this.state.sortedData, dataByKinematicType: action.payload}}
    
    // Пересечение множеств
    case "INTERSECTION": {
      
      let filters = []
      for (let dataByOption in state.sortedData) {
        if (dataByOption.length > 0) {
          filters.push(dataByOption)
        }
      }
      
      if (filters.length === 0) {
        return {...state, displayedData: []}
      }
      if (filters.length === 1) {
        return {...state, displayedData: filters[0]}
      }

      let result = filters.shift()
      for (const f in filters) {
        result.filter(id => f.includes(id))
      }
      
      return {...state, displayedData: result}
    }
    
    case "CLEAR": {
      return {...state, displayedData: []}
    }
    
    default:
      return state
  }
}

export const tLoad = (payload) => ({type: "LOAD", payload})

export default sparqlReducer