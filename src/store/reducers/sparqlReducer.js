const initState = {
  test: []
}

const sparqlReducer = (state = initState, action) => {
  switch (action.type) {
    case "Load":
      return {...state, test: action.payload}
    default:
      return state
  }
}

export const tLoad = (payload) => ({type: "Load", payload})

export default sparqlReducer