import React from 'react';
import { useHistory } from "react-router-dom";
const Card = ({ movieObj, index }) => {
    let history = useHistory();
    let posterUrl = 'https://image.tmdb.org/t/p/original';
    const handleClick = (e) => {
        // history.push('/details');
        history.push({
            pathname: '/details',
            state: { detail: movieObj }
        })
    }
    return (
        <div className="card-wrapper mr-3" onClick={handleClick}>
            <div className="task-holder">
                <img src={`${posterUrl + movieObj.poster_path}`} alt="logo" style={{ "borderRadius": "10px 10px 0px 0px", "height": "50%" }} />
                <div className="movieName">
                    <span className="card-header">{movieObj.title}</span>
                    <span className="ratings">{`Rating: ${movieObj.vote_average}`}</span>
                </div>
                <span className="desc">{`Description: ${movieObj.overview}`}</span>
            </div>
        </div>
    );
};

export default Card;