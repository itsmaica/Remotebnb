import { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useParams } from "react-router-dom";
import { Modal } from "../../context/Modal";
import { loadSpotReviewsThunk } from "../../store/review";
import { getOneSpotThunk } from "../../store/spot";
// import Building from "../LoadingAndPageNotFound/Building";
import Loading from "../LoadingAndPageNotFound/Loading";
import ReviewForm from "../Reviews/ReviewForm";
import Reviews from "../Reviews/Reviews";
import "./OneSpot.css";

function OneSpot() {
  const dispatch = useDispatch();

  const { spotId } = useParams();
  // console.log("What is spotId? --OneSpot.js", spotId)
  // console.log("Need the spotId", spotId)

  const spot = useSelector((state) => state?.allSpots?.spot);

  const reviews = useSelector((state) => state?.reviews?.reviews);
  console.log("These are the reviews", reviews);

  // const bats = Object.values(reviews);
  // const currRev = bats.filter((rev) => rev.spotId === spot?.id);

  const currRev = reviews?.filter((rev) => rev.spotId === spot?.id);

  const session = useSelector((state) => state?.session?.user);

  // console.log("session", session)
  //
  // console.log('My current reviews ===> \n\n', currRev)
  // const reviews = useSelector((state) => state?.allSpots?.spot?.Reviews)

  // console.log("where are the reviews?--- why other spot included \n\n", reviews)

  //how to get user FirstName
  // console.log("User Details =-- \n\n", spot?.User?.firstName)
  //spot pics for gallery
  // console.log('What are the images?', spot.Images[0].url)
  //Reviews
  // console.log("Need to get Reviews", spot?.Reviews)
  const [showModal, setShowModal] = useState(false);

  const [isLoaded, setIsLoaded] = useState(false);
  // const [showMore, setShowMore] = useState(false)

  // const click = (e) => {
  //     e.stopPropagation();
  //     setShowMore(!showMore);
  // }

  useEffect(() => {
    // console.log("What is spotId from the useEffect that will dispatch-- \n\n", spotId)
    dispatch(getOneSpotThunk(spotId))
      .then(() => dispatch(loadSpotReviewsThunk(spotId)))
      .then(() => setIsLoaded(true));
  }, [dispatch]);

  if (!isLoaded) {
    return <Loading />;
  } else {
    return (
      <>
        {spot && (
          <>
            <div className="container">
              <div id="o-container">
                <div className="title">
                  <div id="o-title">
                    <h1>{spot?.name}</h1>
                  </div>
                  <div id="num-r-spot-location">
                    <div>
                      <p>{currRev?.length} Reviews</p>
                    </div>

                    <div>
                      <p>
                        {spot?.city}, {spot?.state}, {spot?.country}
                      </p>
                    </div>
                  </div>
                </div>

                <div className="spot-gallery">
                  <div className="house-pics">
                    <div className="pic" id="p1">
                      <img src={spot?.Images[0]?.url} alt="spot" />
                    </div>
                    <div className="pic" id="p2">
                      <img src={spot?.Images[1]?.url} alt="spot" />
                    </div>
                    <div className="pic" id="p3">
                      <img src={spot?.Images[2]?.url} alt="spot" />
                    </div>
                    <div className="pic" id="p4">
                      <img src={spot?.Images[3]?.url} alt="spot" />
                    </div>
                    <div className="pic" id="p5">
                      <img src={spot?.Images[4]?.url} alt="spot" />
                    </div>
                  </div>
                </div>

                <div id="user-div">
                  <div id="u-home-by-user">
                    <div className="homeby-and-s-info">
                      <div id="home-by">
                        Entire Home Hosted by {spot?.User?.firstName}
                      </div>

                      <span id="s-info">
                        <p className="s-info-p">{spot?.guests} Guests</p>
                        <p className="s-info-p">{spot?.beds} Beds</p>
                        <p className="s-info-p">{spot?.baths} Baths</p>
                      </span>
                    </div>
                    <div id="user-pic">
                      <img id="user" src={spot?.User?.profilePic} alt="spot" />
                    </div>
                  </div>
                </div>

                <div className="one-page-divider"></div>

                <div className="amenities-holder">
                  <div className="amenities">
                    <div className="ams">
                      <div className="font-am">
                        <i class="fa-solid fa-medal"></i>
                      </div>

                      <div className="font-am-explination">
                        <h4>{spot?.User?.firstName} is a superhost</h4>
                        <p className="ams-i-about">
                          Superhosts are experienced, highly rated hosts who are
                          committed to providing great stays for guests.
                        </p>
                      </div>
                    </div>

                    <div className="ams">
                      <div className="font-am">
                        <i class="fa-solid fa-location-dot"></i>
                      </div>

                      <div className="font-am-explination">
                        <h4>Great Location</h4>
                        <p className="ams-i-about">
                          100% of recent guests at this spot have left a
                          positive review.
                        </p>
                      </div>
                    </div>

                    <div className="ams">
                      <div className="font-am">
                        <i class="fa-solid fa-wifi"></i>
                      </div>

                      <div className="font-am-explination">
                        <h4>High Speed Internet</h4>
                        <p className="ams-i-about">
                          Uninterrupted service guaranteed
                        </p>
                      </div>
                    </div>
                  </div>
                </div>

                <div className="one-page-divider"></div>


                <div className="description">
                  <h3>{spot?.description}</h3>
                </div>

                {/* If no Reviews show this */}
                <div className="one-page-divider"></div>

                <div>
                  {currRev.length < 4 && (
                    // console.log("Test")
                    <>
                      <div className="review-button-div">
                        {/* <button onClick={() => setShowModal(true)}>Write Your Review</button> */}
                        {/* This should be a form */}
                        {showModal && (
                          <>
                            <Modal onClose={() => setShowModal(false)}>
                              {/* <ReviewForm spotId={spotId}/> */}
                              <Reviews spotId={spotId} />
                            </Modal>
                          </>
                        )}
                      </div>
                    </>
                  )}
                </div>
                <div>
                  {currRev.length >= 4 && (
                    <>
                      <div className="review-button-div">
                        {showModal && (
                          <>
                            <Modal onClose={() => setShowModal(false)}>
                              <Reviews spotId={spotId} />
                            </Modal>
                          </>
                        )}
                      </div>
                    </>
                  )}
                </div>
                <div className="reviews-container">
                  {currRev?.slice(0, 4)?.map((review) => (
                    <>
                      <div key={review.id} id="review-c">
                        <div id="pic-rev">
                          <div className="pic-padding">
                            <div id="user-pic">
                              <img
                                id="user"
                                src={review?.User?.profilePic}
                                alt="user pic"
                              />
                            </div>
                          </div>
                          <div id="r-name">
                            <p>{review?.User?.firstName}</p>
                            {/* <p>{review?.createdAt}</p> */}
                          </div>
                        </div>
                        <div id="rev-text-n">
                          <div id="rev-t">
                            {`${review?.review}`.substring(0, 100)}
                            {review?.review?.length >= 100 && (
                              <>
                                {/* <span></span> */}
                                <button
                                  className="showMore"
                                  onClick={() => setShowModal(true)}
                                >
                                  ..show more <i className="fa-solid fa-angle-right"></i>
                                </button>
                              </>
                            )}
                            {showModal && (
                              <Modal onClose={() => setShowModal(false)}>
                                <Reviews spotId={spot.id} />
                              </Modal>
                            )}
                          </div>
                        </div>
                      </div>
                    </>
                  ))}
                </div>
                {session && currRev.length < 1 && (
                  <button
                    className="see-all-b"
                    onClick={() => setShowModal(true)}
                  >
                    Write Your Review
                  </button>
                )}
                {currRev.length >= 1 && (
                  <button
                    className="see-all-b"
                    onClick={() => setShowModal(true)}
                  >
                    Show All {currRev.length} Reviews
                  </button>
                )}
              </div>
            </div>
          </>
        )}
      </>
    );
  }
}
export default OneSpot;
