import { gql } from 'apollo-server-express';

export const typeDefs = gql`
  type User {
    _id: ID!
    name: String!
    email: String!
    isAdmin: Boolean!
  }

  type Actor {
    name: String!
    createdAt: String!
    updatedAt: String!
  }

  type Director {
    name: String!
    createdAt: String!
    updatedAt: String!
  }

  type Producer {
    name: String!
    createdAt: String!
    updatedAt: String!
  }

  input ActorInput {
    name: String!
  }

  input DirectorInput {
    name: String!
  }

  input ProducerInput {
    name: String!
  }

  type MovieTVShow {
    _id: ID!
    title: String!
    runtime: Int!
    type: String!
    genre: String!
    actors: [Actor!]!
    directors: [Director!]!
    producers: [Producer!]!
    createdBy: User!
    createdAt: String!
    updatedAt: String!
  }

  type Query {
    user(ID: ID): User
    getAllUsers: [User]
    getMovieTVShow(ID: ID!): MovieTVShow
    getAllMovieTVShows: [MovieTVShow]
  }

  type Mutation {
    userLogin(email: String!, password: String!): String
    userRegistration(name: String!, email: String!, password: String!, isAdmin: Boolean!): String
    addNewMovieTVShow(
      title: String!
      runtime: Int!
      type: String!
      genre: String!
      producers: [ProducerInput!]!
      actors: [ActorInput!]!
      directors: [DirectorInput!]!
    ): MovieTVShow!
  }
`