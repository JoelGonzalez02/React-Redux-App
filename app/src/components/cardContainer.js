import React, { useEffect } from 'react';
import { getDogs, getCats} from '../actions/actions';
import { connect } from 'react-redux';


const CardContainer = props => {

    useEffect(() => {
        props.getDogs();
        props.getCats();
    }, []);

    return (
        <div className='petPics'>
            {props.dogs.map(dog => {
                return <img key={dog} src={dog} />
            })}
            {props.cats.map(cat => {
                return <img key={cat} src={cat} />
            })}
        </div>
    )
}

const mapStateToProps = state => {
    return {
        dogs: state.dogs, 
        cats: state.cats,
        gettingDogs: state.gettingDogs,
        gettingCats: state.gettingCats,
        error: state.error
    }
}
export default connect(mapStateToProps, {getDogs, getCats})(CardContainer);