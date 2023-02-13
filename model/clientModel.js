const mongoose=require('mongoose');


const Questions=new mongoose.Schema({
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

const Question=mongoose.model('client',Questions)

module.exports = Question;
