import movies_tvshows from '../datas/movies_tv_shows.js'

// @desc    Get all Movies or TV Shows 
// @route   GET /api/movies-and-tv-shows
// @access  public
const getAllMoviesAndTVShows = (req, res) => {
    res.json(movies_tvshows)
}

// @desc    Get Movie or TV Show by id
// @route   GET /api/movies-and-tv-shows/:id
// @access  public
const getById = (req, res) => {
    res.send(`${req.params.id}`)
}

// @desc    Register new Movie or TV Show 
// @route   POST /api/movies-and-tv-shows/add-new-movie
// @access  private
const addNewMoviesORTVShows = (req, res) => {
    res.send('add-new')
}

export { getAllMoviesAndTVShows, getById, addNewMoviesORTVShows }