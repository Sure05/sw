import {createAsyncThunk, createSlice} from "@reduxjs/toolkit"
import swApiModule from "../api";
import {getId} from "../Helper/helper";

export const fetchFilms = createAsyncThunk('films/fetchFilms', async () => {
	const response = await swApiModule.getFilms()
	return response.results
})

const filmsSlice = createSlice({
	name: 'films',
	initialState: {
		loading: false,
		films: [],
		error: ''
	},
	reducers: {},
	extraReducers: {
		[fetchFilms.fulfilled]: (state, action) => {
			state.loading = false;
			state.films = [...action.payload].map(el => {
				return {...el, id: getId(el.url)}
			});
		},
	},
	// extraReducers: (builder) => {
	// 	builder
	// 		.addCase(fetchFilms.pending, (state, action) => {
	// 			state.loading = true;
	// 			state.films = [];
	// 		})
	// 		.addCase(fetchFilms.fulfilled, (state, action) => {
	// 			state.loading = false;
	// 			state.films = [...action.payload].map( el => {
	// 				return {...el, id: getId(el.url)}
	// 			});
	// 		})
	// 		.addCase(fetchFilms.rejected, (state, action) => {
	// 			state.loading = false;
	// 		})
	//
	// }
})
// export const {fetchFilms} = filmsSlice.actions
export default filmsSlice.reducer
