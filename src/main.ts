import "reflect-metadata";
import { UserResolver } from "./resolvers/userResolver";
import { JokeResolver } from "./resolvers/jokeResolver";
import { environment } from "./environment";
import { createConnection } from "typeorm";
import express from "express";
import { ApolloServer } from "apollo-server-express";
import { buildSchema } from "type-graphql";

(async () => {
  const app = express();

  await createConnection();

  const apolloServer = new ApolloServer({
    introspection: true,
    playground: true,
    schema: await buildSchema({
      resolvers: [UserResolver, JokeResolver]
    }),
    context: ({ req, res }) => ({ req, res })
  });

  apolloServer.applyMiddleware({ app });
  app.listen(4000, () => {
    console.log("CN Jokes server started at localhost:4000");
  });
})();

if (module.hot) {
  module.hot.accept();
  module.hot.dispose(() => console.log("Module disposed. "));
}
