import { getUserById, getAllUsers, userRegistration, userLogin } from '../controllers/userController.js'
import { addNewMoviesORTVShows, getAllMoviesAndTVShows, getMovieById } from '../controllers/movie_tv_showsController.js'
import bcrypt from 'bcryptjs';
import jwt from 'jsonwebtoken';

const resolvers = {
  Query: {
    user: async (_, { ID }) => {
      return await getUserById(ID);
    },
    getAllUsers: async (_, args) => {
      return await getAllUsers();
    },
    getMovieTVShow: async (_, { ID }) => {
      return await getMovieById(ID);
    },
    getAllMovieTVShows: async (_, args) => {
      return await getAllMoviesAndTVShows();
    },
  },
  Mutation: {
    userLogin: async (_, { email, password }, { req, res }) => {
      return await userLogin({ email, password }, res)
    },
    userRegistration: async (_, { name, email, password, isAdmin }, { req, res }) => {
      return await userRegistration({ name, email, password, isAdmin }, res)
    },
    addNewMovieTVShow: async (_, { title, runtime, type, genre, actors, directors, producers, createdBy }, { req, res }) => {
      return await addNewMoviesORTVShows({ title, runtime, type, genre, actors, directors, producers, createdBy }, res)
    },
  },
};

export default resolvers;
