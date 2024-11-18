//quizRouter.js
const express = require('express');
const router = express.Router();
const { createQuiz,updateQuiz,deleteQuiz } = require('../controllers/quizController');

router.post('/:reelId/quiz', createQuiz);

router.put('/:reelId/quiz',updateQuiz);

router.delete('/:reelId/quiz',deleteQuiz);

module.exports = router;