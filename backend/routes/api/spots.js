const express = require("express");
// const { check } = require("express-validator");
const asyncHandler = require("express-async-handler");
// const { default: reducer } = require("../../../frontend/src/store/session");

//Might upload to images on a different form altogether!
// const {
//     multipleMulterUpload,
//     multiplePublicFileUpload
// } = require ("../../awsS3.js")

//Need below for error validation later on
// const { handleValidationErrors } = require("../../utils/validation");
// const { setTokenCookie, restoreUser } = require("../../utils/auth");
const { Spot, Image, Review } = require("../../db/models");


// const Op = Sequelize.Op

const router = express.Router();

// need to write validations for spots
// const validateSpot = [
//     check("")
// ]


//Get all the spots
router.get(
    '/',
    asyncHandler(async (req,res) => {
        const spots = await Spot.findAll({
            include: [Image, Review]
        })
        return res.send(spots)
    })
);

//Get One Spot
router.get(
    '/:spotId',
    asyncHandler(async(req,res) => {
        const { spotId } = req.params;
        const oneSpot = await Spot.findByPk(spotId, {
            include: [Image, Review]
        })
        // const spot = await Spot.findByPk(spotId)
        return res.json(oneSpot)
    })
)

// Get One User's Spots
// router.get(
//     '/:userId',
//     asyncHandler(async(req,res) => {
//         const { userId } = req.params;
//         const userSpots = await Spot.findAll({
//             where: { userId : { [Op.eq]: userId} }
//         })
//     })
// )


//Create A Spot - MUST VALIDATE CREATION
router.post(
    '/new',
    // multipleMulterUpload("files"),
    // validateSpot,
    asyncHandler(async(req, res) => {
        const spot = await Spot.create({
            userId: req.body.userId,
            name: req.body.name,
            description: req.body.description,
            guests: req.body.guests,
            beds: req.body.beds,
            baths: req.body.baths,
            address: req.body.address,
            city: req.body.city,
            state: req.body.state,
            country: req.body.country,
            price: req.body.price
        })
        return res.json(spot)
    })
)



// router.put(
//     '/:spotId/edit',
//     asyncHandler(async(req,res) => {
//         const { spotId } = req.params
//         const id = req.params.spotId
//         const newName = req.body.name
//         const newDescription = req.body.description
//         const newGuests = req.body.guests
//         const newBeds = req.body.beds
//         const newBaths = req.body.baths
//         const newAddress = req.body.address
//         const newCity = req.body.city
//         const newState = req.body.state
//         const newCountry = req.body.country
//         const newPrice = req.body.price

//         const spot = await Spot.findByPk(id)
//         console.log("what is spot?? \n\n", spot)

//         const {
//             name, description, guests, beds,
//             baths, address, city, state, country, price
//         } = spot

//         if (name !== newName) {
//             spot.name = newName
//             await spot.save()
//         }
//         if (description !== newDescription) {
//             spot.description = newDescription
//             await spot.save()
//         }
//         if (guests !== newGuests) {
//             spot.guests = newGuests
//             await spot.save()
//         }
//         if (beds !== newBeds) {
//             spot.beds = newBeds
//             await spot.save()
//         }
//         if (baths !== newBaths) {
//             spot.baths = newBaths
//             await spot.save()
//         }
//         if (address !== newAddress) {
//             spot.address = newAddress
//             await spot.save()
//         }
//         if (city !== newCity) {
//             spot.city = newCity
//             await spot.save()
//         }
//         if (state !== newState) {
//             spot.state = newState
//             await spot.save()
//         }
//         if (country !== newCountry) {
//             spot.country = newCountry
//             await spot.save()
//         }
//         if (price !== newPrice) {
//             spot.price = newPrice
//             await spot.save()
//         }

//         const updatedSpot = await Spot.findByPk(id)

//         return res.json(updatedSpot)

//     })
// )


// router.delete(
//     '/:userId/spots/:spotId/delete',
//     asyncHandler(async(req, res) => {
//         console.log("HELLO FROM DELETE ROUTE!!!!!!!! \n\n")
//         const { spotId } = req.params;
//         const deleteThisSpot = await Spot.findByPk(spotId);
//         return deleteThisSpot.destroy();
//     })
//   )


module.exports = router;
