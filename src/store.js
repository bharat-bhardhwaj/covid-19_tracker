import {createStore,combineReducers,applyMiddleware} from 'redux';

import thunk from 'redux-thunk';
import {composeWithDevTools} from 'redux-devtools-extension';
import {getAllDataReducer} from './reducers/getAllDataReducer';
import {getStateDataReducer} from './reducers/getStateDataReducer'

const reducer= combineReducers({
getAllDataReducer:getAllDataReducer,
getStateDataReducer:getStateDataReducer
})

const initialState = {

}

const middleware =[thunk];
const store = createStore(
    reducer,
    initialState,
    composeWithDevTools(applyMiddleware(...middleware))
)

export default store;