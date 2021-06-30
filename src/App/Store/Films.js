import {createAsyncThunk, createSlice} from "@reduxjs/toolkit"
import swApiModule from "../api";
import {getId} from "../Helper/helper";

export const fetchFilms = createAsyncThunk(
	'films/fetchAll',
	async () => {
		return await swApiModule.getFilms()
	}
)

export const filmsSlice = createSlice({
	name: 'films',
	initialState: {
		loading: false,
		films: [],
		error: ''
	},
	reducers: {},
	extraReducers: (builder) => {
		builder
			.addCase(fetchFilms.pending, (state, action) => {
				state.loading = true;
				state.films = [];
			})
			.addCase(fetchFilms.fulfilled, (state, action) => {
				state.loading = false;
				state.films = [...action.payload.results].map( el => {
					return {...el, id: getId(el.url)}
				});
			})
			.addCase(fetchFilms.rejected, (state, action) => {
				state.loading = false;
			})
		
	}
})

export default filmsSlice.reducer
