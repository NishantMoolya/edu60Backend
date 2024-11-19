//reelRouter.js
const express = require('express');
const router = express.Router();

const {createReel } = require('../controllers/reelController');
const { createQuiz } = require('../controllers/quizController');
const {deleteReel}=require('../controllers/reelController')
const {deleteQuiz}=require('../controllers/quizController')

router.post('/reels', createReel, createQuiz);
router.post('/reels', deleteReel,deleteQuiz);
module.exports = router;