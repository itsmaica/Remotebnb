import React, { useState, useEffect } from "react";
import { useDispatch } from 'react-redux';
import { NavLink, Link } from "react-router-dom";
import { useHistory } from "react-router-dom";
import * as sessionActions from '../../store/session';

import "./ProfileButton.css"

function ProfileButton({ user }) {
  const history = useHistory()

  const dispatch = useDispatch();
  const [showMenu, setShowMenu] = useState(false);

  // const sessionUser = useSelector((state) => state.session.user);
  // console.log("Hi Maica from Profile Button", sessionUser)

  const userId = user.id
  console.log("Hello I am the user in the button", user)
  // console.log("Hello from profile button", user.id)

  // const toManageSpots = (e, userId) => {
  //   e.preventDefault();
  //   history.push(`/users/${userId}/spots`)
  // }

  const openMenu = () => {
    if (showMenu) return;
    setShowMenu(true);
  };

  useEffect(() => {
    if (!showMenu) return;

    const closeMenu = () => {
      setShowMenu(false);
    };

    document.addEventListener('click', closeMenu);

    return () => document.removeEventListener("click", closeMenu);
  }, [showMenu]);

  const logout = (e) => {
    e.preventDefault();
    dispatch(sessionActions.logout())
      .then(() => history.push(`/spots`))
  };

  return (
    <>
      <div>
          <button id="the-user" onClick={openMenu}>
            {/* <p>{user.email}</p> */}
            <div id='prof-p'>
              {/* <img src={user?.profilePic}/> */}
              <i className="fas fa-user-circle" />
            </div>
          </button>
          {showMenu && (
            <ul className="profile-dropdown">
              <li>{user.username}</li>
              <li>{user.email}</li>
              <li><Link to={`/users/${userId}/spots`}>Manage Spots</Link></li>
              {/* <li><button onClick={toManageSpots}>Manage Spots</button></li> */}
              <li>
                <button onClick={logout}>Log Out</button>
              </li>
            </ul>
          )}
      </div>
    </>
  );
}

export default ProfileButton;
