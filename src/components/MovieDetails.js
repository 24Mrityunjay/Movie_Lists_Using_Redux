import React from 'react'
import '../App.css';

const MovieDetails = (props) => {
  let posterUrl = 'https://image.tmdb.org/t/p/original';
  const data = props.location.state.detail;
  const dateFormat = (date) => {
    // var dateFormat = require('dateformat');
    var year = date.slice(0, 4)
    return year;
    // dateFormat(now, "dddd, mmmm dS, yyyy, h:MM:ss TT");
  }

  const timeFormat = (time) => {
    const min = time % 60;

    const hour = (time-min)/60;
    
    var HHMM = hour.toString() + ":" + (min<10?"0":"") + min.toString();
    return HHMM
  }
  return (
    <div className="container py-4">
      <div className="header">
        <div class="form-group has-search mb-2 ">
          <span className={"details"}>Movie Details</span>
        </div>
      </div>
      <div className="content">
        <img src={`${posterUrl + data.poster_path}`} alt="logo" style={{ "height": "30vh" }} />
        <div className="movie-details">
          <div className={'text-wrapper'}>
            <strong >{data.title}</strong>
            <span> {`( ${data.vote_average} )`}</span>
          </div>
          <p className="">{` ${dateFormat(data.release_date)} | ${timeFormat(data.runtime)}`}</p>
          <span className="">{`Description: ${data.overview}`}</span>
        </div>
      </div>
    </div>
  )
}

export default MovieDetails;