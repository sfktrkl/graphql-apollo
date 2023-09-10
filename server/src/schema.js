const gql = require("graphql-tag");

const typeDefs = gql`
  type Query {
    "Get tracks for homepage"
    tracksForHome: [Track!]!
    "Get a specific track, provided a track's ID"
    track(id: ID!): Track
    "Get a specific module, provided a module's ID"
    module(id: ID!): Module
  }
  type Mutation {
    "Increment the track's number of views, provided a track's ID"
    incrementTrackViews(id: ID!): IncrementTrackViewsResponse
  }
  type IncrementTrackViewsResponse {
    "Similar to HTTP status code, represents the status of the mutation"
    code: Int!
    "Indicates whether the mutation was successful"
    success: Boolean!
    "Human-readable message for the UI"
    message: String!
    track: Track
  }
  "A track is a group of Modules that teaches about a specific topic"
  type Track {
    id: ID!
    title: String!
    author: Author!
    "The track card picture url"
    thumbnail: String
    "The track's approximate length to complete, in minutes"
    length: Int
    "The number of modules this track contains"
    modulesCount: Int
    "The track's description, can be in Markdown format"
    description: String
    numberOfViews: Int
    modules: [Module!]!
  }
  type Author {
    id: ID!
    "Author's first and last name"
    name: String!
    "Author's profile picture url"
    photo: String
  }
  type Module {
    id: ID!
    title: String!
    "The Module's length in minutes"
    length: Int
    content: String
    videoUrl: String
  }
`;

module.exports = typeDefs;
