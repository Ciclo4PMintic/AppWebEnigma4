const mongoose=require('mongoose')
const Schema = mongoose.Schema
const projectSchema=new Schema({
    leader:{type:String,Required:true},
    name:{type:String,Required:true},
    objetives:String,
    budget:Number,
    startDate:String,
    endDate:String,
    isActive:Boolean,
    projectPhase:String


})

module.exports=mongoose.model("Proyect", projectSchema)