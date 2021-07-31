import React, {useEffect, useState} from 'react';
import {useHistory, useParams} from "react-router-dom";
import {Button, Container, Dimmer, Grid, GridColumn, Header, Icon, List, Loader} from "semantic-ui-react";
import ListOfLinks from "../Components/ListOfLinks";
import {getSingleElement} from "../api";


function SingleFilm() {
	const {id} = useParams();
	const [filmData, setFilmData] = useState({});
	useEffect(() => {
		async function fetchData(){
			return await getSingleElement('films', id);
		}
		fetchData().then(r => setFilmData(r))
	}, [id])
	const history = useHistory()
	if (Object.keys(filmData).length === 0) {
		return (
			<Dimmer active inverted>
				<Loader>Loading</Loader>
			</Dimmer>
		)
	} else {
		return (
			<Container>
				<Grid columns={2}>
					<GridColumn computer={16}>
						<Button primary onClick={() => history.goBack()}><Icon name='arrow left'/> Back</Button>
					</GridColumn>
					<GridColumn computer={4}>
						<ListOfLinks title={'The characters list'} linksList={filmData.characters} type={'people'}/>
						<ListOfLinks title={'The planets list'} linksList={filmData.planets} type={'planets'}/>
						<ListOfLinks title={'The starships list'} linksList={filmData.starships} type={'starships'}/>
						<ListOfLinks title={'The vehicles list'} linksList={filmData.vehicles} type={'vehicles'}/>
						<ListOfLinks title={'The species list'} linksList={filmData.species} type={'species'}/>
					</GridColumn>
					<GridColumn computer={12}>
						<Header>
							Episode {filmData.episode_id}: {filmData.title}
						</Header>
						<List>
							<List.Item>Director: {filmData.director}</List.Item>
							<List.Item>Producer: {filmData.producer}</List.Item>
							<List.Item>Release date: {filmData.release_date}</List.Item>
							<List.Item>Opening crawl: {filmData.opening_crawl}</List.Item>
						</List>
					</GridColumn>
				</Grid>
			</Container>
		);
	}
}

export default SingleFilm;
