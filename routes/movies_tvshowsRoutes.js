import express from 'express'
import { addNewMoviesORTVShows, getAllMoviesAndTVShows, getById } from '../controllers/movie_tv_showsController.js'
import { authentication } from '../middleware/authMiddleware.js'

const router = express.Router()



router.route('/').get(getAllMoviesAndTVShows)
router.route('/byId/:id').get(getById)
router.route('/add-new').post(authentication, addNewMoviesORTVShows)



export default router