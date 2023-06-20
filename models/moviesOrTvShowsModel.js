import mongoose from 'mongoose'

// Schema for the Actors collection
const actorSchema = new mongoose.Schema({
    name: { type: String, required: true },
}, { timestamps: true })

// Schema for the Directors collection
const directorSchema = new mongoose.Schema({
    name: { type: String, required: true },
}, { timestamps: true })

// Schema for the Producers collection
const producerSchema = new mongoose.Schema({
    name: { type: String, required: true },
}, { timestamps: true });
  

// Sschema for the Movies/TV Shows collection
const moviesOrTvShowsSchema = new mongoose.Schema(
  {
    title: { type: String, required: true },
    runtime: { type: Number, required: true },
    actors: [actorSchema],
    directors: [directorSchema],
    producers: [producerSchema],
    createdBy: { type: mongoose.Schema.Types.ObjectId, ref: 'User' },
  },
  {
    timestamps: true,
    collection: 'movieORtvshows',
  }
)



const MovieOrTVshows = mongoose.model('MoviesORTVshows', moviesOrTvShowsSchema)

export default MovieOrTVshows