import React, {useState, useEffect} from "react";
import MovieCase from "./MovieCase";

export default function SearchMovie(){
    const [searchVal, setSearchVal] = useState({text:""})
    const [moviesData, setMoviesData] = useState("")

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
        const url = `https://api.themoviedb.org/3/search/movie?api_key=a87f0643d12e321a96eeaee442ce84fb&language=en-US&query=${searchVal}&page=1&include_adult=false`;

        try{
            const res = await fetch(url)
            const data = await res.json();
            setMoviesData(data)
            console.log(data)
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

            </div>
        </>
    )
}