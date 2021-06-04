import {historicalAgeOptions, kinematicLevelOptions, seismicOptions} from '../staticData'


const initState = {
  countTabs: 2,
  activeTab: 0,
  tabs: [
    {
      name: "г1",
      visible: false,
      id: 0,
      lineWidth: 1,
      age: historicalAgeOptions[0],
      kinematic: kinematicLevelOptions[0],
      seismic: seismicOptions[0],
      color: "#F36161",
      data: [],
    },
    {
      name: "г2",
      visible: false,
      id: 1,
      lineWidth: 5,
      age: historicalAgeOptions[0],
      kinematic: kinematicLevelOptions[0],
      seismic: seismicOptions[0],
      color: "#9292F6",
      data: [],
    },
  ]
}

const reducer = (state = initState, action) => {
  switch (action.type) {

    case "SET_ACTIVE_TAB": return {...state, activeTab: action.payload}
    
    case "TOGGLE_ACTIVE_TAB": 
      return {
        ...state,
        tabs: state.tabs.map(tab => {
          if (tab.id === state.activeTab) {
            return {
              ...tab,
              visible: !tab.visible
            }
          }
          return tab
        })
      }
    
    case "SET_TAB_DATA": 
      const {newdata, tabId} = action.payload
      return {
        ...state,
        // eslint-disable-next-line array-callback-return
        tabs: state.tabs.map(tab => {
          if (tab.id === tabId) {
            return {
              ...tab,
              data: newdata
            }
          }
          return tab
        })
      }
      
    case "SET_LINE_WIDTH":
      return {
        ...state,
        // eslint-disable-next-line array-callback-return
        tabs: state.tabs.map(tab => {
          if(tab.id === state.activeTab) {
            return {
              ...tab,
              lineWidth: action.payload
            }
          } 
          return tab
        })
      }
      
    case "SET_ACTIVE_LAYER":
      return {
        ...state,
        // eslint-disable-next-line array-callback-return
        tabs: state.tabs.map(tab => {
          if(tab.id === state.activeTab) {
            return {
              ...tab,
              visible: !tab.visible
            }
          }
          return tab
        })
      }
    
    case "SET_SEISMIC":
      return {
        ...state,
        // eslint-disable-next-line array-callback-return
        tabs: state.tabs.map(tab => {
          if(tab.id === state.activeTab) {
            return {
              ...tab,
              seismic: action.payload
            }
          }
          return tab
        })
      }

    case "SET_KINEMATIC":
      return {
        ...state,
        // eslint-disable-next-line array-callback-return
        tabs: state.tabs.map(tab => {
          if(tab.id === state.activeTab) {
            return {
              ...tab,
              kinematic: action.payload
            }
          }
          return tab
        })
      }    

    case "SET_AGE":
      return {
        ...state,
        // eslint-disable-next-line array-callback-return
        tabs: state.tabs.map(tab => {
          if(tab.id === state.activeTab) {
            return {
              ...tab,
              age: action.payload
            }
          }
          return tab
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
        })
      }
    
    default:
      return state
  }
}

export default reducer