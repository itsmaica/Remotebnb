const express = require("express");
// const { check } = require("express-validator");
const asyncHandler = require("express-async-handler");
// const { default: reducer } = require("../../../frontend/src/store/session");

//Might upload to images on a different form altogether!
const {
  multipleMulterUpload,
  multiplePublicFileUpload,
  // singleMulterUpload,
  // singlePublicFileUpload
} = require("../../awsS3.js");

//Need below for error validation later on
const { handleValidationErrors } = require("../../utils/validation");
// const { setTokenCookie, restoreUser } = require("../../utils/auth");
const { Spot, Image, Review, User } = require("../../db/models");
const { check } = require("express-validator");

// const Op = Sequelize.Op

const router = express.Router();

const validateSpotForm = [
  check("name")
    .notEmpty({ checkFalsey: true })
    .isLength({ max: 150})
    .withMessage("The name of your spot cannot be longer than 150 characters."),
  check("description")
    .notEmpty({ checkFalsey: true })
    .isLength({ min: 20})
    .withMessage('Please enter a description that is longer than 20 words'),
  check("guests")
    .notEmpty({ checkFalsey: true })
    .isInt({ min:1})
    .withMessage("Spot must be able to host at least 1 guest."),
  check("beds")
    .notEmpty({ checkFalsey: true })
    .isInt({ min: 1 })
    .withMessage("Spot must have at least 1 bed."),
  check("baths")
    .notEmpty({ checkFalsey: true })
    .isInt({ min: 1})
    .withMessage("Spot must have at least 1 bathroom."),
  check("address")
    .notEmpty({ checkFalsey: true })
    .withMessage("Please provide an address. This will not be publicly shared."),
  check("city")
    .notEmpty({ checkFalsey: true })
    .withMessage("Please provide a city."),
  check("state")
    .notEmpty({ checkFalsey: true })
    .withMessage("Please provide a state."),
  check("country")
    .notEmpty({ checkFalsey: true })
    .withMessage("Remotebnb is currently operating within the United States only."),
  check("price")
    .notEmpty({ checkFalsey: true })
    .withMessage("Please provide a nightly price for your spot."),
    handleValidationErrors,
];

//Get all the spots
router.get(
  "/",
  asyncHandler(async (req, res) => {
    const spots = await Spot.findAll({
      include: [Image, Review]
    });
    return res.json(spots);
  })
);

//Get One Spot
router.get(
  "/:spotId",
  asyncHandler(async (req, res) => {
    // console.log("ONE SPOT ROUTE -- spots.api \n\n")
    const { spotId } = req.params;
    const oneSpot = await Spot.findByPk(spotId, {
      include: [
        { model: Image},
        {model: User},
        {model: Review,
          include: User}
      ]
    });
    return res.json(oneSpot);
  })
);

//Get Reviews for One Spot
router.get(
  "/:spotId/reviews",
  asyncHandler(async (req, res) => {
    const { spotId } = req.params;
    const reviews = await Review.findAll({
      include: [User, Spot],
      where: { spotId: spotId },
      // include: Spot
    });
    return res.json(reviews);
  })
);

//Create A Spot - MUST VALIDATE CREATION
router.post(
  "/new",
  multipleMulterUpload("images"),
  validateSpotForm,
  asyncHandler(async (req, res) => {
    // console.log("HELLO REQ-from spots.js api--\n\n", req.body);

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
    });

    // console.log("What is req.file??? \n\n", req.files);
    //2.
    // not accepting the return?
    // console.log(
    //   "What is req.file from request? -- this is going to aws \n\n",
    //   spot
    // );
    const imgFromAws = await multiplePublicFileUpload(req.files);
    // console.log("FROM AWS--in spots.js api-- \n\n", imgFromAws);

    // const spotpic = await Image.create({
    //   spotId: spot.id,
    //   url: imgFromAws
    // });

    //3.
    // await Image.create(spot.id )
    const arr = []

    for (let i = 0; i < imgFromAws.length; i++) {
        let spotpic = await Image.create({
            spotId: spot.id,
            url: imgFromAws[i]
            // url: req.body
        })
        arr.push(spotpic);
    }
    // console.log("Arr---- \n\n", arr)
    return res.json({
      spot,
      // arr
    });
  })
);

module.exports = router;
