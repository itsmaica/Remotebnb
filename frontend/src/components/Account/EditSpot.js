import { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { createSpotThunk } from "../../store/spot";
import {  useHistory, useParams } from "react-router-dom";

import "./CreateASpot.css"


function EditASpot() {
    // const { userId } = useParams();

    const userId = useSelector((state) => state.session.user.id)

    console.log("Can I grab the session user? \n\n", userId)
    // console.log("What is user id? create a spot \n\n", userId)

    const history = useHistory();
    const dispatch = useDispatch();
    // console.log("What is userId -----?\n\n", userId)

    const [isLoaded, setIsLoaded] = useState(false)

    const [name, setName] = useState("");
    const [description, setDescription] = useState("");
    const [guests, setGuests] = useState("2");
    const [beds, setBeds] = useState("2");
    const [baths, setBaths] = useState("1");
    const [address, setAddress] = useState("");
    const [city, setCity] = useState("");
    const [state, setState] = useState("")
    const [country, setCountry] = useState("United States");
    const [price, setPrice] = useState(0);

    const handleSubmit = (e) => {
        e.preventDefault();

        const spot = {
            userId, name, description, guests, beds,
            baths, address, city, state, country, price
        }
        console.log("What is the thunk getting?", );
        dispatch(createSpotThunk(spot));
        history.push(`/users/${userId}/spots`)

    }

    useEffect(() => {
        setIsLoaded(true)
    },[isLoaded])


    return(
        <>
        <h1>Edit Your Spot</h1>
        <div>
            <form onSubmit={handleSubmit} className='form'>
            <h3>Form</h3>
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

export default EditASpot;
