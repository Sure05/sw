import {createSelector} from 'reselect'

const films = state => state.films;

export const getFilms = createSelector(films, films => films)
