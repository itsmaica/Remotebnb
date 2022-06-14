import { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { createSpotThunk, loadUserSpots } from "../../store/userSpots";
import {  useHistory,  } from "react-router-dom";

// import {createImagesThunk} from "../../store/image"
import "./CreateASpot.css"
import Loading from "../LoadingAndPageNotFound/Loading";


function CreateASpot() {
    // const { userId } = useParams();

    const userId = useSelector((state) => state?.session?.user?.id)

    // console.log("Can I grab the session user? \n\n", userId)
    // console.log("What is user id? create a spot \n\n", userId)

    const history = useHistory();
    const dispatch = useDispatch();
    // console.log("What is userId -----?\n\n", userId)

    const [isLoaded, setIsLoaded] = useState(false)

    const [name, setName] = useState("");
    const [description, setDescription] = useState("");
    const [guests, setGuests] = useState(1);
    const [beds, setBeds] = useState(1);
    const [baths, setBaths] = useState(1);
    const [address, setAddress] = useState("");
    const [city, setCity] = useState("");
    const [state, setState] = useState("")
    const [country, setCountry] = useState("United States");
    const [price, setPrice] = useState(1);
    const [disabled, setDisabled] = useState(false);
    const [images, setImages] = useState([]);


    const handleSubmit = (e) => {
        e.preventDefault();

        const spot = {
            userId, name, description, guests, beds,
            baths, address, city, state, country, price, images
        }
        console.log("What is the thunk getting? from handleSubmit CreateSpot.js", spot.images);

        dispatch(createSpotThunk(spot))
        // .then(() => dispatch(loadUserSpots(userId)))
        .then(() => setDisabled(true))
        history.push(`/users/${userId}/spots`)
    }

    const updateFiles = (e) => {
        const file = e.target.files[0];
        // const file = e.target.file;
        const picArr = Object.values(e.target.files)
        if (picArr.length > 0) setImages(picArr)
        // console.log("What is file----CreateSpot.js \n\n?", Object.values(e.target.files))
        // if (file) setImages(file);
      };

    useEffect(() => {
        setIsLoaded(true)
    },[isLoaded])


    if (!isLoaded) {
        return <Loading />
    } else {
    return(
        <>
        <div className="container">

            <h1>Create A New Spot</h1>
            <div className="form-container">
                <form onSubmit={handleSubmit} className='form'>
                <h3>Form</h3>
                    <label> Name
                        <input
                            className="form-input"
                            type="text"
                            value={name}
                            onChange={(e) => setName(e.target.value)}
                            required
                        />
                    </label>

                    <label> Description
                        <input
                            className="form-input"
                            type="text"
                            value={description}
                            onChange={(e) => setDescription(e.target.value)}
                            required
                        />
                    </label>

                    <label> Guests
                        <input
                            className="form-input"
                            type="text"
                            value={guests}
                            onChange={(e) => setGuests(e.target.value)}
                            required
                        />
                    </label>

                    <label> Beds
                        <input
                            className="form-input"
                            type="text"
                            value={beds}
                            onChange={(e) => setBeds(e.target.value)}
                            required
                        />
                    </label>

                    <label> Baths
                        <input
                            className="form-input"
                            type="text"
                            value={baths}
                            onChange={(e) => setBaths(e.target.value)}
                            required
                        />
                    </label>

                    <label> Address
                        <input
                            className="form-input"
                            type="text"
                            value={address}
                            onChange={(e) => setAddress(e.target.value)}
                            required
                        />
                    </label>

                    <label> City
                        <input
                            className="form-input"
                            type="text"
                            value={city}
                            onChange={(e) => setCity(e.target.value)}
                            required
                        />
                    </label>

                    <label> State
                        <input
                            className="form-input"
                            type="text"
                            value={state}
                            onChange={(e) => setState(e.target.value)}
                            required
                        />
                    </label>

                    <label> Country
                        <input
                            className="form-input"
                            type="text"
                            value={country}
                            onChange={(e) => setCountry(e.target.value)}
                            required
                        />
                    </label>

                    <label> Price
                        <input
                            className="form-input"
                            type="text"
                            value={price}
                            onChange={(e) => setPrice(e.target.value)}
                            required
                        />
                    </label>

                    {/* <label>
                        Upload a Picture
                    <input type="file" onChange={updateFiles} />
                    </label> */}
                    <label>
                    Multiple Upload
                    <input
                    type="file"
                    multiple
                    onChange={updateFiles} />
                    </label>

                    <button
                        disabled={disabled}
                        // onClick={() => setDisabled(true)}
                        >Submit</button>
                </form>
            </div>
        </div>
        </>
    )
  }
}
export default CreateASpot
