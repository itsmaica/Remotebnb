const express = require("express");
const asyncHandler = require("express-async-handler");

const { Spot, Image, Review } = require("../../db/models");

const router = express.Router();

//Get All Reviews (just in case)
router.get(
    '/',
    asyncHandler(async(req,res) => {
        const reviews = await Review.findAll();
        return res.json(reviews)
    })
)

//Get Reviews for One Spot
router.get(
    '/:reviewId',
    asyncHandler(async(req,res) => {
        const { reviewId } = req.params;
        const oneReview = await Review.findByPk(reviewId);
        return res.json(oneReview);
    })
);

//Create A Review For A Spot
router.post(
    '/:spotId/new',
    asyncHandler(async(req,res) => {
        // console.log("HEllO REq.Body??", req.body)
        const review = await Review.create({
            userId: req.body.userId,
            spotId: req.body.spotId,
            review: req.body.review,
            rating: req.body.rating
        })
        // console.log("Review", review)
        return res.json(review);
    })
);


//Update A Review
router.put(
    '/:reviewId/',
    asyncHandler(async(req,res) => {
        // console.log("BODY \n\n", req.body)
        // console.log("Hello from the put router!!!\n\n")
        const { reviewId } = req.params;
        // const { userId } = req.params
        // const id = reviewId
        // const id = req.body.id
        // console.log("ID IS UNDEFINED", id)
        // const userId = req.body.userId
        // const spotId = req.body.spotId
        const newReview = req.body.review
        const newRating = req.body.rating

        const reviewOne = Review.findByPk(reviewId);
        console.log("reviewView.save is not func??", reviewOne)

        const { review, rating } = reviewOne;

        if (review !== newReview){
            reviewOne.review = newReview;
            await reviewOne.save()
        }
        if (rating !== newRating){
            reviewOne.rating = newRating;
            await reviewOne.save()
        }

        const updatedReview = await Spot.findByPk(id)

        return res.json(updatedReview);
    })
);

// Delete Review
router.delete(
    '/:reviewId',
    asyncHandler(async(req,res) => {
        const { reviewId } = req.params
        const id = reviewId
        const item = await Review.findByPk(id)
        const deletedItem = item
        await item.destroy();
        res.json(deletedItem)
    })
)

module.exports = router;
