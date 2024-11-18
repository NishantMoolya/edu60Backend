//quizController.js

// const quizModel = require('../db/models/quizSchema.js'); 


exports.createQuiz = async (req, res) => {
    try {
        const { question, options, correctAnswer } = req.body;
        const reelId = req.params.reelId;

        // console.log('Received data:', { reelId, question, options, correctAnswer });

        //create new quiz
        //const newQuiz = 

        // Update the reel with the quiz ID
        // const updatedReel = 

        if (!updatedReel) {
            return res.status(404).json({ message: 'Reel not found' });
        }

        res.status(201).json({ success: true, quiz: newQuiz, updatedReel });
    } catch (error) {
        res.status(400).json({ message: error.message });
    }
    
};


 exports.updateQuiz = async (req, res) => {
    try{
        const reelId=req.params.reelId;
        const {question,options,correctAnswer}=req.body;

        // Check if the quiz for the given reelId exists 
        //const existingQuiz= query

       
        if(!existingQuiz)  {
            return res.status(404).json({ message: 'Quiz not found for this reel' });
        }

        // Update the quiz with the new data
        // const updatedQuiz=query
       

        res.status(200).json({ success: true, message: 'Quiz updated successfully', updatedQuiz });
    } catch (error) {
        res.status(400).json({ message: error.message });
    }

 };


exports.deleteQuiz = async (req, res) => {
    try {
        const reelId = req.params.reelId;

        // Check if the quiz for the given reelId exists 
        // const existingQuiz = query; 

        if (!existingQuiz) {
            return res.status(404).json({ message: 'Quiz not found for this reel' });
        }

        // Logic to delete the quiz
        //delete quiz query

        res.status(200).json({ success: true, message: 'Quiz deleted successfully' });
    } catch (error) {
        res.status(400).json({ message: error.message });
    }
    
};
