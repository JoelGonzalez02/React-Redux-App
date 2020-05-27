import { GETTING_AUSSIES, 
         GETTING_AUSSIES_SUCCESS,
         GETTING_AUSSIES_FAILED, 
         GETTING_HUSKIES, 
         GETTING_HUSKIES_SUCCESS,
         GETTING_HUSKIES_FAILED
         } from '../actions/actions';


export const initialState = {
    dogs: [],
    gettingDogs: false,
    error: '',
    breed: 'hound'
}

export const reducer = (state = initialState, action) => {
    switch(action.type) {
        case GETTING_AUSSIES : 
            return { ...state, gettingDogs: true, error: ''}
        case GETTING_AUSSIES_SUCCESS :
            return {...state, dogs: [...state.dogs, ...action.payload], gettingDogs: false }
        case GETTING_AUSSIES_FAILED : 
            return {...state, gettingDogs: false, error: 'There was an error getting the Aussies'}
        case GETTING_HUSKIES : 
            return {...state, gettingDogs: true, error: ''}
        case GETTING_HUSKIES_SUCCESS : 
            return {...state, dogs: [...state.dogs, ...action.payload], gettingDogs: false}
        case GETTING_HUSKIES_FAILED :
            return {...state, gettingDogs: false , error: 'There was an error getting the Huskies'}     
        default: return state;
    }
}


