const router = require('express').Router();
const sessionRouter = require('./session.js');
const usersRouter = require('./users.js');
const exerciseRouter = require('./exercise.js');
const reviewRouter= require('./review.js')

router.use('/session', sessionRouter);
router.use('/users', usersRouter);
router.use('/exercises', exerciseRouter);
router.use('/reviews', reviewRouter)


router.post('/test', function(req, res) {
    res.json({ requestBody: req.body });
  });


module.exports = router;
