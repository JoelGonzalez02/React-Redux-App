import axios from 'axios';

export const GETTING_DOGS = 'GETTING_DOGS';
export const GETTING_DOGS_SUCCESS = 'GETTING_DOGS_SUCCESS';
export const GETTING_DOGS_FAILED = 'GETTING_DOGS_FAILED';
export const GETTING_CATS = 'GETTING_CATS';
export const GETTING_CATS_SUCCESS = 'GETTING_CATS_SUCCESS';
export const GETTING_CATS_FAILED = 'GETTING_CATS_FAILED';

export const getDogs = () => dispatch => {
    dispatch({type: GETTING_DOGS})
        axios
          .get('https://dog.ceo/api/breeds/image/random/1')
          .then(res => dispatch({type: GETTING_DOGS_SUCCESS, payload: res.data.message}))
          .catch(err => dispatch({type: GETTING_DOGS_FAILED, payload: err}))
}

export const getCats = () => dispatch => {
    dispatch({type: GETTING_CATS})
        axios
            .get('http://shibe.online/api/cats?count=[1-100]&urls=[true/false]&httpsUrls=[true/false]')
            .then(res => console.log(res))
            .catch(err => dispatch({type: GETTING_CATS_FAILED, payload: err}))
}