import { applyMiddleware, combineReducers, createStore } from 'redux'
import thunk from 'redux-thunk'
import {
  contactReducer
} from './reducers'

const rootReducer = combineReducers({
  contact: contactReducer,
})

const store = createStore(rootReducer, applyMiddleware(thunk))

export default store