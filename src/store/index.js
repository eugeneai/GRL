import { createStore, combineReducers, applyMiddleware } from 'redux'
import { composeWithDevTools } from 'redux-devtools-extension'
import thunk from 'redux-thunk'

import interfaceReducer from './reducers/interfaceReducer'
import dataReducer from './reducers/dataReducer'
import sparqlReducer from "./reducers/sparqlReducer";


const store = createStore( 
  combineReducers({ 
      interface: interfaceReducer,
      data: dataReducer,
      sparql: sparqlReducer
  }),
  composeWithDevTools(applyMiddleware(thunk))
)

export default store
