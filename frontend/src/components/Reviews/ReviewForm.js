import { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { createReviewThunk, loadSpotReviewsThunk } from "../../store/review";
import Loading from "../LoadingAndPageNotFound/Loading";

import "./ReviewForm.css";
function ReviewForm({ spotId, setForm }) {
  // const { spotId } = useParams()
  // console.log('What spot are you writing a review for? --spotId',spotId)

  const dispatch = useDispatch();
  const userId = useSelector((state) => state?.session?.user?.id);
  const spotName = useSelector((state) => state?.reviews[0]?.Spot?.name);
  // const id = useSelector((state) => state?.reviews[0]?.Spot?.id)

  // const id = useSelector((state) => state?.spot?.id)
  // console.log("what is id", id)
  // console.log("what is the current spot name?", spotName)

  // const [form, setForm] = useState(true);
  const [isLoaded, setIsLoaded] = useState(false);
  const [review, setReview] = useState("");
  const [rating, setRating] = useState(5);
  // const [rating, setRating] = useState(5)
  const handleSubmit = (e) => {
    e.preventDefault();
    const rev = { review, userId, spotId: spotId, rating };
    // console.log('C-R-E-A-T-E --- \n\n', spotId)
    dispatch(createReviewThunk(spotId, rev))
      .then(() => dispatch(loadSpotReviewsThunk(spotId)))
      .then(() => setReview(""))
      .then(() => setForm(false));
  };

  // if (!isLoaded) {
  //     return <Loading />
  // } else {

  return (
    <>
      <h1>Write Your Review</h1>
      <div className="rev-form-c">
        <form onSubmit={handleSubmit} className="rev-form">
          <label>
            <textarea
              className="review-input-m"
              type="text"
              placeholder={`Tell us about your stay...`}
              value={review}
              onChange={(e) => setReview(e.target.value)}
              required
            />
          </label>
          <button>Submit</button>
        </form>
      </div>
    </>
  );
  //}
}

export default ReviewForm;
