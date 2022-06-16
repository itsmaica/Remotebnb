import { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { createSpotThunk } from "../../store/userSpots";
// import { useHistory } from "react-router-dom";
// import { Modal } from "../../context/Modal";

// import {createImagesThunk} from "../../store/image"
import "./CreateASpot.css";
// import Loading from "../LoadingAndPageNotFound/Loading";

function CreateASpot({ setShowModal, setIsLoaded }) {
  // const { userId } = useParams();

  const userId = useSelector((state) => state?.session?.user?.id);

  // console.log("Can I grab the session user? \n\n", userId)
  // console.log("What is user id? create a spot \n\n", userId)

  const dispatch = useDispatch();
  // console.log("What is userId -----?\n\n", userId)

  // const [isLoaded, setIsLoaded] = useState(true)
  // const [fillOut, setFillOut] = useState(true);
  const [name, setName] = useState();
  const [description, setDescription] = useState();
  const [guests, setGuests] = useState();
  const [beds, setBeds] = useState();
  const [baths, setBaths] = useState();
  const [address, setAddress] = useState();
  const [city, setCity] = useState();
  const [state, setState] = useState();
  const [country, setCountry] = useState("United States");
  const [price, setPrice] = useState(60.0);
  // const [disable, setDisable] = useState(false);
  const [images, setImages] = useState([]);
  const [errors, setErrors] = useState([]);

  // const [guestE, setGuestE] = useState(1)

  const handleSubmit = async (e) => {
    e.preventDefault();

    const spot = {
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
      price,
      images
    };

    // console.log("What is the thunk getting? from handleSubmit CreateSpot.js", spot.images);

    // .then(()=>setIsLoaded(false))
    await setIsLoaded(false);

    dispatch(createSpotThunk(spot))
      .then(() => setIsLoaded(true))
      .then(() => setShowModal(false));

    if (errors.length) setShowModal(false);

    // .then(()=> dispatch(createSpotThunk(spot)))
    //    dispatch(createSpotThunk(spot)).catch(async (res) => {

    //       const data = await res.json();
    //       if (data && data.errors) {
    //           setErrors(data.errors)
    //           setShowModal(true)
    //         } else {
    //             setShowModal(false)
    //         }
    //       // console.log("DATA.ERRORS \n\n", data.errors)
    //     }).then(()=>setIsLoaded(true))

    // .then(()=> setShowModal(true));

    // .then(()=> console.log("WHAT IS RES \n\n", res))
  };

  console.log("WHat is images", images.length);




  useEffect(() => {
    setErrors([])
    const err = [];
    if (!name || name.length >= 150)
      err.push("The name of your spot cannot be longer than 150 characters.");
    if (!description || description.length <= 20)
      err.push("Please enter a description that is longer than 20 words");
    if (guests === 0 )
      err.push("Spot must be able to host at least 1 guest.");
    if (beds === 0)
      err.push("Spot must have at least 1 bed.");
    // if (typeof beds !== "number")
    //   err.push("* Spot must have at least 1 bed.");
    if (baths === 0)
      err.push("Spot must have at least 1 bathroom.");
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
      err.push("Please provide a nightly price for your spot. The minimum is $60.00");
    if (!images.length) err.push("Please upload 5 images of your spots");
    setErrors(err);

    if (images.length < 5) err.push("Please upload 5 images of your spots");
    // console.log("What is error's not empty?", errors)
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
    price,
    images
  ]);

  // console.log("What happens after correction to errors?", errors)

  // How to close modal after rendering errors/??
  // await setShowModal(false);

  // .then(()=>setIsLoaded(true))
  // await setShowModal(false)

  // .then(() => dispatch(loadUserSpots(userId)))
  // .then(()=> <Loading />)
  // .then(() => setFillOut(true))
  // .then(() => setDisable(true))
  // .then(() => setIsLoaded(false))
  // .then(() => setShowModal(false))
  // console.log("What is disabled",disable)
  // console.log("WHat is happening to setIsLoaded?", isLoaded)
  // .then(()=> setSpotsLoaded(true))
  // history.push(`/users/${userId}/spots`)
  // const timer = setTimeout(() => {
  //     console.log('This will run after 1 second!')
  //   }, 1000);
  //   return () => clearTimeout(timer);

  const updateFiles = (e) => {
    // const file = e.target.files[0];
    // const file = e.target.file;
    const picArr = Object.values(e.target.files);
    if (picArr.length > 0) setImages(picArr);
    // console.log("What is file----CreateSpot.js \n\n?", Object.values(e.target.files))
    // if (file) setImages(file);
  };

  //   useEffect(() => {
  // let arr = [];
  // if (description.length < 20)
  //   arr.push("Please enter a description that is longer than 20 words");
  // setErrors(arr);
  //   }, [description]);

  // if (!isLoaded) {
  //     // console.log("What is fillout after submit", fillOut)
  //     return <Loading />
  // } else {
  return (
    <>
      <div id="c-spot-modal">
        <div id="orange">
          <div id="p-head">
            <h1>Create A New Spot</h1>
          </div>
          <div className="form-container">
            <form onSubmit={handleSubmit} className="form-c">
              <ul>
                  {errors.map((error, idx) => (
                      <li className="c-error" key={idx}>{error}</li>
                    ))}
              </ul>
              {/* <h3>Form</h3> */}

              <div className="c-input">
                <div>
                <label >
                  {" "}
                  Name
                  <input
                    className="form-input"
                    type="text"
                    value={name}
                    onChange={(e) => setName(e.target.value)}
                    // required
                  />
                </label>
                </div>
              </div>

              <div className="c-input">
                <div>
                <label>
                  {" "}
                  Description
                  <input
                    className="form-input"
                    type="text"
                    value={description}
                    onChange={(e) => setDescription(e.target.value)}
                    // required
                  />
                </label>
                </div>
              </div>

              <div className="c-input">
                <label>
                  {" "}
                  Guests
                  <input
                    className="form-input"
                    type="number"
                    value={guests}
                    onChange={(e) => setGuests(e.target.value)}
                    min="1" max="99999999"
                    // required
                  />
                </label>
              </div>

              <div className="c-input">
                <label>
                  {" "}
                  Beds
                  <input
                    className="form-input"
                    type="number"
                    value={beds}
                    onChange={(e) => setBeds(e.target.value)}
                    min="1" max="99999999"
                    // required
                  />
                </label>
              </div>

              <div className="c-input">
                <label>
                  {" "}
                  Baths
                  <input
                    className="form-input"
                    type="number"
                    min="1" max="99999999"
                    value={baths}
                    onChange={(e) => setBaths(e.target.value)}
                    // required
                  />
                </label>
              </div>

              <div className="c-input">
                <label>
                  {" "}
                  Address
                  <input
                    className="form-input"
                    type="text"
                    value={address}
                    onChange={(e) => setAddress(e.target.value)}
                    // required
                  />
                </label>
              </div>

              <div className="c-input">
                <label>
                  {" "}
                  City
                  <input
                    className="form-input"
                    type="text"
                    value={city}
                    onChange={(e) => setCity(e.target.value)}
                    // required
                  />
                </label>
              </div>

              <div className="c-input">
                <label>
                  {" "}
                  State
                  <input
                    className="form-input"
                    type="text"
                    value={state}
                    onChange={(e) => setState(e.target.value)}
                    // required
                  />
                </label>
              </div>

              <div className="c-input">
                <label>
                  {" "}
                  Country
                  <input
                    disabled={true}
                    className="form-input"
                    type="text"
                    value={country}
                    onChange={(e) => setCountry(e.target.value)}
                    // required
                  />
                </label>
              </div>

              <div className="c-input">
                <label>
                  {" "}
                  Price
                  <input
                    className="form-input"
                    type="number"
                    min="60.00" max="9999999999.00"
                    value={price}
                    onChange={(e) => setPrice(e.target.value)}
                    // required
                  />
                </label>
              </div>

              <div className="c-input">
                <label>
                  Please Upload 5 Images
                  <input
                    id="file-input"
                    className="form-input"
                    type="file"
                    multiple
                    accept="image/*, .png .jpg .jpeg"
                    // onClick={()=>console.log('hello?')}
                    onChange={updateFiles}
                    required
                  />
                </label>
              </div>

              <div className="c-input" id='c-sub'>
                <button
                  id='c-sub-b'
                  // disabled={!name || !description || !guests || !beds || !baths || !address || !city || !state || !price || !images}
                  disabled={!!errors.length}

                  // onClick={() => setDisabled(true)}
                >
                  Submit
                </button>
              </div>
            </form>
          </div>
        </div>
      </div>
    </>
  );
}
export default CreateASpot;
