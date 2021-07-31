import React, {useEffect, useState} from 'react';
import {useHistory, useParams} from "react-router-dom";
import {Button, Container, Grid, GridColumn, Header, Icon, List} from "semantic-ui-react";
import {getSingleElement} from "../api";
import ListOfLinks from "../Components/ListOfLinks";

function SinglePeople(props) {
	const {id} = useParams();
	const history = useHistory();
	
	const [person, setPerson] = useState({});
	useEffect( () => {
		getSingleElement('people', id).then(r => setPerson(r))
	}, [id])
	
	return (
		<Container>
			<Grid columns={2}>
				<GridColumn computer={16}>
					<Button primary onClick={() => history.goBack()}><Icon name='arrow left'/> Back</Button>
				</GridColumn>
				<GridColumn computer={4}>
					<ListOfLinks title={'The films list'} linksList={person.films} type={'films'}/>
					<ListOfLinks title={'The starships list'} linksList={person.starships} type={'starships'}/>
					<ListOfLinks title={'The vehicles list'} linksList={person.vehicles} type={'vehicles'}/>
				</GridColumn>
				<GridColumn computer={12}>
					<Header>
						{person.name}
					</Header>
					<List>
						<List.Item>Birth year: {person.birth_year}</List.Item>
						<List.Item>Gender: {person.gender}</List.Item>
						<List.Item>Eye color: {person.eye_color}</List.Item>
						<List.Item>Hair color: {person.hair_color}</List.Item>
						<List.Item>Skin color: {person.skin_color}</List.Item>
					</List>
				</GridColumn>
			</Grid>
		</Container>
	);
}

export default SinglePeople;
