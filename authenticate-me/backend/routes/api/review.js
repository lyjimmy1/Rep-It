const express = require('express')
const router = express.Router();
const {check} = require('express-validator')

const asyncHandler = require('express-async-handler');
const {requireAuth } = require('../../utils/auth');
const { Exercise, Bodyregion, User, Review, Sequlize } = require('../../db/models');

router.get("/", asyncHandler(async (req, res) =>{
    const reviews = await Review.findAll()
    res.json(reviews)
}))

//CRUD: read review by id
router.get("/:id/", asyncHandler(async (req, res) =>{
    const reviewId = parseInt(req.params.id)
    const review = await Review.findByPk(reviewId)
    return res.json(review)
}))

module.exports= router;
