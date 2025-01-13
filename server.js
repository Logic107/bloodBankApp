const express = require('express')
const dotenv = require('dotenv')
const morgan = require('morgan')
const cors = require('cors')
const connectDB = require('./config/db')

dotenv.config()

//mongodb connection
connectDB()

const app = express()

//middlewares
app.use(express.json())
app.use(cors())
app.use(morgan('dev'))

// routes

// 1 test route
app.use('/api/v1/test', require('./routes/testRoutes'))
// auth route
app.use('/api/v1/auth', require('./routes/authRoutes'))
//inventory route
app.use('/api/v1/inventory', require('./routes/inventoryRoutes'))
//analytics route
app.use('/api/v1/analytics', require('./routes/analyticsRoutes'))
//admin route
app.use('/api/v1/admin', require('./routes/adminRoutes'))



app.listen(4000, (req, res) => {
    console.log(`i am running at port 4000`)
})