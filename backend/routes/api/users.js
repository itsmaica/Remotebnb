const express = require("express");
const { check } = require("express-validator");
const asyncHandler = require("express-async-handler");

const { handleValidationErrors } = require("../../utils/validation");
const { setTokenCookie } = require("../../utils/auth");
const { User, Spot, Review, Image, Sequelize } = require("../../db/models");

const router = express.Router();

const validateSignup = [
  check('email')
    .exists({ checkFalsy: true })
    .isEmail()
    .withMessage('Please provide a valid email.'),
  check('username')
    .exists({ checkFalsy: true })
    .isLength({ min: 4 })
    .withMessage('Please provide a username with at least 4 characters.'),
  check('username')
    .not()
    .isEmail()
    .withMessage('Username cannot be an email.'),
  check('password')
    .exists({ checkFalsy: true })
    .isLength({ min: 6 })
    .withMessage('Password must be 6 characters or more.'),
  handleValidationErrors,
];

const Op = Sequelize.Op

// Sign up
router.post(
  '',
  validateSignup,
  asyncHandler(async (req, res) => {
    // console.log("Hello from the signup route. What is req.body?--> \n\n", req.body)
    const { firstName, lastName, email, password, username } = req.body;
    const user = await User.signup({ firstName, lastName, email, username, password });

    await setTokenCookie(res, user);

    return res.json({user});
  }),
);

//Get A User's Spots
router.get(
  '/:userId/spots',
  asyncHandler(async(req,res) => {
    // console.log("HELLO FROM THE GET USER SPOTS ROUTE")
    const { userId } = req.params;
    const userSpots = await Spot.findAll({
      where:{ userId : { [Op.eq]: userId} },
      order: [ ['id', 'DESC'] ]
    })
    return res.json(userSpots)
  })
)

// Delete A User's Spot
router.delete(
  '/:userId/spots/:spotId/delete',
  asyncHandler(async(req,res) => {
      const spotId = req.params.spotId;
      const spot = await Spot.findByPk(spotId, {
          include: [Review, Image]
      })
      await Review.destroy({
          where: { spotId: spotId }
      })
      await Image.destroy({
          where: { spotId: spotId }
      })
      await Spot.destroy({ where: {id: spotId} })
      return res.json(spot)
  })
)

router.put(
  '/:userId/spots/:spotId/edit',
  asyncHandler(async(req,res) => {
    // console.log("HELLO????? ------",req.body)
      const { spotId } = req.params
      const id = req.params.spotId
      const newName = req.body.name
      const newDescription = req.body.description
      const newGuests = req.body.guests
      const newBeds = req.body.beds
      const newBaths = req.body.baths
      const newAddress = req.body.address
      const newCity = req.body.city
      const newState = req.body.state
      const newCountry = req.body.country
      const newPrice = req.body.price

      const spot = await Spot.findByPk(id)
      // console.log("what is spot?? \n\n", spot)

      const {
          name, description, guests, beds,
          baths, address, city, state, country, price
      } = spot;
      // console.log("HELLO HELLO ______----___-",name, newName)

      if (name !== newName){
          spot.name = newName
          await spot.save()
      }
      if (description !== newDescription){
          spot.description = newDescription
          await spot.save()
      }
      if (guests !== newGuests){
          spot.guests = newGuests
          await spot.save()
      }
      if (beds !== newBeds){
          spot.beds = newBeds
          await spot.save()
      }
      if (baths !== newBaths){
          spot.baths = newBaths
          await spot.save()
      }
      if (address !== newAddress){
          spot.address = newAddress
          await spot.save()
      }
      if (city !== newCity){
          spot.city = newCity
          await spot.save()
      }
      if (state !== newState){
          spot.state = newState
          await spot.save()
      }
      if (country !== newCountry){
          spot.country = newCountry
          await spot.save()
      }
      if (price !== newPrice){
          spot.price = newPrice
          await spot.save()
      }

      const updatedSpot = await Spot.findByPk(id)

      return res.json(updatedSpot)
  })
)

module.exports = router;
