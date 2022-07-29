// import { useEffect, useState } from "react";
// import { useEffect } from "react";
import { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useHistory } from "react-router-dom";
import { deleteSpotThunk } from "../../store/userSpots";
// import { loadAllSpotsThunk } from "../../store/spot";
import { loadUserSpotsThunk } from "../../store/userSpots";
// import Loading from "../LoadingAndPageNotFound/Loading.js";
import Building from "../LoadingAndPageNotFound/Building";
import "./ManageSpots.css";
import { Modal } from "../../context/Modal";

// import { loadAllImagesThunk } from "../../store/image";
// import {Loading} from "../../components/LoadingAndPageNotFound/Loading"

import CreateASpot from "../Account/CreateASpot.js";
import NewFooter from "../NewFooter/NewFooter";

function ManageSpots() {
  const dispatch = useDispatch();
  const history = useHistory();
  const userId = useSelector((state) => state?.session?.user?.id);
  const userSpots = useSelector((state) => state?.userSpots);

  const [isLoaded, setIsLoaded] = useState(false);
  const [spotsLoaded, setSpotsLoaded] = useState(false);
  const [showModal, setShowModal] = useState(false);

  useEffect(() => {
    // dispatch(loadAllSpotsThunk(userId))
    // .then(() => dispatch(loadAllImagesThunk()))
    // .then(() => dispatch((loadUserSpotsThunk(userId))))
    dispatch(loadUserSpotsThunk(userId))
      .then(() => setIsLoaded(true))
      .then(() => setSpotsLoaded(true));
  }, [dispatch, userId]);

  const deleteSpot = (e, userId, spotId) => {
    // console.log("What is spotId for DELETE \n\n")
    e.preventDefault();
    dispatch(deleteSpotThunk(userId, spotId)).then(() =>
      dispatch(loadUserSpotsThunk(userId))
    );
  };

  const toEdit = (e, userId, spotId) => {
    e.preventDefault();
    history.push(`/users/${userId}/spots/${spotId}/edit`);
  };
  //Make Pic clickable here
  // window.onload = function() {
  //     const spotPicDiv = document.getElementById("spot-pic");
  //     spotPicDiv.onclick = goToOnePage()
  // }

  const goToOnePage = (spotId) => {
    history.push(`/spots/${spotId}`);
  };

  // if (!isLoaded) {
  //     return <Loading />
  // } else {
  return (
    <>
      {!isLoaded && (
        <Modal>
          {/* <Loading className="take-over" /> */}
          <Building />
        </Modal>
      )}
      <div className="manage-spots-title">
        <div className="spots-heading">
          <h1>Manage Spots</h1>
        </div>
      </div>
      <div className="spots-num-and-button">
        <div className="center-spots-num-and-button">
          <h2>{Object.values(userSpots).length} SPOTS</h2>
          <button onClick={() => setShowModal(true)} id="create">
            Create a Spot
          </button>
          {showModal && (
            <Modal onClose={() => setShowModal(false)}>
              <CreateASpot
                setShowModal={setShowModal}
                setIsLoaded={setIsLoaded}
              />
            </Modal>
          )}
        </div>
      </div>
      <div className="heading-list">
        <p>Spot</p>
        <p>To Do</p>
        <p>Guests</p>
        <p>Beds</p>
        <p>Baths</p>
        <p>Location</p>
      </div>
      {userSpots &&
        Object.values(userSpots).map((spot) => (
          //<h1>{spot.id}</h1>
          // console.log(spot.name)
          <>
            <div id="spot-slots" key={spot?.id}>
              <div className="center-spot-slots">
                <div id="user-spots">
                  <div id="pic-name">
                    <div
                      id="spot-pic"
                      onClick={(e) => {
                        goToOnePage(spot?.id);
                      }}
                    >
                      <i
                        id="l-s"
                        className="fa-solid fa-house-chimney-user"
                      ></i>
                    </div>
                    <div className="center-spot-name">
                      <div id="spot-name">{spot?.name}</div>
                    </div>
                  </div>
                  <div className="edit-and-delete">
                    <button
                      id={`edit-${spot?.id}`}
                      onClick={(e) => toEdit(e, userId, spot?.id)}
                      className="low"
                    >
                      EDIT
                    </button>
                    <button
                      className="lo-delete-manage-spots"
                      id={`delete-${spot?.id}`}
                      onClick={(e) => deleteSpot(e, userId, spot?.id)}
                    >
                      DELETE
                    </button>
                  </div>
                  <div>{spot?.guests}</div>
                  <div>{spot?.beds}</div>
                  <div>{spot?.baths}</div>
                  <div>{spot?.city}</div>
                </div>
              </div>
            </div>
          </>
        ))}
      <div className="new-footer">
        <NewFooter />
      </div>
    </>
  );
}
export default ManageSpots;
