import { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
// import { useHistory } from "react-router-dom";
import { loadAllSpotsThunk } from "../../store/spot";
import SpotGridComponent from "./SpotGridComponent";


function Spots() {
    const dispatch = useDispatch();
    // const history = useHistory();

    // const user = useSelector((state) => state?.session?.user?.id)
    // console.log("WHat is user?", user)

    const spots = useSelector((state) => state?.spots?.spots)
    // console.log("SPOTS MAICA \n\n", spots)

    // const array = spots.map(spot => spot)
    // console.log(array)

    useEffect(() => {
        dispatch(loadAllSpotsThunk())
    }, [dispatch])

    return(
        <>
            { spots?.map((spot) => (
                <div key={spot.id} className='spotGrid'>
                    <h3>SPOT</h3>
                    {/* <span><p>{spot.city}</p><p>{spot.state}</p></span> */}
                    <SpotGridComponent spotId={spot?.id} />
                </div>
            ))}
        </>
    )

}

export default Spots;
