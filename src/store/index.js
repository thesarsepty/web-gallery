import { createStore, combineReducers, applyMiddleware } from 'redux'
import ReduxThunk from 'redux-thunk'
import photosReducer from './reducers/photoReducer'
import loadingReducer from './reducers/loadingReducer'

const reducers = combineReducers({
  photosReducer,
  loadingReducer
})
const middlewares = applyMiddleware(ReduxThunk)

const store = createStore(reducers, middlewares)
// console.log(store);
export default store