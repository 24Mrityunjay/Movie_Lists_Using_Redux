import * as type from '../constants';

const initialState = {
  listData: [],
  loading: false,
  error: ""
};
const storeMovieList = (state = initialState, action) => {
  switch(action.type) {
    case type.GET_MOVIE_LIST : {
      return{
         ...state,
         loading: true
        }
    }
    case type.GET_MOVIE_LIST_SUCCESS : {
      return{
         ...state,
         loading: false,
         listData: action.listData
        }
    }
    case type.GET_MOVIE_LIST_FAILED : {
      return{
         ...state,
         loading: false,
         error: action.error
        }
    }
    default : return state;
    
  }
}

export default storeMovieList;