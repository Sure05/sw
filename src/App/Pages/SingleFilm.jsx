import React, {useEffect, useState} from 'react';
import {useHistory, useParams} from "react-router-dom";
import {Button, Container, Dimmer, Icon, List, Loader} from "semantic-ui-react";

import swApiModule from "../api";
import CharacterList from "../Components/CharacterList";

const getSingleFilm = async (id) => await swApiModule.get(`films/${id}`).then(res => res).catch(error => error)

function SingleFilm() {
	const {id} = useParams();
	const [filmData, setFilmData] = useState({});
	useEffect(async () => {
		const data = await getSingleFilm(id).then(res => res.data).catch(err => err);
		setFilmData(data)
	}, [])
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
				<Button primary onClick={() => history.goBack()}><Icon name='arrow left'/> Back</Button>
				single {id}
				<CharacterList characters={filmData.characters}/>
			
			</Container>
		);
	}
}

export default SingleFilm;
