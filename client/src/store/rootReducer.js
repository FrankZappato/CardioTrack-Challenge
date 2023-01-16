import { combineReducers } from "redux";

import { reducer as tiresReducer } from '../store/tires/reducer';

const rootReducer = combineReducers({
    tires: tiresReducer,
});

export default rootReducer;