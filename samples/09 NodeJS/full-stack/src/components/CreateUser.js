import React from 'react';
import PropTypes from 'prop-types';

export const CreateUser = (props) =>{
    CreateUser.propTypes = {
        onUserCreate: PropTypes.func.isRequired
    }


    return (<button onClick={()=>props.onUserCreate({username:'groot',age:15})}>
        Create New User!
    </button>);
}

