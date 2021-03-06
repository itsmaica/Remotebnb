const express = require("express")

const asyncHandler = require("express-async-handler");

const { User, Spot, Booking, Image, Sequelize } = require("../../db/models")

const {
    multipleMulterUpload,
    multiplePublicFileUpload
} = require ("../../awsS3.js")

const router = express.Router();

const Op = Sequelize.Op

// Get all the Images for a Spot - 'api/images/'
//layer this with '/api/spots/spotId/images'

router.get(
    '/',
    asyncHandler(async(req,res) => {
        const images = await Image.findAll();
        return res.json(images)
    })
)

router.get(
    '/:spotId',
    asyncHandler(async(req,res) => {
        const { spotId } = req.params;
        const images = await Image.findAll({
            where: {
                spotId: {
                    [Op.eq]: spotId
                }
            }
        })
        return res.json(images)
        // const images = await Image.findAll()
        return res.json(images)
    })
)

// router.post(
//     '/new',
//     multipleMulterUpload("image"),
//     asyncHandler(async(req,res) => {
//         // const spotPics = await multiplePublicFileUpload(req.file)
//         const url = await multiplePublicFileUpload(req.file);
//         const spotPics = await Image.create({
//             url,
//             spotId: req.body.spotId

//         })
//         return res.json(spotPics)

//     })

// )

module.exports = router;
