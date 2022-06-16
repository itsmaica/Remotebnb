import { csrfFetch } from "./csrf";

const LOAD_SPOT_REVIEWS = "review/loadSpotReviews";
const GET_REVIEW = "review/getReview";
const CREATE_REVIEW = "review/createReview";
const UPDATE_REVIEW = "review/updateReview";
const DELETE_REVIEW = "review/deleteReview";

//------ Actions -----

export const loadSpotReviews = (reviews) => ({
  type: LOAD_SPOT_REVIEWS,
  reviews
});

export const getReview = (review) => ({
  type: GET_REVIEW,
  review
});

export const createReview = (review) => ({
  type: CREATE_REVIEW,
  review
});

export const updateReview = (updatedReview) => ({
  type: UPDATE_REVIEW,
  updatedReview
});

export const deleteReview = (review) => ({
  type: DELETE_REVIEW,
  review
});

//------ Thunks -------

//Reviews for One Spot
export const loadSpotReviewsThunk = (spotId) => async (dispatch) => {
  // console.log("Hello from Review Thunk")
  const response = await csrfFetch(`/api/spots/${spotId}/reviews`);
  if (response.ok) {
    const reviews = await response.json();
    dispatch(loadSpotReviews(reviews));
    return reviews;
  }
  return response;
};

//One Review
export const getReviewThunk = (reviewId) => async (dispatch) => {
  // console.log("Hello from thunk", reviewId)
  const response = await csrfFetch(`/api/reviews/${reviewId}`);
  if (response.ok) {
    const review = await response.json();
    dispatch(getReview(review));
    return review;
  }
  return response;
};

export const createReviewThunk = (spotId, review) => async (dispatch) => {
  // console.log("Hello from create review thunk, what is review---------? \n\n", spotId)
  const response = await csrfFetch(`/api/reviews/${spotId}/new`, {
    method: "POST",
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify(review)
  });
  // console.log("What is response? from create review Thunk -- \n\n", response);
  // const { review, spotId } = review;
  if (response.ok) {
    const review = await response.json();
    dispatch(createReview(review));
    return review;
  }
  return response;
};

export const editReviewThunk = (reviewId, updatedRev) => async (dispatch) => {
  // console.log("What is reviewId? -- thunk", reviewId);
  const response = await csrfFetch(`/api/reviews/${reviewId}/edit`, {
    method: "PUT",
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify(updatedRev)
  });

  // console.log("Hello from Update Review Thunk", response);
  if (response.ok) {
    const update = await response.json();
    // console.log("What is update \n\n", update);
    dispatch(updateReview(update));
    return response;
  }
  return response;
};

export const deleteReviewThunk = (reviewId) => async (dispatch) => {
  const response = await csrfFetch(`/api/reviews/${reviewId}/delete`, {
    method: "DELETE",
    headers: { "Content-Type": "application/json" }
  });
  if (response.ok) {
    const review = await response.json();
    dispatch(deleteReview(review));
    return review;
  }
  return response;
};

const initialState = {};

export const reviewReducer = (state = initialState, action) => {
  let newState;
  switch (action.type) {
    case LOAD_SPOT_REVIEWS:
      newState = { ...state };
      action.reviews.forEach((review) => {
        newState[review.id] = review;
      });
      return newState;
    case GET_REVIEW:
      newState = { ...state };
      newState = { ...state, ["review"]: action.review };
      return newState;
    case CREATE_REVIEW:
      newState = { ...state, [action.review.id]: action.review };
      return newState;
    case UPDATE_REVIEW:
      newState = { ...state };
      newState[action.updatedReview.id] = action.updatedReview;
      return newState;
    case DELETE_REVIEW:
      newState = { ...state };
      const id = action.review.id;
      delete newState[id];
      return newState;
    default:
      return state;
  }
};

export default reviewReducer;
