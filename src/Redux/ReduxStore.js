import {applyMiddleware, createStore} from 'redux'
import {navReducer} from './Reducer';
import { combineReducers } from 'redux';
import thunk from 'redux-thunk';
import { notesApi } from './NotesReducer1';

const reducer = combineReducers({
	navReducer,notesApi
});

const store = createStore(reducer,applyMiddleware(thunk))

export default store;
