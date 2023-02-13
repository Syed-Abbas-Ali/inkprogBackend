const mongoose=require('mongoose');


const deletedQuestionsSchema=new mongoose.Schema({
    email:{
        type:String,
        required: true
    },
    phone_number:{
        type:String,
        required: true
    },
    category:{
        type:String,
        required: true
    },
    questions:[{type:Object}]
})

const deletedQuestion=mongoose.model('deleted_client',deletedQuestionsSchema)

module.exports = deletedQuestion;
