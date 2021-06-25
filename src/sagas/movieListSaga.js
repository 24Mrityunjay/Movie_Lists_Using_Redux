import { call, put, takeEvery } from "@redux-saga/core/effects";


function getApiData() {
    const apiURL = 'https://api.themoviedb.org/3/movie/popular?api_key=c1c3795c8fb649da8436ab9b25950b14&page=1';
    return fetch(apiURL, {
        method: "GET",
        headers: {
            'Content-Type': 'application/json'
        }
    }).then(response => response.json())
        .then(data => data.results)
        .catch(err => { throw err })
}

function* fetchMovieList() {
    try {
        const getData = yield call(getApiData)
        yield put({ type: 'GET_MOVIE_LIST_SUCCESS', listData: getData })
    } catch (e) {
        yield put({ type: 'GET_MOVIE_LIST_FAILED', error: e })
    }
}

function* movieList() {
    yield takeEvery('GET_MOVIE_LIST', fetchMovieList)
}

export default movieList;