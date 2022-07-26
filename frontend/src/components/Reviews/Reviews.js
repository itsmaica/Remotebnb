import { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
// import { Modal } from "../../context/Modal";
import {
  deleteReviewThunk,
  // editReviewThunk,
  // getReviewThunk,
  loadSpotReviewsThunk
} from "../../store/review";
import { getOneSpotThunk } from "../../store/spot";
import Loading from "../LoadingAndPageNotFound/Loading";
import ReviewForm from "./ReviewForm";
import ReviewEdit from "./ReviewEdit"
import "./Reviews.css";


function Reviews({ spotId }) {
  // console.log("spotId from the modal",spotId)
  const dispatch = useDispatch();

  // const bat = useSelector((state) => state?.reviews);
  // const reviews = Object.values(bat);

  // const currReviews = reviews.filter((rev) => rev?.spotId === spotId);

  const currReviews = useSelector((state) => state?.reviews?.reviews)
  // const rev = useSelector((state) => state?.reviews?.review?.review)
  // console.log('currReviews is a result from a reviews.filter ===> \n\n', currReviews)

  // const user = useSelector((state) => state?.session?.user?.profilePic);
  // console.log("Hello me", user)

  const userId = useSelector((state) => state?.session?.user?.id);
  // console.log("Hello this is my user Id number \n\n", userId)

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

  // let reviewText;

  // currReviews(review => {
  //   let reviewText = review.text
  // })

  // const [rating, setRating] = useState(5);
  const [reviewId, setReviewId] = useState();
  // const prevText = currReviews.filter((rev) => rev.id === reviewId);

  // const bats = prevText[0]?.review;
  // console.log("Need the current Id to grab the current review text \n\n", reviewId)
  // const [rev, setRev] = useState(prevText[0]?.review);
  // const [updatedReview, setUpdatedReview] = useState(prevText[0]?.review);
  // const [updatedReview, setUpdatedReview] = useState();
  // console.log("What is prev text", rev)

  // console.log("This is the current review---\n\n", prevText[0])

  // console.log("This is the review text ---- \n\n", prevText[0]?.review);

  // console.log("THIS IS UPDATED REVIEW \n\n", updatedReview)
  const [isLoaded, setIsLoaded] = useState(false);
  const [edit, setEdit] = useState(false);
  // const [addReview, setAddReview] = useState(false);
  const [form, setForm] = useState(false);
  // const [errors, setErrors] = useState([]);

  // useEffect(() => { setRev(rev)}, [prevText[0]?.review]);
  // useEffect(() => {
  //   setErrors([]);
  //   const err = [];
  //   if (!updatedReview || updatedReview.length < 50)
  //     err.push("A review must be at least 50 chars long");



  // const handleSubmit = (e) => {
  //   e.preventDefault();
  //   // console.log("CLICK")
  //   const updatedRev = {
  //     id: reviewId,
  //     review: updatedReview,
  //     userId,
  //     spotId: spotId,
  //     rating
  //   };
  //   // console.log("What is the thunk getting? \n\n", updatedRev);
  //   dispatch(editReviewThunk(reviewId, updatedRev))
  //     .then(() => dispatch(loadSpotReviewsThunk(spotId)))
  //     .then(() => setEdit(false));
  //   setUpdatedReview("");
  // };

  const deleteReview = (e, reviewId) => {
    e.preventDefault();
    dispatch(deleteReviewThunk(reviewId))
    .then(()=>dispatch(loadSpotReviewsThunk(spotId)))
  };

  useEffect(() => {
    dispatch(loadSpotReviewsThunk(spotId))
      .then(() => dispatch(getOneSpotThunk(spotId)))
      .then(() => setIsLoaded(true));
  }, [dispatch, spotId]);

  if (!isLoaded) {
    return <Loading />;
  } else {
    return (
      <>
        <div id="rev-modal">
          {currReviews.map((review) => (
            <>
              <div id="review-c-m">
                <div id="rev-box">
                  <div id="pic-rev-u">
                    <div id="pic-padding">
                      <div id="user-pic">
                        <img
                          id="user"
                          src={review?.User?.profilePic}
                          alt="user"
                        />
                      </div>
                    </div>
                    <div id="r-name">
                      <p>{review?.User?.firstName}</p>
                    </div>
                    {review?.userId === userId && (
                      <>
                        <div className="u-sel">
                          {!edit && (
                            <div className="u-edit-delete">
                              <div>
                                <button
                                  onClick={(e) => {
                                    setEdit(true);
                                    setReviewId(review.id);
                                    console.log("Test test")
                                  }}
                                  id={`review-num-${review.id}`}
                                  className="lo"
                                >
                                  EDIT
                                </button>
                              </div>
                              <div>
                                <button
                                  id="lo-delete"
                                  className="lo"
                                  onClick={(e) => deleteReview(e, review.id)}
                                >
                                  DELETE
                                </button>
                              </div>
                            </div>
                          )}
                        </div>
                      </>
                    )}
                  </div>
                  {/* different cases to handle when to show the edit */}
                  <div id="r-bot">
                    {!edit && review.userId !== userId && (
                      <div>
                        <p className="r-text">{review?.review}</p>
                      </div>
                    )}
                    {edit && review.userId !== userId && (
                      <div>
                        <p className="r-text">{review?.review}</p>
                      </div>
                    )}
                    {!edit && review.userId === userId && (
                      <>
                        <p className="r-text">{review?.review}</p>
                      </>
                    )}
                    {edit &&
                    review.userId === userId &&
                    reviewId !== review.id && (
                        <>
                          <p className="r-text">{review?.review}</p>
                        </>
                      )}
                    {edit &&
                    review.userId === userId &&
                    reviewId === review.id && (
                      <>
                        <ReviewEdit reviewId={review.id} setEdit={setEdit} spotId={spotId}/>
                      </>
                    )}
                    {/* {edit &&
                    review.userId === userId &&
                    review === review.id && (
                        <>
                          <div>
                            <form onSubmit={handleSubmit}>
                              {errors.map((error,idx) => (
                                <li className="e-error" key={idx}>\
                                    {error}
                                </li>
                              ))}
                              <label />
                              <input
                                className="form-input"
                                type="text"
                                // placeholder={review.review}

                                value={updatedReview}

                                onChange={(e) =>
                                  setUpdatedReview(e.target.value)

                                }
                              />
                              <button id='sb-e-rev'>Submit</button>
                              <button id='cxl-rev'onClick={() => setEdit(false)}>
                                Cancel
                              </button>
                            </form>
                          </div>
                        </>
                      )} */}
                  </div>
                </div>
              </div>
            </>
          ))}
          <div id="add-review-box">
            {!form && userId && (
              <button className="add-your-rev" onClick={() => setForm(true)}>
                Add Your Review
              </button>
            )}
            {form && (
              <>
                <div>
                  <ReviewForm spotId={spotId} setForm={setForm} />
                </div>
                <div id="cxl-btn-div">
                  <button className="lo-2" onClick={() => setForm(false)}>Cancel</button>
                </div>
              </>
            )}
          </div>
        </div>
      </>
    );
  }
}

export default Reviews;
