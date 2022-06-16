const express = require("express");
const asyncHandler = require("express-async-handler");

const { Review, User, Spot } = require("../../db/models");

const { handleValidationErrors } = require("../../utils/validation");
const { check } = require("express-validator");

const router = express.Router();

const ValidateReviewForm = [
  check("review")
    .notEmpty({ checkFalsey: true })
    .isLength({ min: 50 })
    .withMessage("A review cannot be blank and must be at least 50 chars long."),
    handleValidationErrors,
];

//Get All Reviews (just in case)
router.get(
  "/",
  asyncHandler(async (req, res) => {
    const reviews = await Review.findAll({
      include: [Spot, User]
    });
    return res.json(reviews);
  })
);

//Get One Review
router.get(
  "/:reviewId",
  asyncHandler(async (req, res) => {
    const { reviewId } = req.params;
    const oneReview = await Review.findByPk(reviewId, {
      include: User
    });
    return res.json(oneReview);
  })
);

//Create A Review For A Spot
router.post(
  "/:spotId/new",
  ValidateReviewForm,
  asyncHandler(async (req, res) => {
    // console.log("HEllO REq.Body??", req.body)
    const review = await Review.create(
      {
        userId: req.body.userId,
        spotId: req.body.spotId,
        review: req.body.review,
        rating: req.body.rating
      },
      { include: User, where: { userId: req.body.userId } }
    );
    // console.log("Review", review)
    return res.json(review);
  })
);

//Update A Review
router.put(
  "/:reviewId/edit",
  ValidateReviewForm,
  asyncHandler(async (req, res) => {
    // console.log("BODY \n\n", req.body)
    // console.log("Hello from the put router!!!\n\n")
    const { reviewId } = req.params;
    // console.log("What is {reviewId }", reviewId)
    // const { userId } = req.params

    const id = reviewId;
    // console.log("Need Id", id)

    // const id = req.body.id
    // console.log("ID IS UNDEFINED", id)
    // const userId = req.body.userId
    // const spotId = req.body.spotId
    const newReview = req.body.review;
    // console.log("newReview \n\n", newReview)
    const newRating = req.body.rating;
    // console.log("newRatng\n\n", newRating )

    const rev = await Review.findByPk(id);
    // console.log("reviewView.save is not func??", rev)

    const { review, rating } = rev;

    if (review !== newReview) {
      rev.review = newReview;
      await rev.save();
    }
    if (rating !== newRating) {
      rev.rating = newRating;
      await rev.save();
    }

    const newRev = await Review.findByPk(id);

    return res.json(newRev);
    // res.send("HELLO")
  })
);

// Delete Review
router.delete(
  "/:reviewId/delete",
  asyncHandler(async (req, res) => {
    const { reviewId } = req.params;
    const id = reviewId;
    const item = await Review.findByPk(id);
    const deletedItem = item;
    await item.destroy();
    res.json(deletedItem);
  })
);

module.exports = router;
