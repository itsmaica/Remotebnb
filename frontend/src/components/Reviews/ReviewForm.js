import { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { createReviewThunk, loadSpotReviewsThunk } from "../../store/review";
// import Loading from "../LoadingAndPageNotFound/Loading";

import "./ReviewForm.css";
function ReviewForm({ spotId, setForm }) {
  // const { spotId } = useParams()
  // console.log('What spot are you writing a review for? --spotId',spotId)

  const dispatch = useDispatch();
  const userId = useSelector((state) => state?.session?.user?.id);
  // const spotName = useSelector((state) => state?.reviews[0]?.Spot?.name);
  // const id = useSelector((state) => state?.reviews[0]?.Spot?.id)

  // const id = useSelector((state) => state?.spot?.id)
  // console.log("what is id", id)
  // console.log("what is the current spot name?", spotName)

  // const [form, setForm] = useState(true);
  const [isLoaded, setIsLoaded] = useState(false);
  const [review, setReview] = useState("");
  const [rating, setRating] = useState(5);
  const [errors, setErrors] = useState([]);
  // const [rating, setRating] = useState(5)

  useEffect(() => {
    setErrors([]);
    const err = [];
    if (review.length && review.length < 50)
      err.push("A review cannot be blank and must be at least 50 chars long.")
    if (review.length > 650) err.push("A review cannot be more than 650 chars long.")
    setErrors(err);
  }, [review, isLoaded]);

  const handleSubmit = (e) => {
    e.preventDefault();
    const rev = { review, userId, spotId: spotId, rating };
    // console.log('C-R-E-A-T-E --- \n\n', spotId)
    dispatch(createReviewThunk(spotId, rev))
      .then(() => dispatch(loadSpotReviewsThunk(spotId)))
      .then(() => setReview(""))
      .then(() => setIsLoaded(true))
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
          <div id='e-rev-c'>
            {errors.map((error, idx) => (
              <li className="c-error" key={idx}>
                {error}
              </li>
            ))}
          </div>
          <label>
            <textarea
              className="review-input-m"
              type="text"
              placeholder={`Tell us about your stay...`}
              value={review}
              onChange={(e) => setReview(e.target.value)}
              // required
            />
          </label>
          <div id="r-bat">
            <button id="r-sub" disabled={!!errors.length}>
              Submit
            </button>
          </div>
        </form>
      </div>
    </>
  );
  //}
}

export default ReviewForm;
