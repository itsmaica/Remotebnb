// import { useEffect, useState } from "react";
// import { useEffect } from "react";
import { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { NavLink, useHistory } from "react-router-dom";
import { deleteSpotThunk } from "../../store/userSpots";
import { loadAllSpotsThunk } from "../../store/spot";
import { loadUserSpotsThunk } from "../../store/userSpots";
import Loading from "../LoadingAndPageNotFound/Loading.js";
import "./ManageSpots.css";
import { Modal } from "../../context/Modal";

// import { loadAllImagesThunk } from "../../store/image";
// import {Loading} from "../../components/LoadingAndPageNotFound/Loading"
import CreateASpot from "../Account/CreateASpot.js";
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
  }, [dispatch]);

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
          <Loading className="take-over" />
        </Modal>
      )}
      <h1>Manage Spots</h1>
      <div className="spots-num-and-button">
        <h2>{Object.values(userSpots).length} SPOTS</h2>
        {/* <NavLink exact to={`/users/${userId}/spots/new`} id='create'>Create a Spot</NavLink> */}
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
      {userSpots &&
        Object.values(userSpots).map((spot) => (
          //<h1>{spot.id}</h1>
          // console.log(spot.name)
          <>
            <div id="spot-slots" key={spot?.id}>
              <div className="">
                <div className="heading-list">
                  <p>Spot</p>
                  <p>To Do</p>
                  <p>Guests</p>
                  <p>Beds</p>
                  <p>Baths</p>
                  <p>Location</p>
                </div>
                <div id="user-spots">
                  <div id="pic-name">
                    <div
                      id="spot-pic"
                      onClick={(e) => {
                        goToOnePage(spot?.id);
                      }}
                    >
                      PIC
                    </div>
                    <div>{spot?.name}</div>
                  </div>
                  <div>
                    <button
                      id={`edit-${spot?.id}`}
                      onClick={(e) => toEdit(e, userId, spot?.id)}
                    >
                      EDIT
                    </button>
                    <button
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
    </>
  );
}
export default ManageSpots;
