import Movies_TVshows from '../models/movies_TvShowsModel.js'

// @desc    Get all Movies or TV Shows 
// @route   GET /api/movies-and-tv-shows
// @access  public
const getAllMoviesAndTVShows = async () => {
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
          };
        });
        return movies_tvshows;
      } catch (error) {
        throw new Error(error.message)
      }
}

// @desc    Get Movie or TV Show by id
// @route   GET /api/movies-and-tv-shows/:id
// @access  public
const getMovieById = async (id) => {
    try {
      const movie = await Movies_TVshows.findById(id)
      if (!movie) {
        throw new Error('Not found')
      }
      return movie
    } catch (error) {
      throw new Error(error.message)
    }
  }

// @desc    Register new Movie or TV Show 
// @route   POST /api/movies-and-tv-shows/add-new-movie
// @access  proteced
const addNewMoviesORTVShows = async ({ title, runtime, type, genre, actors, directors, producers, createdBy }, res) => {
   try {
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

        return savedMovieOrTVShow
   } catch (error) {
        throw new Error(error.message)
   }

}

export { getAllMoviesAndTVShows, getMovieById, addNewMoviesORTVShows }