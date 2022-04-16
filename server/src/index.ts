import { ApolloServer } from "apollo-server";

import schema from "./schema/schema";
import resolvers from "./resolvers";

const server = new ApolloServer({
  typeDefs: schema,
  resolvers,
});

server.listen().then(() => {
  console.log("Server is running");
});
