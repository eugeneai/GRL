import {historicalAgeOptions, kinematicLevelOptions, seismicOptions} from '../staticData'


const initState = {
  countTabs: 2,
  activeTab: 0,
  tabs: [
    {
      id: 0,
      color: "#F36161",
      name: "г1"
    },
    {
      id: 1,
      color: "#9292F6",
      name: "г2"
    }
  ],
  options: [
    {
      visible: true,
      id: 0,
      lineWidth: 1,
      age: historicalAgeOptions[0],
      kinematic: kinematicLevelOptions[0],
      seismic: seismicOptions[0],
      color: "#F36161",
      ids: []
    },
    {
      visible: false,
      id: 1,
      lineWidth: 5,
      age: historicalAgeOptions[0],
      kinematic: kinematicLevelOptions[0],
      seismic: seismicOptions[0],
      color: "#9292F6",
      ids: [],
    },
  ],
  rightBar: {}
}

const newReducer = (state = initState, action) => {
  switch (action.type) {

    case "SET_ACTIVE_TAB": return {...state, activeTab: action.payload}
    
    case "SET_LINE_WIDTH":
      return {
        ...state,
        // eslint-disable-next-line array-callback-return
        options: state.options.map(ops => {
          if(ops.id === state.activeTab) {
            return {
              ...ops,
              lineWidth: action.payload
            }
          } 
          return ops
        })
      }
      
    case "SET_ACTIVE_LAYER":
      return {
        ...state,
        // eslint-disable-next-line array-callback-return
        options: state.options.map(ops => {
          if(ops.id === state.activeTab) {
            return {
              ...ops,
              visible: !ops.visible
            }
          }
          return ops
        })
      }
    
    case "SET_SEISMIC":
      return {
        ...state,
        // eslint-disable-next-line array-callback-return
        options: state.options.map(ops => {
          if(ops.id === state.activeTab) {
            return {
              ...ops,
              seismic: action.payload
            }
          }
          return ops
        })
      }

    case "SET_KINEMATIC":
      return {
        ...state,
        // eslint-disable-next-line array-callback-return
        options: state.options.map(ops => {
          if(ops.id === state.activeTab) {
            return {
              ...ops,
              kinematic: action.payload
            }
          }
          return ops
        })
      }    

    case "SET_AGE":
      return {
        ...state,
        // eslint-disable-next-line array-callback-return
        options: state.options.map(ops => {
          if(ops.id === state.activeTab) {
            return {
              ...ops,
              age: action.payload
            }
          }
          return ops
        })
      }  
    
    case "SET_COLOR_FOR_ACTIVE_LAYER":
      return {
        ...state,
        tabs: state.tabs.map(tab => {
          if(tab.id === state.activeTab) {
            return {
              ...tab,
              color: action.payload
            }
          }
          return tab
        }),
        options: state.options.map(ops => {
          if(ops.id === state.activeTab) {
            return {
              ...ops,
              color: action.payload
            }
          }
          return ops
        })
      }
    
    default:
      return state
  }
}

export default newReducer