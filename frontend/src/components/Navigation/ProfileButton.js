import React, { useState, useEffect } from "react";
import { useDispatch } from "react-redux";
import { NavLink, Link } from "react-router-dom";
import { useHistory } from "react-router-dom";
import * as sessionActions from "../../store/session";
import defaultbird from "../../images/defaultbird.png";
import "./ProfileButton.css";

function ProfileButton({ user }) {
  const history = useHistory();

  const dispatch = useDispatch();
  const [showMenu, setShowMenu] = useState(false);

  // const sessionUser = useSelector((state) => state.session.user);
  // console.log("Hi Maica from Profile Button", sessionUser)

  const userId = user.id;
  console.log("Hello I am the user in the button", user);
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

    document.addEventListener("click", closeMenu);

    return () => document.removeEventListener("click", closeMenu);
  }, [showMenu]);

  const logout = (e) => {
    e.preventDefault();
    dispatch(sessionActions.logout()).then(() => history.push(`/`));
  };

  return (
    <>
    {/* <div id='button-and-menu'> */}

      <div id='stay'>
        <button id="the-user" onClick={openMenu}>
          {/* <p>{user.email}</p> */}
          <i id="hamb" class="fa-solid fa-bars"></i>
          {!user && <i className="fas fa-user-circle" />}
          <img id="birdy" src={defaultbird} alt="bird"/>
        </button>
      </div>
      <div>
      {showMenu && (
          <div className="user-menu">
              <div className="men-u">
                <Link id="manage-spots" to={`/users/${userId}/spots`}>
                  Manage Spots
                </Link>
              </div>
              <div className="men-u">
                <button id="logout" onClick={logout}>
                  Log Out
                </button>
              </div>
          </div>
        )}
      </div>
    {/* </div> */}
    </>
  );
}

export default ProfileButton;
