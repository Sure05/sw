import {createSlice, createAsyncThunk} from "@reduxjs/toolkit"
import swApiModule from "../api";

export const fetchFilms = createAsyncThunk(
	'films/fetchAll',
	async () => {
		return await swApiModule.getPeople(10, (data) => {
			console.log(data)
		})
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
				state.films = action.payload.results;
			})
			.addCase(fetchFilms.rejected, (state, action) => {
				state.loading = false;
			})
		
	}
})

export default filmsSlice.reducer
