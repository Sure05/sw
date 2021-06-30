import React, {useEffect} from 'react';
import {useDispatch, useSelector} from "react-redux";
import {fetchFilms} from "../Store/Films";
import {useLocation} from "react-router-dom";
import FilmCard from "../Components/FilmCard";

function Films() {
	const films = useSelector(state => state.films.films);
	const dispatch = useDispatch();
	let location = useLocation();
	useEffect(async () => {
		await dispatch(fetchFilms())
		
	}, [dispatch, location]);
	
	return (
		<div>
			{
				films.map(el =>
					<FilmCard film={el}/>
				)
			}
		</div>
	);
};

export default Films;
