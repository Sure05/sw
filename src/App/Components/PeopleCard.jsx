import React from 'react';
import {Card, List} from "semantic-ui-react";

function PeopleCard(props) {
	const {people} = props
	return (
		<Card fluid raised={true}>
			<Card.Content header={people.name} />
			<Card.Content description={
				<List>
					<List.Item>Birth year: {people.birth_year}</List.Item>
					<List.Item>Gender: {people.gender}</List.Item>
					<List.Item>Eye color: {people.eye_color}</List.Item>
					<List.Item>Hair color: {people.hair_color}</List.Item>
					<List.Item>Skin color: {people.skin_color}</List.Item>
				</List>
			} />
			{/*<Card.Content extra>Gender: {people.gender}</Card.Content>*/}
			{/*<Card.Content extra>Eye color: {people.eye_color}</Card.Content>*/}
		</Card>
	);
}

function peoplePropsAreEqual(prevMovie, nextMovie) {
	return prevMovie.people.id === nextMovie.people.id;
}
export default React.memo(PeopleCard, peoplePropsAreEqual);
