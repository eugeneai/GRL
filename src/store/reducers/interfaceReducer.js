const initState = {
  commonVisible: false,
  lineParameters: {
    color: "red",
    weight: 1,
    opacity: 0.8,
  }
}

const interfaceReducer = (state = initState, action) => {
  switch (action.type) {
    case "TOOGLE_VISIBLE":
      return {...state, commonVisible: !state.commonVisible}
    case "CHANGE_WEIGHT":
      return {...state, lineParameters: {...state.lineParameters, weight: action.payload}}
    default:
      return state 
  }
}

export default interfaceReducer