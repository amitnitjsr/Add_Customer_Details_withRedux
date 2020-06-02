import storage from 'redux-persist/lib/storage'
import { persistCombineReducers } from 'redux-persist'

import BaseReducer from './BaseReducer';

const rootReducer = {
    baseReducer: BaseReducer
}

export const persistConfig = {
    key: 'Project1.0.0',
    storage,
    blacklist: [
        
    ]
}

const appReducer = persistCombineReducers(persistConfig, rootReducer)

const reducer = (state, action) => {
    return appReducer(state, action)
};

export default reducer;