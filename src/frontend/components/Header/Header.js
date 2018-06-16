import React from 'react';
import './Header.css';

const header = ({user, loginHandler, logoutHandler}) => {
    let uid;
    let pic;
    user ? uid = user.uid :uid=null;
    user ? pic = user.photoURL :pic=null;
    return (
        <div className='Header'>
            {uid !== null ? 
            <div onClick={logoutHandler} className='btn btn-blue'>Log Out <img alt='' height='25px' src={pic} /></div>
            : 
            <div onClick={loginHandler} className='btn btn-blue'>Log In </div>
            }
        </div>
    );
}


export default header;