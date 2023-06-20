import Movies_TVshows from "../models/movies_TvShowsModel.js"
import User from '../models/userModel.js'
import dotenv from 'dotenv'
import users from './users.js'
import movies_tvShows from './movies_tv_shows.js'
import connectDB from '../config/db.js'

dotenv.config()
connectDB()

const importData = async () => {
    try{
        await Movies_TVshows.deleteMany()
        await User.deleteMany()

        const createUsers = await User.insertMany(users)
        const mainUsrer = createUsers[0]._id

        const sampleMovies_TVshows = movies_tvShows.map(movie_tvshow => {
            return { ...movie_tvshow, createdBy: mainUsrer }
        })

        await Movies_TVshows.insertMany(sampleMovies_TVshows)

        console.log(`Data imported Successfully!`)
        process.exit()

    } catch (error) {
        console.log(error)
        process.exit(1)
    }
}

const dataDestroy = async () => {
    try {
        await Movies_TVshows.deleteMany()
        await User.deleteMany()

        console.log('Data destroyed')
        process.exit()
    } catch (error) {
        console.log(error)
        process.exit(1)
    }
}

if (process.argv[2] == '-d'){
    dataDestroy()
} else {
    importData()
}