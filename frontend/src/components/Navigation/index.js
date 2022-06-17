import React from 'react';
import { NavLink, useHistory } from 'react-router-dom';
import { useSelector } from 'react-redux';
import ProfileButton from './ProfileButton';
import LoginFormModal from '../LoginFormModal';
import airbnblogo from "../../images/airbnblogo.png"

import './Navigation.css';

function Navigation({ isLoaded }){
  const history = useHistory();
  const sessionUser = useSelector(state => state.session.user);

  console.log("Who is the sessionUser in nav", sessionUser)
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
                <NavLink exact to='/spots'><img id="a-logo" src={airbnblogo} alt="logo"/></NavLink>
                <NavLink id='remotebnb' exact to="/spots">Remotebnb</NavLink>
          </div>

          <div id="test">
                {isLoaded && sessionLinks}

          </div>

        </div>
      </div>
        <div className='line4'></div>

    </>
  );
}

export default Navigation;
