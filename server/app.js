const express = require('express')
const app = express()
const bodyParser = require('body-parser')
const mongoose = require('mongoose')
require('./Employee')

app.use(bodyParser.json())

const Employee=mongoose.model("employee")

const mongoUri = "mongodb://employee:emp123@ds231517.mlab.com:31517/employeeapp?retryWrites=false"

mongoose.connect(mongoUri,{
    useNewUrlParser:true,
    useUnifiedTopology:true
})

mongoose.connection.on("connected",()=>{
    console.log("connected to mongo yeaah")
})

mongoose.connection.on("error",()=>{
    console.log("error",err)
})

app.get('/',(req,res)=>{
    Employee.find({}).then(data=>{
        res.send(data)
    }).catch(err=>{
        console.log(err)
    })
})

app.post('/send-data',(req,res)=>{
    const employee = new Employee({
        name:req.body.name,
        email:req.body.email,
        salary:req.body.salary,
        phone:req.body.phone,
        position:req.body.position,
        picture:req.body.picture,
        taskcomment:req.body.taskcomment
    })
    employee.save()
    .then(data=>{
        console.log(data)
        res.send(data)
    }).catch(err=>{
        console.log(err)
    })
})

app.post('/delete',(req,res)=>{
    Employee.findByIdAndRemove(req.body.id)
    .then(data=>{
        console.log(data)
        res.send(data)
    })
    .catch(err=>{
        console.log(err)
    })
})

app.post('/update',(req,res)=>{
    Employee.findByIdAndUpdate(req.body.id,{
        name:req.body.name,
        email:req.body.email,
        salary:req.body.salary,
        phone:req.body.phone,
        position:req.body.position,
        picture:req.body.picture,
        taskcomment:req.body.taskcomment
    }).then(data=>{
        console.log(data)
    })
    .catch(err=>{
        console.log(err)
    })
})

app.listen(3000,()=>{
    console.log("server running")
})