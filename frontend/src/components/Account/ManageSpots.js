// import { useEffect, useState } from "react";
import { useSelector } from "react-redux";
import { useHistory, useParams } from "react-router-dom";


function ManageSpots() {
    const history = useHistory()

    const { userId } = useParams()

    const sessionUser = useSelector((state) => state.session.user);
    console.log(sessionUser)

    // if (sessionUser) return <Redirect to="/" />;

    // console.log("manage spots what is userId \n\n", userId)

    const createASpot = (e) => {
        e.preventDefault()
        history.push(`/${userId}/spots/new`)
    }

    return(
        <>
        <h1>ManageSpots</h1>
        <div>
            <button
                onClick={(e) => createASpot(e)}
            >Create a Spot</button>
        </div>
        </>
    )
}

export default ManageSpots
