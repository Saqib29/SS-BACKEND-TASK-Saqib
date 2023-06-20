import express from 'express'
import { addNewMoviesORTVShows, getAllMoviesAndTVShows, getById } from '../controllers/movie_tv_showsController.js'

const router = express.Router()



router.route('/').get(getAllMoviesAndTVShows)
router.route('/byId/:id').get(getById)
router.route('/add-new').post(addNewMoviesORTVShows)



export default router