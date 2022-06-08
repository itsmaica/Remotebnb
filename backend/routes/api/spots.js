const express = require("express");
// const { check } = require("express-validator");
const asyncHandler = require("express-async-handler");

// const { handleValidationErrors } = require("../../utils/validation");
// const { setTokenCookie, restoreUser } = require("../../utils/auth");
const { User, Spot, Booking } = require("../../db/models");

const router = express.Router();

// need to write validations for spots
// const validateSpot = [
//     check("")
// ]


//Get all the spots
router.get(
    '/',
    asyncHandler(async (req,res) => {
        const spots = await Spot.findAll()
        return res.send(spots)
    })
);

//Get One Spot
router.get(
    '/:spotId',
    asyncHandler(async(req,res) => {
        const { spotId } = req.params;
        // const oneSpot = await Spot.findByPk(spotId, {
        //     include: Booking
        // })
        const spot = await Spot.findByPk(spotId)
        return res.json(spot)
    })
)

module.exports = router;
