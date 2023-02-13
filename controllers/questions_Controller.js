const questionsModel = require('../models/questions_Model')

const createQuestions = async (req,res) => {
 try{
    const questions = await questionsModel.create(req.body);
    res.status(200).json({questions})
 }catch(err){
    res.status(404).json({
        message:err.message,
        status:"Questions_Post is not created"
    })
 }
}


const getQuestions = async (req,res) => {
    try{
        const questions = await questionsModel.find({})
        res.status(200).json(questions)
    }catch(err){
        res.status(404).json({
            message:err.message,
            status:"Questions are not get"
        })
    }
}

module.exports = {createQuestions, getQuestions}

