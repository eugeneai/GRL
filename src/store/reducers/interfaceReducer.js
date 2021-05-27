const initState = {
  commonVisible: false,
  lineParameters: {
    color: "#AD4725",
    weight: 1,
    opacity: 0.8,
  },
  infoBlock: {
    visible: false,
    id: "",
    data: []
  }
}

const interfaceReducer = (state = initState, action) => {
  switch (action.type) {
    
    case "TOOGLE_VISIBLE":
      return {...state, commonVisible: !state.commonVisible}
    
    case "CLOSE_INFO_BLOCK":
      return {...state, infoBlock: {...state.infoBlock, visible: false}}
    
    case "SET_INFO_BLOCK":
      return {...state, infoBlock: action.payload}

    case "CHANGE_WEIGHT":
      return {...state, lineParameters: {...state.lineParameters, weight: action.payload}}
    
    case "CHANGE_COLOR":
      return {...state, lineParameters: {...state.lineParameters, color: action.payload}}
    
    default:
      return state 
  }
}

export default interfaceReducer