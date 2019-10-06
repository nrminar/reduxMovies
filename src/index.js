import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './components/App/App.js';
import registerServiceWorker from './registerServiceWorker';
import { createStore, combineReducers, applyMiddleware } from 'redux';
import { Provider } from 'react-redux';
import logger from 'redux-logger';
import axios from "axios";
import { takeEvery, put } from 'redux-saga/effects';
import createSagaMiddleware from 'redux-saga';

// Create the rootSaga generator function
function* rootSaga() {
    yield takeEvery('FETCH_MOVIES', fetchMovies);
    yield takeEvery('SET_INFO_MOVIES', setMovieInfo);
    yield takeEvery('UPDATE_MOVIE', updateMovie);
}
function* setMovieInfo(action) {
    try{
        const response = yield axios.get('/api/movies/info/'+ action.payload);
        yield put({type: 'INFO_MOVIES', payload: response.data})
      }catch(err){
        console.log(err);
      }
}
function* updateMovie(action){
    try {
      yield axios.put('/api/movies', action.payload);
      console.log('PUT REQ:', action.payload)
    } catch (err){
      console.log('PUT ERROR:',err);
    }
  }
function* fetchMovies(){
    try{
      const response = yield axios.get('/api/movies');
      yield put ({ type:'SET_MOVIES', payload: response.data })
    }catch (error){
      console.log('error in Fetch', error);
    }
  }
// Create sagaMiddleware
const sagaMiddleware = createSagaMiddleware();

// Used to store movies returned from the server
const movies = (state = [], action) => {
    switch (action.type) {
        case 'SET_MOVIES':
            return action.payload;
        default:
            return state;
    }
}

// Used to store the movie genres
const genres = (state = [], action) => {
    switch (action.type) {
        case 'SET_GENRES':
            return action.payload;
        default:
            return state;
    }
}
const infoMovie = (state= [], action)=>{
    switch(action.type){
      case 'INFO_MOVIES':
        return action.payload
      default:
        return state
    }
  }

// Create one store that all components can use
const storeInstance = createStore(
    combineReducers({
        movies,
        genres,
        infoMovie,
    }),
    // Add sagaMiddleware to our store
    applyMiddleware(sagaMiddleware, logger),
);

// Pass rootSaga into our sagaMiddleware
sagaMiddleware.run(rootSaga);

ReactDOM.render(<Provider store={storeInstance}><App /></Provider>, 
    document.getElementById('root'));
registerServiceWorker();
