import React, {useState} from "react";

export default function SearchMovie(){
    const [searchVal, setSearchVal] = useState({text:""})

    function updateSearch(e) {
        const {name, value} = e.target
        setSearchVal(prevData => {
            return {
                ...prevData,
                [name]: value
            }
        })
    }
    return (
        <div className="search-cont">
            <label>Search Movie
                <input 
                    type="text"
                    name="text"
                    placeholder="i.e. Jurassic Park"
                    value={searchVal.text}
                    onChange={updateSearch}
                 ></input>
            </label>
            <button>Search</button>
        </div>
    )
}