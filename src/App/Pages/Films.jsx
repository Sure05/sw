import React, {useEffect} from 'react';
import {connect} from "react-redux";
import {fetchFilms} from "../Store/Films";
import FilmCard from "../Components/FilmCard";
import {Dimmer, Grid, Loader, Pagination} from "semantic-ui-react";

function Films(props) {
	const {films, filmsList, loading, pagination} = props;
	const {currentPage, totalPages} = pagination;
	
	const handlePaginationChange = async (e, {activePage}) => {
		films(activePage)
	}
	useEffect(() => {
		films(1)
	}, );
	
	if (loading) {
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
				{totalPages > 1 ? (
					<Grid columns={1} padded>
						<Grid.Column>
							<Pagination
								boundaryRange={0}
								ellipsisItem={null}
								siblingRange={2}
								onPageChange={handlePaginationChange}
								activePage={currentPage}
								totalPages={totalPages}
							/>
						</Grid.Column>
					</Grid>
				) : <></>}
			</React.Fragment>
		);
	}
}

// export default Films;
const mapStateToProps = (state) => {
	return {
		filmsList: state.films.films,
		loading: state.films.loading,
		pagination: state.films.pagination
	}
}

const mapDispatchToProps = (dispatch) => {
	return {
		films: (page) => {
			dispatch(fetchFilms(page))
		}
	}
}

const memoizeFilms = connect(
	mapStateToProps,
	mapDispatchToProps
)(Films)

export default memoizeFilms
