import React from 'react';
import { getAussies, getHuskies } from '../actions/actions';
import { connect } from 'react-redux';


 const Header = props => {
     

    return (
        <>
        <div className='header'>
        <h1>My favorite dog breeds</h1>
      </div>
      {/* <div className='buttons'>
          <button onClick={props.getAussies}>Australian Shepherd</button>
          <button onClick={props.getHuskies}>Husky</button>
      </div> */}
    </>
    )
}

const mapStateToProps = state => {
    return  state
       
}

export default Header;