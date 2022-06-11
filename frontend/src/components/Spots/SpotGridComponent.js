import { useEffect } from "react";
import { useDispatch } from "react-redux";
import { loadAllImagesThunk } from "../../store/image"

function SpotGridComponent({spotId}) {
    // console.log("Spot id \n\n\ ",  spotId)

    const dispatch = useDispatch()
    // const images = useSelector((state) => state?.images)
    // console.log(images)

    useEffect(() => {
        dispatch(loadAllImagesThunk(spotId))
    }, [dispatch])

    return(
        <>
            {/* <div>
                <p>Images go here later</p>
                <div>
                    {/* <img src={images[0]}/> */}
                {/* </div>
            </div> */}
        </>
    )
}

export default SpotGridComponent;
