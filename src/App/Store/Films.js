import {createAsyncThunk, createSlice} from "@reduxjs/toolkit"
import swApiModule from "../api";
import {getId} from "../Helper/helper";

export const fetchFilms = createAsyncThunk('films/fetchFilms', async () =>
	await swApiModule.get('films').then(res => res.data.results).catch(error => error)
)

const filmsSlice = createSlice({
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
				console.log(action)
				state.loading = false;
				state.films = [...action.payload].map( el => {
					return {...el, id: getId(el.url)}
				});
			})
			.addCase(fetchFilms.rejected, (state, action) => {
				state.loading = false;
			})

	}
})
export default filmsSlice.reducer
