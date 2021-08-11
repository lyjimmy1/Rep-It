const express = require('express')
const router = express.Router();
const {check} = require('express-validator')

const asyncHandler = require('express-async-handler');
const {requireAuth } = require('../../utils/auth');
const { Exercise, Bodyregion, User, Review, Sequlize } = require('../../db/models');

//CRUD: read all exercises
router.get("/", asyncHandler(async (req, res) =>{
    const exercises = await Exercise.findAll({include: {all:true}})
    res.json(exercises)
}))

//CRUD: read exercise by id
router.get("/:id/", asyncHandler(async (req, res) =>{
    const exerciseId = parseInt(req.params.id)
    const exercise = await Exercise.findByPk(exerciseId, {include: {all:true}})
    return res.json(exercise)
}))

//CRUD: user is able to post an exercise
router.post("/", asyncHandler(async (req, res) =>{
    const {user_id, name, description, sets, reps, body_region_id} = req.body;

    const exercise = await Exercise.create({user_id:user_id, name:name, description:description, sets:sets, reps:reps, body_region_id:body_region_id})
    return res.json({exercise})
}))

//CRUD: user can delete a specific exercise
router.delete("/:id", asyncHandler(async (req, res) =>{
    const exerciseId = parseInt(req.params.id)
    const exercise = await Exercise.findByPk(exerciseId)

    if(exercise){
        await exercise.destroy();
        return res.json("exercise has been deleted")
    }
}))

router.put("/:id", asyncHandler(async(req, res) =>{
    const {user_id, name, description, sets, reps, body_region_id} = req.body;

    const exerciseId = req.params.id;

    const exercise = await Exercise.findByPk(exerciseId)
    

    if(exercise){
        await exercise.update({
            name: name,
            description: description,
            sets: sets,
            reps: reps,
            body_region_id: body_region_id
        })
    }

    return res.json("exercise has been updated")
}))
module.exports = router;
