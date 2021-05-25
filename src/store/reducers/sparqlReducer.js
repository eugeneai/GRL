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
      return {...state, sortedData: { ...state.sortedData, dataBySeismic: [...action.payload] } }

    case "LOAD_DATA_BY_HISTORIC_AGE":
      return {...state, sortedData: { ...state.sortedData, dataByHistoricAge: [...action.payload] } }

    case "LOAD_DATA_BY_KINEMATIC_TYPE":
      return {...state, sortedData: { ...state.sortedData, dataByKinematicType: [...action.payload] } }
    
    // Пересечение множеств
    case "INTERSECTION": {
      
      let filters = []
      for (let dataByOption in state.sortedData) {
        if (state.sortedData[dataByOption].length > 0) {
          filters.push(state.sortedData[dataByOption])
        }
      }
      
      if (filters.length === 0) {
        return {...state, displayedData: []}
      }
      if (filters.length === 1) {
        return {...state, displayedData: filters[0]}
      }


      // data = [array1, array2, array3, array4]
      // result = data.reduce((a, b) => a.filter(c => b.includes(c)));
      
      const result = filters.reduce((a, b) => a.filter(c => b.includes(c)))
      
      return {...state, displayedData: result}
    }
    
    case "CLEAR": {
      return {...state, displayedData: []}
    }
    
    default:
      return state
  }
}

export default sparqlReducer