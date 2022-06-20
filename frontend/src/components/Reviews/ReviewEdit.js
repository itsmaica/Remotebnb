import { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import {
  editReviewThunk,
  getReviewThunk,
  loadSpotReviewsThunk
} from "../../store/review";

// loadAllSpotsThunk

function ReviewEdit({ reviewId, setEdit, spotId }) {
  const dispatch = useDispatch();
  const userId = useSelector((state) => state?.session?.user?.id);
  //   console.log("DO I have userId? \n\n", userId)
  const [rating, setRating] = useState(5);
  const [errors, setErrors] = useState([]);

  useEffect(() => {
    dispatch(loadSpotReviewsThunk(spotId))
    // dispatch(getReviewThunk(reviewId))
  }, [dispatch]);

  const reviewArray = useSelector((state) => state?.reviews?.reviews)
  // console.log("new angle", reviewArray)
  const updateThis = reviewArray.filter(rev => rev.id === reviewId)
  // console.log("test", updateThis[0]?.review)
//   const prevReview = useSelector((state) => state?.reviews?.review?.review);
  const [updatedReview, setUpdatedReview] = useState(updateThis[0]?.review);
//   console.log(prevReview)

  useEffect(() => {
    setErrors([]);
    const err = [];
    if (!updatedReview || updatedReview.length < 50)
      err.push("A review must be at least 50 chars long");
    if (updatedReview.length > 650) err.push("A review must be less than 650 chars long")
    setErrors(err);
  }, [updatedReview]);



  const handleSubmit = (e) => {
    e.preventDefault();
    // console.log("CLICK")
    const review = {
      id: reviewId,
      review: updatedReview,
      userId,
      spotId: spotId,
      rating
    };
    console.log("What is the thunk getting? \n\n", review);
    dispatch(editReviewThunk(reviewId, review))
      .then(() => dispatch(loadSpotReviewsThunk(spotId)))
      .then(() => dispatch(getReviewThunk(reviewId)))
      .then(() => setEdit(false));
  };


  // console.log("What is reviewId from the editReview", reviewId)
  return (
    <>
      <div>
        <form onSubmit={handleSubmit}>
          {errors.map((error, idx) => (
            <li className="e-error" key={idx}>
              {error}
            </li>
          ))}
          <input
            className="form-input"
            type="text"
            value={updatedReview}
            onChange={(e) => setUpdatedReview(e.target.value)}
          />
          <button id="sb-e-rev">Submit</button>
          <button id="cxl-rev" onClick={()=>setEdit(false)}>
            Cancel
          </button>
        </form>
      </div>

    </>
  );
}

export default ReviewEdit;
