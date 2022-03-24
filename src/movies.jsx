import React from "react";
import PropTypes from 'prop-types' //yarn add prop-types
import './movie.css';

function Movie({id, year, title, summary, poster}){
    return(
        <div className="movie">
            <img src = {poster} alt={title} />
            <div>
             <h5 className="movie__title">영화 :{title}</h5>
             <h5 className="movie__year">제작년도 :{year}</h5>
             <h5 className="movie__genres">{summary}</h5>
            </div>
        </div>
    );
}
// 유효성검사
Movie.PropTypes = {
    id:PropTypes.number.isRequired,
    year:PropTypes.number.isRequired,
    title:PropTypes.string.isRequired,
    summary:PropTypes.string.isRequired,
    poster:PropTypes.string.isRequired,
}

export default Movie;