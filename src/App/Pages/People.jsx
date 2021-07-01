import React, {useEffect, Fragment} from 'react';
import {useDispatch, useSelector} from "react-redux";
import {useLocation} from "react-router-dom";
import {fetchPeoples} from "../Store/People";
import {Dimmer, Grid, Loader, Pagination} from "semantic-ui-react";
import PeopleCard from "../Components/PeopleCard";

function People() {
	const {peoples, pagination, loading} = useSelector(state => state.people);
	const {currentPage, totalPages} = pagination;
	const dispatch = useDispatch();
	let location = useLocation();
	useEffect(() => {
		dispatch(fetchPeoples(1))
	}, [dispatch, location]);
	
	const handlePaginationChange = async (e, { activePage }) => {
		await dispatch(fetchPeoples(activePage))
	}
	if(loading) {
		return (
			<Dimmer active inverted>
				<Loader>Loading</Loader>
			</Dimmer>
		)
	} else {
		return (
			<Fragment>
				<Grid stackable columns={3} padded>
					{peoples.map(el =>
						<Grid.Column key={el.id}>
							<PeopleCard people={el}/>
						</Grid.Column>
					)}
				</Grid>
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
			
			</Fragment>
		);
	}
	
}

export default People;
