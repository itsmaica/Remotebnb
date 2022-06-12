import { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { createReviewThunk, LoadSpotReviewsThunk } from "../../store/review";
import Loading from "../LoadingAndPageNotFound/Loading";


function ReviewForm({spotId}){

    // console.log('What spot are you writing a review for? --spotId',spotId)

    const dispatch = useDispatch();
    const userId = useSelector((state) => state?.session?.user?.id)
    const spotName = useSelector((state) => state?.reviews?.spotReviews[0]?.Spot?.name)
    const id = useSelector((state) => state?.reviews?.spotReviews[0]?.Spot?.id)

    // const id = useSelector((state) => state?.spot?.id)
    // console.log("what is id", id)
    // console.log("what is the current spot name?", spotName)

    const [isLoaded, setIsLoaded] = useState(false)
    const [review, setReview] = useState("")
    const [rating, setRating] = useState(5)
    // const [rating, setRating] = useState(5)
    const handleSubmit = (e, spotId) => {
        e.preventDefault();
        const rev = { review, userId, spotId:id, rating }
        dispatch(createReviewThunk(spotId, rev))
            // .then(() => dispatch(LoadSpotReviewsThunk(spotId)))
    }

    // if (!isLoaded) {
    //     return <Loading />
    // } else {

        return(
            <>
            <h1>Write Your Review</h1>
            <div className="rev-form-c">
                <form onSubmit={handleSubmit} className="rev-form">
                    <label> Review
                        <input
                            type="text"
                            placeholder={`How was your stay at the ${spotName}`}
                            value={review}
                            onChange={(e) => setReview(e.target.value)}
                            required
                        />
                     </label>
                    <button>Submit</button>
                </form>
            </div>
            </>
        )
    //}
}

export default ReviewForm;
