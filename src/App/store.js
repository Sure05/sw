import {configureStore} from '@reduxjs/toolkit';
import filmsReducer from './Store/Films'
export default configureStore({
	reducer: {
		films: filmsReducer
	}
})
