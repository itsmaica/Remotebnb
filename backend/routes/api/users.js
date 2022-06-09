const express = require("express");
const { check } = require("express-validator");
const asyncHandler = require("express-async-handler");

const { handleValidationErrors } = require("../../utils/validation");
const { setTokenCookie, requireAuth } = require("../../utils/auth");
const { User, Spot, Sequelize } = require("../../db/models");

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

    return res.json({
      user,
    });
  }),
);

//Get A User's Spots
router.get(
  '/:userId/spots',
  asyncHandler(async(req,res) => {
    const { userId } = req.params;
    const userSpots = await Spot.findAll({
      where:{ userId : { [Op.eq]: userId} },
      order: [ ['id', 'DESC'] ]
    })
    return res.json(userSpots)
  })
)

module.exports = router;
