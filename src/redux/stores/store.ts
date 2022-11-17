import {legacy_createStore as createStore, combineReducers, applyMiddleware} from 'redux';
import thunk from "redux-thunk"
import {composeWithDevTools} from "redux-devtools-extension"

import { quoteListReducer } from '../reducer/quoteReducer';

const reducers = combineReducers({
    quoteList: quoteListReducer
})

const middleware = [thunk]

const store = createStore(
    reducers,
    composeWithDevTools(applyMiddleware(...middleware))
)

export default store;