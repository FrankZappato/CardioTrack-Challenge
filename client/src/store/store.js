import { configureStore } from '@reduxjs/toolkit';
import logger from 'redux-logger';
import thunkMiddleware from 'redux-thunk';
import rootReducer from './rootReducer';


const store = configureStore({
    middleware: [logger, thunkMiddleware],
    reducer: rootReducer,
});

export default store;