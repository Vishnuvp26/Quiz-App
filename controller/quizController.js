const questions = require("../model/quizModel");

exports.getQuizPage = (req, res) => {
    const totalQuestions = questions.length;
    const currentQuestionIndex = req.query.q ? parseInt(req.query.q) : 0;

    res.render("quiz", { 
        questions, 
        currentQuestion: currentQuestionIndex, 
        totalQuestions, 
        score: 0 
    });
};

exports.submitAnswer = (req, res) => {
    const { answer, currentQuestion, score } = req.body;
    const totalQuestions = questions.length;
    const isCorrect = answer === questions[currentQuestion].answer;
    const newScore = isCorrect ? parseInt(score) + 1 : parseInt(score);

    if (parseInt(currentQuestion) + 1 < totalQuestions) {
        res.render("quiz", { 
            questions, 
            currentQuestion: parseInt(currentQuestion) + 1, 
            totalQuestions, 
            score: newScore 
        });
    } else {
        res.render("result", { 
            score: newScore, 
            totalQuestions 
        });
    }
};
