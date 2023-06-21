import Movies_TVshows from '../models/movies_TvShowsModel.js'

// @desc    Get all Movies or TV Shows 
// @route   GET /api/movies-and-tv-shows
// @access  public
const getAllMoviesAndTVShows = async (req, res) => {
    try {
        let movies_tvshows = await Movies_TVshows.find({})
        movies_tvshows = movies_tvshows.map((movie) => {
            const actors = movie.actors.map((actor) => actor.name).join(', ')
            const producers = movie.producers.map((producer) => producer.name).join(', ')
            const directors = movie.directors.map((director) => director.name).join(', ')
      
            return {
              ...movie.toObject(),
              actors,
              producers,
              directors,
            }
        })
        res.json(movies_tvshows)
    } catch (error) {
        res.status(500).json({ 
            name: error.name,
            kind: error.kind,
            message: error.message
         })        
    }
}

// @desc    Get Movie or TV Show by id
// @route   GET /api/movies-and-tv-shows/:id
// @access  public
const getById = async (req, res) => {
    try {
        const movieId = req.params.id
        const movie = await Movies_TVshows.findById(movieId)
    
        if (!movie) {
          res.status(404).json({ message: 'Not found' })
          return;
        }
        
        res.json(movie);
      } catch (error) {
        console.error('Error:', error)
        res.status(500).json({ 
            name: error.name,
            kind: error.kind,
            message: error.message
         })
      }
}

// @desc    Register new Movie or TV Show 
// @route   POST /api/movies-and-tv-shows/add-new-movie
// @access  proteced
const addNewMoviesORTVShows = async (req, res) => {
   try {
        const { title, runtime, type, genre, actors, directors, producers, createdBy } = req.body

        const newMovieOrTVShow = new Movies_TVshows({
            title,
            runtime,
            type,
            genre,
            actors,
            directors,
            producers,
            createdBy,
        })

        const savedMovieOrTVShow = await newMovieOrTVShow.save()

        res.status(201).json(savedMovieOrTVShow)
   } catch (error) {
        res.status(500).json({ 
            name: error.name,
            kind: error.kind,
            message: error.message
         })
   }

}

export { getAllMoviesAndTVShows, getById, addNewMoviesORTVShows }