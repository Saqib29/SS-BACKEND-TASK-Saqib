import express from 'express'
import movies_tvshows from '../datas/movies_tv_shows.js'

const router = express.Router()


// @desc    Get all Movies or TV Shows 
// @route   GET /api/movies-and-tv-shows
// @access  public
router.route('/').get((req, res) => {
    res.json(movies_tvshows)
})

// @desc    Get Movie or TV Show by id
// @route   GET /api/movies-and-tv-shows/:id
// @access  public
router.route('/:id').get((req, res) => {
    res.send(`${req.params.id}`)
})

// @desc    Register new Movie or TV Show 
// @route   POST /api/movies-and-tv-shows/add-new-movie
// @access  private
router.route('/add-new').post((req, res) => {
    res.send('add-new')
})



export default router