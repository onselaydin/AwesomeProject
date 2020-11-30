const mongoose = require('mongoose')

const EmployeeSchema = new mongoose.Schema({
    name:String,
    email:String,
    salary:String,
    phone:String,
    position:String,
    picture:String,
    taskcomment:String
})

mongoose.model("employee",EmployeeSchema)