import React, { useEffect, useState } from 'react'
import '../App.css';
import MaterialIcon from 'material-icons-react';
import axios from 'axios';
import Card from './Card';

const MoviesList = () => {
    const [searchInput, SetSearchInput] = useState("");
    const [MovieList, SetMovieList] = useState([]);
    useEffect(() => {
        axios.get('https://api.themoviedb.org/3/movie/550?api_key=c1c3795c8fb649da8436ab9b25950b14')
            .then(response => {
                let list = [response.data];
                console.log(list)
                SetMovieList(list);
            })
            .catch(error => {
                console.log(error)
            })
    }, [])
    const handleChange = (e) => {
        SetSearchInput(e.target.value)
    }
    return (
        <div className="container py-4">
            <div className="header">
                <div class="form-group has-search mb-2 ">
                    <div class="form-control-feedback">
                        <MaterialIcon icon="search" />
                    </div>
                    <input
                        type="text"
                        className="form-control searchInput"
                        placeholder="Enter movie name"
                        name="name"
                        value={searchInput}
                        onChange={e => handleChange(e)}
                    />
                </div>
                <MaterialIcon icon="home" />
            </div>
            <div className="content">
                {
                    MovieList && MovieList.map((data, index) => {
                        return <Card movieObj={data} index={index} />;
                    })
                }
            </div>
        </div>
    )
}

export default MoviesList;