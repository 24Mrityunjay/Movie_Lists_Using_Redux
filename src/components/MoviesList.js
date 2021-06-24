import React, { useEffect, useState } from 'react'
import '../App.css';
import MaterialIcon from 'material-icons-react';
import axios from 'axios';
import Card from './Card';
import { useSelector, useDispatch } from 'react-redux';
import { getMovieList } from '../actions/index';

const MoviesList = () => {
    let myState = useSelector((state)=>state.storeMovieList);
    console.log(myState,"myState")
    const dispatch = useDispatch();
    const [searchInput, SetSearchInput] = useState("");
    const [MovieList, SetMovieList] = useState([]);
    const [filteredList, SetFilteredList] = useState([]);

    useEffect(() => {
        dispatch(getMovieList());
    }, []);

    useEffect(() => {
            SetMovieList(myState.listData)
            SetFilteredList(myState.listData)
    },[]);

    const handleChange = (e) => {
        SetSearchInput(e.target.state);
        const tempList = filteredList && filteredList.filter(list =>
            list.title.toLowerCase().includes(e.target.value.toLowerCase())
        );
        SetMovieList(tempList);
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
                {MovieList.length === 0 && <p>No Movie available!</p>}
                {myState.error && !myState.loading && <p>{myState.error}</p>}
            </div>
        </div>
    )
}

export default MoviesList;