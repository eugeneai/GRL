const initState = {
  features: []
}

const dataReducer = (state = initState, action) => {
  switch (action.type) {
    case "LOAD_ALL_DATA":
      return { ...state, features: [...action.payload]}
    default:
      return state 
  }
}

export const load_all_data = (payload) => ({type: "LOAD_ALL_DATA", payload})

export default dataReducer
