import React from 'react';
import {Card} from "semantic-ui-react";

function FilmCard(props) {
	const {film} = props
	return (
		<Card fluid raised={true}>
			<Card.Content header={`Episode ${film.episode_id}: ${film.title}`} />
			<Card.Content description={film.opening_crawl} />
			<Card.Content extra>{film.release_date}</Card.Content>
		</Card>
	);
}

function filmPropsAreEqual(prevMovie, nextMovie) {
	return prevMovie.film.title === nextMovie.film.title
		&& prevMovie.film.release_date === nextMovie.film.release_date;
}
export default React.memo(FilmCard, filmPropsAreEqual);