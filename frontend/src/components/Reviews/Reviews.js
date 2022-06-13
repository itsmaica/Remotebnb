import { useEffect, useState } from "react"
import { useDispatch, useSelector } from "react-redux";
import { getReviewThunk, LoadSpotReviewsThunk } from "../../store/review";
import { getOneSpotThunk } from "../../store/spot";
import Loading from "../LoadingAndPageNotFound/Loading";
import ReviewForm from "./ReviewForm";

import "./Reviews.css"

// getOneSpotThunk
function Reviews({spotId}){
    // console.log("spotId from the modal",spotId)
    const bat = useSelector((state) => state?.reviews)
    const reviews = Object.values(bat)
    const currReviews = reviews.filter(rev => rev.spotId === spotId)
    // console.log('currReviews is a result from a reviews.filter ===> \n\n', currReviews)


    const user = useSelector((state) => state?.session?.user?.profilePic)
    console.log("Hello me", user)

    // const test = revs.spotId === spotId
    // console.log("TESTING 1,2,3 ----> \n\n",test)

    // const rev = useSelector((state) => state?.allSpots?.spot?.Reviews)

    // console.log("Hello from reviews modal -- what is rev", rev)
    // console.log('what is review?', reviews)
    // console.log("need profile pic", userPic)
    // const userName = useSelector((state) => state?.reviews?.review?.User?.firstName)
    // // console.log('user name', userName)

    // const text = useSelector((state) => state?.reviews?.review?.review)
    // console.log("Need the text \n\n",text)

    //need to get the text from review
    // console.log("LOL THIS IS A REVIEW \n\n",reviewText)

    // const [showMore, setShowMore] = useState(false);
    const [isLoaded, setIsLoaded] = useState(false);
    // const [addReview, setAddReview] = useState(false);
    const [form, setForm] = useState(false);

    const dispatch = useDispatch();
    useEffect(() => {
        dispatch(LoadSpotReviewsThunk(spotId))
        .then(() => dispatch(getOneSpotThunk(spotId)))
        .then(() => setIsLoaded(true))
    }, [dispatch])


    if (!isLoaded) {
        return <Loading />
    } else {

        return(
            <>
            <div id='rev-modal'>
                { currReviews.map(((review) => (

                    <>
                    <div id='review-c-m'>

                        <div id='rev-box'>
                            <div id='pic-rev'>
                                <div id="user-pic">
                                    <img id='user' src={review?.User?.profilePic}/>
                                </div>
                                <div id='r-name'><p>{review?.User?.firstName}</p></div>
                            </div>

                            <div>
                                <div>
                                    <p>{review?.review}</p>
                                </div>
                            </div>
                        </div>
                    </div>
                    </>
                )))}
                <div id='add-review-box'>
                    {!form && ( <button onClick={() => setForm(true)}>Add Your Review</button> )}
                    {form &&  (
                        <>
                        <div >
                            <ReviewForm spotId={spotId}/>
                        </div>
                        <div>
                            <button onClick={() => setForm(false)}>Cancel</button>
                        </div>
                        </>
                    )}
                </div>
            </div>
            </>
        )
    }
}

export default Reviews;
