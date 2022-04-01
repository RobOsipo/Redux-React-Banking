
import { combineReducers } from Redux;
import accountReducer from './accountReducer.js'


const reducers = combineReducers({
    account: accountReducer
})

export default reducers



