import React from 'react';
import {Card, Header} from "semantic-ui-react";
import {Link} from "react-router-dom";

import './FilmCard.css'


function FilmCard(props) {
	const {film} = props;
	return (
		<Card fluid raised={true}>
			<Header as='h3' className="headerStyle">
				<Link to={`/films/${film.episode_id}`}><Card.Content header={`Episode ${film.episode_id}: ${film.title}`} /></Link>
			</Header>
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
