import { gql } from "apollo-server";

const CKJokes = `
  type Joke {
    id: ID!
    value: String!
    url: String
    icon_url: String
    categories: [String!]
  }

  type Query {
    _: String
  }

  extend type Query {
    joke(category: String!): Joke
    categories: [String!]
  }
`;

export default CKJokes;
