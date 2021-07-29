import React from 'react';
import {useParams} from "react-router-dom";

function SingleFilm(props) {
    console.log(props)
    const {id} = useParams();

    return (
        <div>
            single {id}
        </div>
    );
}

export default SingleFilm;
