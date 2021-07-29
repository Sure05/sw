import React, {useEffect} from 'react';
import {connect} from "react-redux";
import {fetchFilms} from "../Store/Films";
import FilmCard from "../Components/FilmCard";
import {Dimmer, Grid, Loader} from "semantic-ui-react";

function Films(props) {
	const {films, filmsList, loading} = props;
	
	useEffect(() => {
		films()
	}, []);
	
	if(loading) {
		return (
			<Dimmer active inverted>
				<Loader>Loading</Loader>
			</Dimmer>
		)
	} else {
		return (
			<React.Fragment>
				<Grid columns={3} padded stackable>
					{filmsList.map(el =>
						<Grid.Column key={el.id}>
							<FilmCard film={el}/>
						</Grid.Column>
					)}
				</Grid>
			</React.Fragment>
		);
	}
}

// export default Films;
const mapStateToProps = (state) => {
	return {
		filmsList: state.films.films,
		loading: state.films.loading
	}
}

const mapDispatchToProps = (dispatch) => {
	return {
		films: () => {
			dispatch(fetchFilms())
		}
	}
}

const memoizeFilms = connect(
	mapStateToProps,
	mapDispatchToProps
)(Films)

export default memoizeFilms
