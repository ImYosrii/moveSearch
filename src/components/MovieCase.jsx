import React from "react";


export default function MovieCase(props){
    return (
        <div className="card" key={props.id}>
            <img className="card--image"
                src={`https://image.tmdb.org/t/p/w185_and_h278_bestv2/${props.poster}`}
                alt={props.title + ' poster'}
                />
            <div className="card--content">
            <h3 className="card--title">{props.title}</h3>
            <p><small>RELEASE DATE: {props.releaseDate}</small></p>
            <p><small>RATING: {props.rating}</small></p>

            <p className="card--desc">{props.overview}</p>
            </div>
        </div>
    )
}


















/* 
                {movies.filter(movie => movie.poster_path).map(movie => (
                    <div className="card" key={movie.id}>
                        <img className="card--image"
                            src={`https://image.tmdb.org/t/p/w185_and_h278_bestv2/${movie.poster_path}`}
                            alt={movie.title + ' poster'}
                            />
                        <div className="card--content">
                        <h3 className="card--title">{movie.title}</h3>
                        <p><small>RELEASE DATE: {movie.release_date}</small></p>
                        <p><small>RATING: {movie.vote_average}</small></p>
                        <p className="card--desc">{movie.overview}</p>
                        </div>

*/
/* 
adult
backdrop_path
genre_ids
id
original_language
original_title
overview
popularity
poster_path
release_date
title
video
vote_average
vote_count
*/
