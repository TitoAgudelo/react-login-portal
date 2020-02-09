import { createStore, applyMiddleware } from 'redux';
import thunkMiddleware from 'redux-thunk';
import rootReducer from '../reducers';
import logger from 'redux-logger';

const initialState = {};

export const store = createStore(
  rootReducer,
  initialState,
  applyMiddleware(thunkMiddleware, logger)
);
