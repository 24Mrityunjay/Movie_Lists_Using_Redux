import * as type from '../constants';

export const getMovieList = () => {
  return {
    type: type.GET_MOVIE_LIST
  }
}

export const getMovieListSuccess = (listData) => {
  return {
    type: type.GET_MOVIE_LIST_SUCCESS,
    listData: listData
  }
}

export const getMovieListFailed = (message) => {
  return {
    type: type.GET_MOVIE_LIST_FAILED,
    error: message
  }
}