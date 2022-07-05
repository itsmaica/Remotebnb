import React, { useState, useEffect } from "react";
// import { useDispatch } from "react-redux";
import { NavLink } from "react-router-dom";
// import { useHistory } from "react-router-dom";
// import * as sessionActions from "../../store/session";
// import LoginFormModal from '../LoginFormModal';
// import defaultbird from "../../images/defaultbird.png";
import "./ProfileButton.css";
// import LoginFormModal from "../LoginFormModal";
// import { Modal } from '../../context/Modal'
function ProfileButton() {
//   const history = useHistory();

  // const dispatch = useDispatch();
  const [showMenu, setShowMenu] = useState(false);

  // const sessionUser = useSelector((state) => state.session.user);
  // console.log("Hi Maica from Profile Button", sessionUser)

//   const userId = user.id;
//   console.log("Hello I am the user in the button", user);
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

//   const logout = (e) => {
//     e.preventDefault();
//     dispatch(sessionActions.logout()).then(() => history.push(`/spots`));
//   };

  return (
    <>
      <div id='stay'>
        <button id="the-user" onClick={openMenu}>

          <i id="hamb" className="fa-solid fa-bars"></i>
          <i className="fas fa-user-circle"></i>
        </button>
      </div>
      <div>
      {showMenu && (
        <>
          <div className="user-menu">
              <div className="men-u">
                <NavLink id="manage-spots" to={`/spots/11`}>
                  TEST
                </NavLink>
              </div>
              <div className="men-u">

              </div>
              {/* <a href="#"><LoginFormModal /></a> */}
          </div>
        </>
        )}
      </div>
    {/* </div> */}
    </>
  );
}

export default ProfileButton;
