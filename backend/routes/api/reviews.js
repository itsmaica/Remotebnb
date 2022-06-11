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
        console.log("BODY \n\n", req.body)
        // console.log("Hello from the put router!!!\n\n")
        // const { reviewId } = req.params;
        // console.log("What is {reviewId }", reviewId)
        // const { userId } = req.params

        const id = req.params.reviewId
        console.log("Need Id", id)

        // const id = req.body.id
        // console.log("ID IS UNDEFINED", id)
        // const userId = req.body.userId
        // const spotId = req.body.spotId
        const newReview = req.body.review
        console.log("newReview \n\n", newReview)
        const newRating = req.body.rating
        console.log("newRatng\n\n", newRating )

        const rev = await Review.findByPk(id);
        console.log("reviewView.save is not func??", rev)

        const { review, rating } = rev;

        if (review !== newReview){
            rev.review = newReview;
            await rev.save()
        }
        if (rating !== newRating){
            rev.rating = newRating;
            await rev.save()
        }

        const newRev = await Review.findByPk(id)

        return res.json(newRev);
        // res.send("HELLO")
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
