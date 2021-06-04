import { createStore, combineReducers, applyMiddleware } from 'redux'
import { composeWithDevTools } from 'redux-devtools-extension'
import thunk from 'redux-thunk'

import geoJsonReducer from './reducers/geoJsonReducer'
import reducer from "./reducers/reducer";


const store = createStore( 
  combineReducers({
      data: geoJsonReducer,
      newr: reducer
  }),
  composeWithDevTools(applyMiddleware(thunk))
)

export default store
