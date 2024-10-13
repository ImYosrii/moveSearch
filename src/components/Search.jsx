import React, {useState, useEffect} from "react";
import MovieCase from "./MovieCase";

export default function SearchMovie(){
    const [searchVal, setSearchVal] = useState({text:""})
    const [moviesData, setMoviesData] = useState([])

    function updateSearch(e) {
        const {name, value} = e.target
        setSearchVal(prevData => {
            return {
                ...prevData,
                [name]: value
            }
        })
    }
    
    async function getMovieData(){
        const url = `https://api.themoviedb.org/3/search/movie?api_key=a87f0643d12e321a96eeaee442ce84fb&language=en-US&query=${searchVal.text}&page=1`;

        try{
            const res = await fetch(url)
            const data = await res.json()
            console.log(data)
            setMoviesData(data.results)
        }
        catch(error){
            console.log(error)
        }finally{
            setSearchVal(prevData => {
                return {
                    ...prevData,
                    text: ''
                }
            })
        }
    }

    const moviesList = moviesData.length ? moviesData.filter(movie => movie.poster_path)
                                  .map(movie => <MovieCase
                                                    key={movie.id}  
                                                    title={movie.title}
                                                    poster={movie.poster_path}
                                                    releaseDate={movie.release_date}
                                                    rating={movie.vote_average}
                                                    overview={movie.overview}
                                                />) : ""

    return (
        <>
            <div className="search-cont">
                    <input 
                        className="text-input"
                        type="text"
                        name="text"
                        placeholder="i.e. Jurassic Park"
                        value={searchVal.text}
                        onChange={updateSearch}
                        aria-label="Movie Name"
                        ></input>
                <button 
                    className="search-btn"
                    onClick={getMovieData}    
                    >Search</button>
            </div>
            <div className="movies-cont">
                {moviesData.length > 0 && moviesList}
            </div>
        </>
    )
}