import mongoose from 'mongoose';

// Schema for the Actors collection
const actorSchema = new mongoose.Schema(
  {
    name: { type: String, required: true },
  },
  { timestamps: true }
);

// Schema for the Directors collection
const directorSchema = new mongoose.Schema(
  {
    name: { type: String, required: true },
  },
  { timestamps: true }
);

// Schema for the Producers collection
const producerSchema = new mongoose.Schema(
  {
    name: { type: String, required: true },
  },
  { timestamps: true }
);

// Sschema for the Movies/TV Shows collection
const movies_TvShowsSchema = new mongoose.Schema(
  {
    title: { type: String, required: true },
    runtime: { type: Number, required: true },
    type: { type: String, enum: ['movie', 'tv show'], required: true },
    genre: { type: String, required: true },
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

const Movies_TVshows = mongoose.model('Movies_TVshows', movies_TvShowsSchema);

export default Movies_TVshows;
