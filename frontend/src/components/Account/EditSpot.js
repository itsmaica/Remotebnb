import { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import {  useHistory, useParams, } from "react-router-dom";

import { loadAllSpotsThunk } from "../../store/spot";
import { editSpotThunk, loadUserSpotsThunk } from "../../store/userSpots";

import "./CreateASpot.css"

function EditASpot() {
    const { spotId } = useParams();
    const history = useHistory();
    const dispatch = useDispatch();

    const userId = useSelector((state) => state.session.user.id)
    const userSpots = useSelector((state) => state.userSpots)
    const spot = userSpots[spotId]

    const [isLoaded, setIsLoaded] = useState(false)


    useEffect(() => {
        dispatch(loadAllSpotsThunk())
        .then(() => dispatch((loadUserSpotsThunk(userId))))
        .then(() => setIsLoaded(true))
    }, [dispatch])

    const [name, setName] = useState(spot?.name);
    const [description, setDescription] = useState(spot?.description);
    const [guests, setGuests] = useState(spot?.guests);
    const [beds, setBeds] = useState(spot?.beds);
    const [baths, setBaths] = useState(spot?.baths);
    const [address, setAddress] = useState(spot?.address);
    const [city, setCity] = useState(spot?.city);
    const [state, setState] = useState(spot?.state)
    const [country, setCountry] = useState(spot?.country);
    const [price, setPrice] = useState(spot?.price);

    const handleSubmit = (e) => {
        e.preventDefault()
        const newSpot = {
            userId, name, description, guests, beds,
            baths, address, city, state, country, price
        }
        console.log("WHAT IS THE FORM SENDING? \n\n", newSpot)
        console.log("WHAT IS THE USERID THE FORM IS SENDING? \n\n", userId)
        console.log("WHAT SPOT ID IS THE FORM SENDING", spot.id)
        dispatch(editSpotThunk(newSpot, userId, spot.id))
            .then(() => dispatch(loadAllSpotsThunk()))
            .then(() => dispatch(loadUserSpotsThunk(userId)))
            .then(() => history.push(`/users/${userId}/spots`))
    }

    if (!isLoaded) {
        return <h1>Loading...</h1>
    } else {
        return(
            <>
            <h1>Edit Your Spot</h1>
            <div>
                <form onSubmit={handleSubmit} className='form'>
                <h3>Change Your Spot Details!</h3>
                    <label> Name
                        <input
                            type="text"
                            value={name}
                            onChange={(e) => setName(e.target.value)}
                            required
                        />
                    </label>

                    <label> Description
                        <input
                            type="text"
                            value={description}
                            onChange={(e) => setDescription(e.target.value)}
                            required
                        />
                    </label>

                    <label> Guests
                        <input
                            type="text"
                            value={guests}
                            onChange={(e) => setGuests(e.target.value)}
                            required
                        />
                    </label>

                    <label> Beds
                        <input
                            type="text"
                            value={beds}
                            onChange={(e) => setBeds(e.target.value)}
                            required
                        />
                    </label>

                    <label> Baths
                        <input
                            type="text"
                            value={baths}
                            onChange={(e) => setBaths(e.target.value)}
                            required
                        />
                    </label>

                    <label> Address
                        <input
                            type="text"
                            value={address}
                            onChange={(e) => setAddress(e.target.value)}
                            required
                        />
                    </label>

                    <label> City
                        <input
                            type="text"
                            value={city}
                            onChange={(e) => setCity(e.target.value)}
                            required
                        />
                    </label>

                    <label> State
                        <input
                            type="text"
                            value={state}
                            onChange={(e) => setState(e.target.value)}
                            required
                        />
                    </label>

                    <label> Country
                        <input
                            type="text"
                            value={country}
                            onChange={(e) => setCountry(e.target.value)}
                            required
                        />
                    </label>

                    <label> Price
                        <input
                            type="text"
                            value={price}
                            onChange={(e) => setPrice(e.target.value)}
                            required
                        />
                    </label>

                    <button>Submit</button>
                </form>
            </div>
            </>
        )
    }
}

export default EditASpot;
