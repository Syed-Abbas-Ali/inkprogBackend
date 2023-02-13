const Client= require("../model/clientModel")
const deletedClient= require("../model/deletedClientModel")
const contactModel= require("../model/contact")
const { response } = require("express")

const quesions=async(req,res)=>{
    try{
    const user=await Client.create(req.body)
    await user.questions.push(req.body)
    res.status(200).send(user)
    }
    catch(err){
        res.status(500).send(err.message)
    }
}

// get all data
const Alldata=async(req,res)=>{
   try{ const alldata = await Client.find()
    res.send(alldata)}
    catch(err){
        res.status(500).send(err.message)
    }
}

// get user by id
const findById=async(req,res)=>{
    const {id}=req.params
    try{ 
        const data = await Client.findById({_id:id})
     res.send(data)}
     catch(err){
         res.status(500).send(err.message)
     }
 }

// save the user in deletedquestions when deleting user by id
const deleteById=async(req,res)=>{
    const {id}=req.params
    
    try{
        let user=await Client.findById({_id:id})
        const {_id,email,phone_number,category,questions}=user
        if(user ){
            await deletedClient.create({
                _id:_id,
                email:email,
                phone_number:phone_number,
                category:category,
                questions:questions
            })
            await Client.deleteOne(user)
            res.send("deleted")
        }
    }
     catch(err){
         res.status(500).send(err.message)
     }
 }

//  contact
const Contact =async(req,res)=>{
    try{
    let user=await contactModel.create(req.body)
    res.status(200).send(user)
    }
    catch(err){
        res.status(500).send(err.message)
    }
}


// /delete contacts/:id
const deleteContact=async(req, res) => {
    const {id} = req.params;
    try{
        await contactModel.findByIdAndDelete({_id:id})
        res.status(200).send({message:"deleted"});

    }
    catch(err) {
        res.status(500).send({message:err.message});
    }
    
}

// get all contacts
const getAllContacts =async(req, res) => {
    let data=await contactModel.find()
    res.status(200).send(data)
}
module.exports ={quesions,Alldata,findById,deleteById,Contact,deleteContact,getAllContacts}