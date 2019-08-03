import { createStore, combineReducers } from 'redux';
import counter from './reducers/counter';

const store = createStore(
    combineReducers({
        counter
    }),
    window.__REDUX_DEVTOOLS_EXTENSION__()
)

export default store;