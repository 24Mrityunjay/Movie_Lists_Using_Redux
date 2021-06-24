import { all } from "@redux-saga/core/effects";
import movieList from './movieListSaga'
function* allSaga() {
    yield all([
        movieList() 
    ])
}

export default allSaga;