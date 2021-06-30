import {configureStore} from '@reduxjs/toolkit';
import filmsReducer from './Store/Films'
import peopleReducer from './Store/People'

export default configureStore({
	reducer: {
		films: filmsReducer,
		people: peopleReducer
	},
})
