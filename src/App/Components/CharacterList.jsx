import React, {useEffect, useState} from 'react';
import {Card, Dimmer, List, Loader} from "semantic-ui-react";
import swApiModule from "../api";

import './charactersList.css'

const getSinglePeople = async (id) => {
	return await swApiModule.get(`people/${id}`).then(res => res.data).catch(error => error)
};

function CharacterList(props) {
	const [charactersList, setCharactersList] = useState([]);
	useEffect(async () => {
		const characters = props.characters.map(data => {
			const urlArray = data.split('/');
			const id = urlArray[urlArray.length - 2]
			return getSinglePeople(id)
		})
		const list = await Promise.all(characters).then(res => res);
		setCharactersList(list)
	}, [props])
	return (
		<Card className="charactersList">
			<Card.Content>
				{
					(Object.keys(charactersList).length === 0)
						? <Dimmer active><Loader content='Loading'/></Dimmer>
						: <>
							The character list:
							<List>
								{
									charactersList.length > 0 ? charactersList.map((el, index) => (
										<List.Item key={index}>
											<List.Content>
												<List.Header as='a'>{el.name}</List.Header>
											</List.Content>
										</List.Item>
									)) : ''
								}
							</List>
						</>
				}
			</Card.Content>
		</Card>
	)
}

export default CharacterList;
