import React, {useEffect} from 'react';
import {useDispatch} from "react-redux";
import {fetchFilms} from "../Store/Films";

function Films() {
	const dispatch = useDispatch();
	useEffect(async () => {
		await dispatch(fetchFilms())
	}, [])
	return (
		<div>
		
		</div>
	);
}

export default Films;
