import { useEffect, useState } from "react";
import { useDispatch } from "react-redux";
import { loadAllImagesThunk } from "../../store/image"


import "./SplashSpot.css"

function SplashSpot({spotId}) {
    // console.log("Spot id \n\n\ ",  spotId)

    const [isLoaded, setIsLoaded] = useState(false)

    const dispatch = useDispatch()
    // const images = useSelector((state) => state?.images)
    // console.log(images)

    useEffect(() => {
        dispatch(loadAllImagesThunk(spotId))
            .then(() => setIsLoaded(true))
    }, [dispatch])

    if (!isLoaded) {

    }
        return(
            <>

              <div className="container">
                  <h1>HI MAICA</h1>
                  <div className='s-card'>
                    <div id='s-gallery'>
                    </div>
                    <div className="s-bottom">
                        <div className="city-rating">
                            <p>City name Goes Here</p>
                            <p>Rating</p>
                        </div>
                        <div>
                            <p>Spot Price Here</p>
                        </div>
                    </div>
                  </div>
              </div>
            </>
        )
}

export default SplashSpot;
