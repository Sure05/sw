import {createAsyncThunk, createSlice} from "@reduxjs/toolkit"
import swApiModule from "../api";
import {getId} from "../Helper/helper";

export const fetchPeoples = createAsyncThunk(
	'people/fetchPeoples',
	async (page) => {
		return await swApiModule.getPeople({page})
	}
)

const peopleSlice = createSlice({
	name: 'people',
	initialState: {
		loading: false,
		pagination: {
			nextPage: null,
			previousPage: null,
			totalPages: 1,
			currentPage: 1
		},
		peoples: []
	},
	reducers: {},
	extraReducers: {
		[fetchPeoples.pending]: (state) => {
			state.loading = true
		},
		[fetchPeoples.fulfilled]: (state, action) => {
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
			state.peoples = [...results].map(el => {
				return {...el, id: getId(el.url)}
			})
		},
		[fetchPeoples.rejected]: (state) => {
			state.loading = false
		},
	}
})

export default peopleSlice.reducer
