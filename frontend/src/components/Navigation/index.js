import React from 'react';
import { NavLink } from 'react-router-dom';
import { useSelector } from 'react-redux';
import ProfileButton from './ProfileButton';
import LoginFormModal from '../LoginFormModal';

import './Navigation.css';


function Navigation({ isLoaded }){
  const sessionUser = useSelector(state => state.session.user);

  let sessionLinks;
  if (sessionUser) {
    sessionLinks = (
      <ProfileButton user={sessionUser} />
    );
  } else {
    sessionLinks = (
      <>
        <LoginFormModal />
        <NavLink to="/signup">Sign Up</NavLink>
      </>
    );
  }

  return (
    <>
      <div className='navi'>
        <div className='navi-box-child'>

          <div className='nav-box'>
                <NavLink exact to="/spots">Home</NavLink>
          </div>

          <div id="test">
                {isLoaded && sessionLinks}

          </div>
          
        </div>
      </div>

    </>
  );
}

export default Navigation;
