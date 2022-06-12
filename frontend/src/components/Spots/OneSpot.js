import { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useParams } from "react-router-dom";
import { Modal } from "../../context/Modal";
import { LoadSpotReviewsThunk } from "../../store/review";
import { getOneSpotThunk } from "../../store/spot";
import Loading from "../LoadingAndPageNotFound/Loading";
import Reviews from "../Reviews/Reviews";
import "./OneSpot.css"

function OneSpot(){
    const dispatch = useDispatch()

    const { spotId } = useParams()
    console.log("What is spotId? --OneSpot.js", spotId)
    // console.log("Need the spotId", spotId)

    const spot = useSelector((state) => state?.allSpots?.spot)
    const reviews = useSelector((state) => state?.reviews)
    console.log("where are the reviews?", reviews)

    //how to get user FirstName
    // console.log("User Details =-- \n\n", spot?.User?.firstName)
    //spot pics for gallery
    // console.log('What are the images?', spot.Images[0].url)
    //Reviews
    // console.log("Need to get Reviews", spot?.Reviews)
    const [showModal, setShowModal] = useState(false);

    const [isLoaded, setIsLoaded] = useState(false)
    // const [showMore, setShowMore] = useState(false)

    // const click = (e) => {
    //     e.stopPropagation();
    //     setShowMore(!showMore);
    // }

    useEffect(() => {
    console.log("What is spotId from the useEffect that will dispatch-- \n\n", spotId)
        dispatch(getOneSpotThunk(spotId))
            .then(() => dispatch(LoadSpotReviewsThunk(spotId)))
            .then(() => setIsLoaded(true))
    }, [dispatch])

    if (!isLoaded) {
        return <Loading />
    } else {
        return(
            <>
            {spot && (
                <>

<div className="container">
    <div id='o-container'>

        <div className="title">
            <div id='o-title'>
                <h1>{spot?.name}</h1>
            </div>
            <div id='num-r-spot-location'>
                <div><p>{spot?.Reviews.length} Reviews</p></div>
                <div>
                    <p>{spot?.city }, {spot?.state}, {spot?.country}</p>
                </div>
            </div>
        </div>

        <div className="spot-gallery">
            <div className="house-pics">
                <div className='pic' id='p1'>
                    <img src={spot?.Images[0]?.url}/>
                </div>
                <div className='pic' id='p2'>
                    <img src={spot?.Images[1]?.url}/>
                </div>
                <div className='pic' id='p3'>
                    <img src={spot?.Images[2]?.url}/>
                </div>
                <div className='pic' id='p4'>
                    <img src={spot?.Images[3]?.url}/>
                </div>
                <div className='pic' id='p5'>
                    <img src={spot?.Images[4]?.url}/>
                </div>
            </div>
        </div>

        <div id='user-div'>
            <div id='u-home-by-user'>
                <div>
                    <div id='home-by'>Entire Home Hosted by {spot?.User?.firstName}</div>

                    <span id='s-info'>
                        <p>{spot?.guests} Guests</p>
                        <p>{spot?.beds} Beds</p>
                        <p>{spot?.baths} Baths</p>
                    </span>
                </div>
                <div id='user-pic'>
                    <img id='user' src={spot?.User?.profilePic}/>
                </div>
            </div>
        </div>

        <div className="amenities">
            Amenities Amenities Amenities Amenities Amenities Amenities
        </div>

        <div className="description">
            <h3>{spot?.description}</h3>
        </div>

        <div className="reviews-container">
            { Object.values(reviews)?.map(((review) => (
            <>
                    <div key={review.id} id='review-c'>

                        <div id='pic-rev'>
                            <div id="user-pic">
                                <img id='user' src={review?.User?.profilePic}/>
                            </div>
                            <div id='r-name'><p>{review?.User?.firstName}</p></div>
                        </div>

                        <div id='rev-text'>
                            <div>
                               {`${review?.review}`.substring(0,150)}
                                <button onClick={() => setShowModal(true)}>..show more</button>
                                {showModal && (
                                    <Modal onClose={() => setShowModal(false)}>
                                        <Reviews spotId={spot.id}/>
                                    </Modal>
                                )}
                                {/* {showMore ? `${review?.review}` : `${review?.review}`.substring(0,150)}
                                <button
                                    id={`review-${review?.id}`}
                                    onClick={(e) => click(e)}>
                                {showMore ? "show less" : "...show more"}
                                </button> */}
                            </div>

                        </div>
                    </div>
            </>
            )))}
        </div>
    </div>
    </div>
                </>
            )}
            </>
        )
    }
}
export default OneSpot;
