import { GETTING_DOGS, 
         GETTING_DOGS_SUCCESS,
         GETTING_DOGS_FAILED, 
         GETTING_CATS, 
         GETTING_CATS_SUCCESS,
         GETTING_CATS_FAILED} from '../actions/actions';


const initialState = {
    dogs: [],
    cats: [],
    gettingDogs: false,
    gettingCats: false,
    error: ''
}

export const reducer = (state = initialState, action) => {
    switch(action.type) {
        case GETTING_DOGS : 
            return { ...state, gettingDogs: true, error: ''}
        case GETTING_DOGS_SUCCESS :
            return {...state, dogs: [...state.dogs, ...action.payload], gettingDogs: false }
        case GETTING_DOGS_FAILED : 
            return {...state, gettingDogs: false, error: 'There was an error getting your dog'}
        case GETTING_CATS : 
            return {...state, gettingCats: true, error: ''}
        case GETTING_CATS_SUCCESS : 
            return {...state, cats: [...state.cats, ...action.payload], gettingCats: false}
        case GETTING_CATS_FAILED :
            return {...state, gettingCats: false, error: 'There was an error getting your cat'}
            
        default: return state;
    }
}

