import { combineReducers } from 'redux';
import pageReducer from './Components/Page/reducer'

const rootReducer = combineReducers({
        Page: pageReducer
});

export default rootReducer;