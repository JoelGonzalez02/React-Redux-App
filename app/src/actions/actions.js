import axios from 'axios';



export const GETTING_AUSSIES = 'GETTING_AUSSIES';
export const GETTING_AUSSIES_SUCCESS = 'GETTING_AUSSIES_SUCCESS';
export const GETTING_AUSSIES_FAILED = 'GETTING_AUSSIES_FAILED';
export const GETTING_HUSKIES = 'GETTING_HUSKIES';
export const GETTING_HUSKIES_SUCCESS = 'GETTING_HUSKIES_SUCCESS';
export const GETTING_HUSKIES_FAILED = 'GETTING_HUSKIES_FAILED';
export const GETTING_IBIZAN = 'GETTING_IBIZAN';
export const GETTING_IBIZAN_FAILED = 'GETTING_IBIZAN_FAILED';
export const GETTING_IBIZAN_SUCCESS = 'GETTING_IBIZAN_SUCCESS';




export const getAussies = () => dispatch => {
    dispatch({type: GETTING_AUSSIES})
        axios
          .get('https://dog.ceo/api/breed/australian/images/random/4')
          .then(res => dispatch({type: GETTING_AUSSIES_SUCCESS, payload: res.data.message}))
          .catch(err => dispatch({type: GETTING_AUSSIES_FAILED, payload: err}))
}

export const getHuskies = () => dispatch => {
    dispatch({type: GETTING_HUSKIES})
        axios
            .get('https://dog.ceo/api/breed/husky/images/random/4')
            .then(res => dispatch({type: GETTING_HUSKIES_SUCCESS, payload: res.data.message}))
            .catch(err => dispatch({type: GETTING_HUSKIES, payload: err}))
}

export const getIbizans = () => dispatch => {
    dispatch({type: GETTING_IBIZAN})
        axios
            .get('https://dog.ceo/api/breed/hound/images/random/4')
            .then(res => dispatch({type: GETTING_IBIZAN_SUCCESS, payload: res.data.message}))
            .catch(err => dispatch({type: GETTING_IBIZAN_FAILED, payload: err}))
}

