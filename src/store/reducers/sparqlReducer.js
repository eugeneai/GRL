const initState = {
  test: []
}

const sparqlReducer = (state = initState, action) => {
  switch (action.type) {
    case "LOAD":
      return {...state, test: action.payload}
    
    // Пересечение множеств
    case "INTERSECTION": {
      return {...state, test: this.state.test.filter(id => action.payload.includes(id))}
    }
    
    case "CLEAR": {
      return {...state, test: []}
    }
    
    default:
      return state
  }
}

export const tLoad = (payload) => ({type: "LOAD", payload})

export default sparqlReducer