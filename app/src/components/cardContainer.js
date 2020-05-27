import React, { useEffect } from 'react';
import { getAussies, getHuskies, getIbizans } from '../actions/actions';
import { connect } from 'react-redux';


const CardContainer = props => {

    useEffect(() => {
        props.getAussies();
        props.getHuskies();
        props.getIbizans();
    }, []);

    return (
        <div className='petPics'>
            {props.dogs.map(dog => {
                return <div className='dogPic'>
                         <img key={dog} src={dog} />
                       </div>
            })}
        </div>
    )
}

const mapStateToProps = state => {
    return {
        dogs: state.dogs, 
        gettingDogs: state.gettingDogs,
        error: state.error
    }
}
export default connect(mapStateToProps, {getAussies, getHuskies, getIbizans})(CardContainer);