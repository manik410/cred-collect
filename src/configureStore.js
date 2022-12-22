import createSagaMiddleware from 'redux-saga'
import { createStore, applyMiddleware, compose } from 'redux';
import rootReducer from './redux/ducks';
import rootSaga from './redux/sagas';
import { persistStore, persistReducer } from 'redux-persist'
import storage from 'redux-persist/lib/storage'
import { whitelisted } from './redux/ducks/index'

const persistConfig = {
  key: 'root',
  storage,
  whitelist: [...whitelisted]
}
const persistedReducer = persistReducer(persistConfig, rootReducer)

const sagaMiddleware = createSagaMiddleware();

const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;

export const store = createStore(
  persistedReducer,
  composeEnhancers(
    applyMiddleware(sagaMiddleware),
  )
);
sagaMiddleware.run(rootSaga);
export const persistor = persistStore(store)