import React from 'react';

function FilmCard(props) {
	const {film} = props
	return (
		<div>
			{film.title}
			{film.release_date}
		</div>
	);
}

function filmPropsAreEqual(prevMovie, nextMovie) {
	return prevMovie.film.title === nextMovie.film.title
		&& prevMovie.film.release_date === nextMovie.film.release_date;
}
export default React.memo(FilmCard, filmPropsAreEqual);
