
const express  = require("express")
const mongoose = require("mongoose")
const app = express()
const cors = require("cors")

const mongoUrl = 'mongodb://localhost:27017/dbUsers'

app.use(express.json())
app.use(cors())

mongoose.connect(mongoUrl).then(() => {
    app.listen(process.env.PORT || 3000, () => {
        console.log("app is started")
    })
}).catch(e => console.log(e)) 

const userSchema = mongoose.Schema({
    name: String,
    age: Number
})

const mongoModel = mongoose.model("users", userSchema)

app.get("/users", async (req,res) => {
    const usersData = await mongoModel.find()
    res.send(usersData)
})