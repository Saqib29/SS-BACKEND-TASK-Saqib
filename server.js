import express from 'express'
import dotenv from 'dotenv'
import connectDB from './config/db.js'
import moviesTVShwosRoute from './routes/movies_tvshowsRoutes.js'
import userRoutes from './routes/userRoutes.js'
import { notFound, errorHandler } from './middleware/errorMiddleware.js'
const app = express()

dotenv.config()
connectDB()

app.use(express.json())

// Routes
app.use('/api/movies-and-tv-shows', moviesTVShwosRoute)
app.use('/api/users', userRoutes)

// Custome error handler
app.use(notFound)
app.use(errorHandler)

app.get('/', (req, res) => {
    res.send('API is running...')
})

const PORT = process.env.PORT || 5000
app.listen(PORT, console.log(`Server is running on PORT ${PORT}`))

