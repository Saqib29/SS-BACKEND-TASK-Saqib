import express from 'express'
import dotenv from 'dotenv'
import cookieParser from 'cookie-parser'
import connectDB from './config/db.js'
import moviesTVShwosRoute from './routes/movies_tvshowsRoutes.js'
import userRoutes from './routes/userRoutes.js'
import { notFound, errorHandler } from './middleware/errorMiddleware.js'
const app = express()

dotenv.config()
connectDB()

// middlewares
app.use(express.json())
app.use(cookieParser())

// Routes
app.use('/api/movies-and-tv-shows', moviesTVShwosRoute)
app.use('/api/users', userRoutes)

app.get('/', (req, res) => {
    res.send('API is running...')
})

// Custome error handler
app.use(notFound)
app.use(errorHandler)



const PORT = process.env.PORT || 5000
app.listen(PORT, console.log(`Server is running on PORT ${PORT}`))

