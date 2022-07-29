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
    .isLength({ max: 650 })
    .withMessage("A review must be at least 50 chars long and less than 650."),
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
    const { reviewId } = req.params;
    const id = reviewId;
    const newReview = req.body.review;
    const newRating = req.body.rating;

    const rev = await Review.findByPk(id);

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
