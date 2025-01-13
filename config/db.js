const mongoose = require('mongoose')

const connectDB = async()=>{
    try{

        await mongoose.connect(process.env.MONGO_URL)
        console.log(`connection to mongodb postbase ${mongoose.connection.host}`)

    }
    catch(err){
        console.log(`postbase error: ${err}`)
    }
}

module.exports =connectDB