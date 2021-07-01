import {configureStore} from '@reduxjs/toolkit';
import filmsReducer from './Store/Films'
import peopleReducer from './Store/People'
import thunk from "redux-thunk";

export default configureStore({
	reducer: {
		films: filmsReducer,
		people: peopleReducer
	},
	middleware: [thunk],
})
