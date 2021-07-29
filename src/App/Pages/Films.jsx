import React, {useEffect} from 'react';
import {useDispatch, useSelector} from "react-redux";
import {fetchFilms} from "../Store/Films";
import {useLocation} from "react-router-dom";
import FilmCard from "../Components/FilmCard";
import {Grid} from "semantic-ui-react";

function Films(props) {
	const films = useSelector(state => state.films.films);
	const dispatch = useDispatch();
	let location = useLocation();
	
	useEffect(() => {
		dispatch(fetchFilms())
	}, [dispatch, location]);
	
	return (
		<React.Fragment>
			<Grid columns={3} padded stackable>
				{films.map(el =>
					<Grid.Column key={el.id}>
						<FilmCard film={el}/>
					</Grid.Column>
				)}
			</Grid>
		</React.Fragment>
	);
}

export default Films;
