import { ApolloServer } from "apollo-server";
import resolvers from "./resolvers";
import typeDefs from "./type-defs";
import { environment } from "./environment";

const server: ApolloServer = new ApolloServer({
  resolvers,
  typeDefs,
  introspection: environment.apollo.introspection,
  playground: environment.apollo.playground
});

server.listen().then(({ url }) => console.log(`Server ready at ${url}. `));

if (module.hot) {
  module.hot.accept();
  module.hot.dispose(() => console.log("Module disposed. "));
}
