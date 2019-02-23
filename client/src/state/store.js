import { createStore, applyMiddleware, compose } from 'redux'
import createSagaMiddleware from 'redux-saga'
import mainReducer from './reducers/main'
import mainSaga from './sagas/main'

const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose
const sagaMiddleware = createSagaMiddleware()
const store = createStore(mainReducer, composeEnhancers(applyMiddleware(sagaMiddleware)))
sagaMiddleware.run(mainSaga)

export default store
