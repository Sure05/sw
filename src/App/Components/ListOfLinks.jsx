import React, {useEffect, useState} from 'react';
import {Card, Dimmer, List, Loader} from "semantic-ui-react";
import {getSingleElement} from "../api";
import {getId} from "../Helper/helper";
import {Link} from "react-router-dom";

import './charactersList.css'

function ListOfLinks(props) {
	const [listData, setListData] = useState([]);
	useEffect(() => {
		if(props.linksList){
			async function fetchData() {
				const data = props.linksList.map(data => getSingleElement(props.type, getId(data)))
				return await Promise.all(data).then(res => res)
			}
			fetchData().then(res => setListData(res));
		}
		
	}, [props])
	if(props.linksList && props.linksList.length > 0){
		return (
			<Card className="charactersList">
				<Card.Content>
					{
						(Object.keys(listData).length === 0 )
							? <Dimmer active><Loader content='Loading'/></Dimmer>
							: <>
								{props.title}:
								<List>
									{
										listData.length > 0 ? listData.map((el, index) => (
											<List.Item key={index}>
												<List.Content>
													<List.Header>
														<Link to={`/${props.type}/${getId(el.url)}`}>{el.name ?? el.title}</Link>
													</List.Header>
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
	} else {
		return (<></>)
	}
}

export default ListOfLinks;
