import React, { useEffect, useState, useCallback } from 'react'
import '../App.css';
import MaterialIcon from 'material-icons-react';
import Card from './Card';
import { useSelector, useDispatch } from 'react-redux';
import { getMovieList } from '../actions/index';

const MoviesList = () => {
    let myState = useSelector((state) => state.storeMovieList);
    const dispatch = useDispatch();
    const [searchInput, SetSearchInput] = useState("");
    const [MovieList, SetMovieList] = useState([]);
    const [filteredList, SetFilteredList] = useState([]);

    const initFetch = useCallback(() => {
        dispatch(getMovieList());
    }, [dispatch]);

    useEffect(() => {
        initFetch();
    }, [initFetch]);

    useEffect(() => {
        if(myState && myState.listData){
        SetMovieList(myState.listData)
        SetFilteredList(myState.listData)
    }
    }, [myState.listData]);

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
                <div className="form-group has-search mb-2 ">
                    <div className="form-control-feedback">
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
                        return <Card movieObj={data} key={index} />;
                    })
                }
                {MovieList.length === 0 && <p>No Movie available!</p>}
                {myState.error && !myState.loading && <p>{myState.error}</p>}
            </div>
        </div>
    )
}

export default MoviesList;