import { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useHistory, useParams } from "react-router-dom";

import { loadAllSpotsThunk } from "../../store/spot";
import { editSpotThunk, loadUserSpotsThunk } from "../../store/userSpots";

import "./EditSpot.css";

function EditASpot() {
  const { spotId } = useParams();
  const history = useHistory();
  const dispatch = useDispatch();

  const userId = useSelector((state) => state.session.user.id);
  const userSpots = useSelector((state) => state.userSpots);
  const spot = userSpots[spotId];

  const [isLoaded, setIsLoaded] = useState(false);
  const [disabled, setDisabled] = useState(false);

  useEffect(() => {
    dispatch(loadAllSpotsThunk())
      .then(() => dispatch(loadUserSpotsThunk(userId)))
      .then(() => setIsLoaded(true));
  }, [dispatch, userId]);

  const [name, setName] = useState(spot?.name);
  const [description, setDescription] = useState(spot?.description);
  const [guests, setGuests] = useState(spot?.guests);
  const [beds, setBeds] = useState(spot?.beds);
  const [baths, setBaths] = useState(spot?.baths);
  const [address, setAddress] = useState(spot?.address);
  const [city, setCity] = useState(spot?.city);
  const [state, setState] = useState(spot?.state);
  const [country, setCountry] = useState("United States");
  const [price, setPrice] = useState(spot?.price);
  const [errors, setErrors] = useState([]);

  useEffect(() => {
    // setErrors([]);
    const err = [];
    if (!name || name.length >= 150)
      err.push("The name of your spot cannot be longer than 150 characters.");
    if (!description || description.length <= 20)
      err.push("Please enter a description that is longer than 20 words");
    if (guests === 0) err.push("Spot must be able to host at least 1 guest.");
    if (beds === 0) err.push("Spot must have at least 1 bed.");
    // if (typeof beds !== "number")
    //   err.push("* Spot must have at least 1 bed.");
    if (baths === 0) err.push("Spot must have at least 1 bathroom.");
    // if (typeof baths !== "number")
    //   err.push("* Spot must have at least 1 bathroom.");
    if (!address)
      err.push("Please provide an address. This will not be publicly shared.");
    if (!city) err.push("Please provide a city.");
    if (!state) err.push("Please provide a state");
    if (!country)
      err.push(
        "Remotebnb is currently operating within the United States only."
      );
    if (price <= 0)
      err.push(
        "Please provide a nightly price for your spot. The minimum is $60.00"
      );
    // if (!images.length || images.length < 5)
    //   err.push("Please upload 5 images of your spots");
    // setErrors(err);

    // if (images.length < 5) err.push("Please upload 5 images of your spots");
    // // console.log("What is error's not empty?", errors)
    setErrors(err);
  }, [
    name,
    description,
    guests,
    beds,
    baths,
    address,
    city,
    state,
    country,
    price
  ]);

  const handleSubmit = (e) => {
    e.preventDefault();
    const newSpot = {
      userId,
      name,
      description,
      guests,
      beds,
      baths,
      address,
      city,
      state,
      country,
      price
    };
    // console.log("WHAT IS THE FORM SENDING? \n\n", newSpot)
    // console.log("WHAT IS THE USERID THE FORM IS SENDING? \n\n", userId)
    // console.log("WHAT SPOT ID IS THE FORM SENDING", spot.id)
    dispatch(editSpotThunk(newSpot, userId, spot.id))
      .then(() => setDisabled(true))
      // .then(() => dispatch(loadAllSpotsThunk()))
      // .then(() => dispatch(loadUserSpotsThunk(userId)))
      .then(() => history.push(`/users/${userId}/spots`));
  };

  console.log("what are errors doing right now?", errors);

  if (!isLoaded) {
    return <h1>Loading...</h1>;
  } else {
    return (
      <>
        <div className="container">
          <h1>Edit Your Spot</h1>
          <div className="form-container-two">
            <form onSubmit={handleSubmit} className="form-c-e">
              <h3>Change Your Spot Details!</h3>
              <div>
                <ul>
                  {errors.map((error, idx) => (
                    <li className="c-error" key={idx}>
                      {error}
                    </li>
                  ))}
                </ul>
              </div>
              <div className="div-f">
                <label>
                  {" "}
                  Name
                  <input
                    className="form-input"
                    type="text"
                    value={name}
                    onChange={(e) => setName(e.target.value)}
                    //   required
                  />
                </label>
              </div>

              <div className="div-f">
                <label>
                  {" "}
                  Description
                  <input
                    className="form-input"
                    type="text"
                    value={description}
                    onChange={(e) => setDescription(e.target.value)}
                    //   required
                  />
                </label>
              </div>

              <div className="div-f">
                <label>
                  {" "}
                  Guests
                  <input
                    className="form-input"
                    type="number"
                    value={guests}
                    onChange={(e) => setGuests(e.target.value)}
                    min="1"
                    max="99999999"
                    //   required
                  />
                </label>
              </div>

              <div className="div-f">
                <label>
                  {" "}
                  Beds
                  <input
                    className="form-input"
                    type="number"
                    value={beds}
                    onChange={(e) => setBeds(e.target.value)}
                    min="1"
                    max="99999999"
                    required
                    // className="form-input"
                    // type="text"
                    // value={beds}
                    // onChange={(e) => setBeds(e.target.value)}
                    //   required
                  />
                </label>
              </div>

              <div className="div-f">
                <label>
                  {" "}
                  Baths
                  <input
                    // className="form-input"
                    // type="text"
                    // value={baths}
                    // onChange={(e) => setBaths(e.target.value)}
                    //   required
                    className="form-input"
                    type="number"
                    min="1"
                    max="99999999"
                    value={baths}
                    onChange={(e) => setBaths(e.target.value)}
                  />
                </label>
              </div>

              <div className="div-f">
                <label>
                  {" "}
                  Address
                  <input
                    className="form-input"
                    type="text"
                    value={address}
                    onChange={(e) => setAddress(e.target.value)}
                    //   required
                  />
                </label>
              </div>

              <div className="div-f">
                <label>
                  {" "}
                  City
                  <input
                    className="form-input"
                    type="text"
                    value={city}
                    onChange={(e) => setCity(e.target.value)}
                    //   required
                  />
                </label>
              </div>

              <div className="div-f">
                <label>
                  {" "}
                  State
                  <input
                    className="form-input"
                    type="text"
                    value={state}
                    onChange={(e) => setState(e.target.value)}
                    //   required
                  />
                </label>
              </div>

              <div className="div-f">
                <label>
                  {" "}
                  Country
                  <input
                    disabled={true}
                    className="form-input"
                    type="text"
                    value={country}
                    onChange={(e) => setCountry(e.target.value)}
                    //   required
                  />
                </label>
              </div>

              <div className="div-f">
                <label>
                  {" "}
                  Price
                  <input
                    // className="form-input"
                    // type="text"
                    // value={price}
                    // onChange={(e) => setPrice(e.target.value)}
                    // //   required
                    className="form-input"
                    type="number"
                    min="60.00"
                    max="9999999999.00"
                    value={price}
                    onChange={(e) => setPrice(e.target.value)}
                  />
                </label>
              </div>

              <div id="s-b-div" className="div-f">
                <button id="c-sub-b" disabled={!!errors.length}>
                  Submit
                </button>
              </div>
            </form>
          </div>
        </div>
      </>
    );
  }
}

export default EditASpot;
