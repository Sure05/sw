import {createAsyncThunk, createSlice} from "@reduxjs/toolkit"
import swApiModule from "../api";
import {getId} from "../Helper/helper";

const url = 'films';

export const fetchFilms = createAsyncThunk('films/fetchFilms',
	async (page = null) => {
		let additionalData = '';
		if(page !== null)
			additionalData += `?page=${page}`
		return await swApiModule.get(`${url}${additionalData}`).then(res => res.data)
	}
)

const filmsSlice = createSlice({
	name: 'films',
	initialState: {
		loading: false,
		pagination: {
			nextPage: null,
			previousPage: null,
			totalPages: 1,
			currentPage: 1
		},
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
				console.log(action.payload)
				const {next, previous, count, results} = action.payload;
				state.loading = false;
				if(count > 10) {
					const nextPage = getId(next) ?? null;
					const previousPage = getId(previous) ?? null;
					let currentPage = 1;
					if(nextPage !== null) {
						currentPage = nextPage - 1
					} else {
						if(previousPage !== null){
							currentPage = previousPage + 1
						}
					}
					state.pagination = {
						...state.pagination,
						nextPage,
						previousPage,
						totalPages: Math.ceil(count / 10 ),
						currentPage
					}
				} else {
					state.pagination = {
						...state.pagination,
						totalPages: 1
					}
				}
				state.films = [...results].map(el => {
					return {...el, id: getId(el.url)}
				})
			})
			.addCase(fetchFilms.rejected, (state, action) => {
				state.loading = false;
				state.error = action.payload
			})

	}
})
export default filmsSlice.reducer
