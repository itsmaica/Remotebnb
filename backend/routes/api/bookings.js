const express = require("express");

const asyncHandler = require("express-async-handler");

const { Spot, Image, Review, User, Booking } = require("../../db/models");
const { check } = require("express-validator");
// const sequelize = require("sequelize");

const Sequelize = require('sequelize');

const Op = Sequelize.Op

const router = express.Router();

//get all of the bookings

router.get(
    "/",
    asyncHandler(async(req,res) => {
        const bookings = await Booking.findAll();
        console.log("This is bookings in the api", bookings)
        return res.json(bookings)
    })
)

// get one booking
// router.get(
//     "/:bookingId",
//     asyncHandler(async(req,res) => {
//         const { bookingId } = req.params;
//         const oneBooking = await Booking.findByPk(bookingId)
//         return res.json(oneBooking)
//     })
// )

// Get one user's bookings
router.get(
    "/:userId",
    asyncHandler(async(req,res) => {
        const { userId } = req.params;
        const userBookings = await Booking.findAll({
            where: {
                userId: { [Op.eq]: userId }
            }
        });
        return res.json(userBookings);
    })
);


router.post(
    "/new",
    // validation of booking here??
        // validation for if this exists or if this is in the past?
    asyncHandler(async(req,res) => {
        const booking = await Booking.create({
            userId: req.body.userId,
            spotId: req.body.spotId,
            startDate: req.body.startDate,
            endDate: req.body.endDate
        });
        return res.json(booking);
    })
);

//update a booking
router.put(
    "/:bookingId/edit",
    // validation??
    asyncHandler(async (req, res) => {
        const {bookingId} = req.params;
        const id=bookingId;

        newStartDate=req.body.startDate;
        newEndDate=req.body.endDate;

        const book = await Booking.findByPk(id);

        const {startDate, endDate} = book;

        if(startDate !== newStartDate){
            book.startDate = newStartDate;
            await book.save();
        }
        if(endDate !== newEndDate){
            book.endDate = newEndDate;
            await book.save();
        }

        const newBooking = await Booking.findByPk(id);

        return res.json(newBooking);

    })
)

// delete a booking
router.delete(
    "/:bookingId",
    asyncHandler(async (req,res) => {
        const { bookingId } = req.params;
        const id=bookingId;
        const item = await Booking.findByPk(id);
        const deletedBooking = item
        await item.destroy();
        res.json(deletedBooking)
    })
)


module.exports = router;
