import { createStore, combineReducers, applyMiddleware } from 'redux'
import { composeWithDevTools } from 'redux-devtools-extension'
import thunk from 'redux-thunk'

import dataReducer from './reducers/dataReducer'
import newReducer from "./reducers/newReducer";


const store = createStore( 
  combineReducers({
      data: dataReducer,
      newr: newReducer
  }),
  composeWithDevTools(applyMiddleware(thunk))
)

export default store
