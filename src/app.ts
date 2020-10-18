import express from "express";
import { ApolloServer } from "apollo-server-express";
import { buildSchema } from "type-graphql";

import { PingResolver } from "./resolvers/ping";
import { ProductResolver } from "./resolvers/ProductResolver";
import { CategoryResolver } from './resolvers/CategoryResolver';
import { UserResolver } from './resolvers/UserResolver';
import { RecipeResolver } from './resolvers/RecipeResolver';

export async function startServer() {

  const app = express();

  const server = new ApolloServer({
    schema: await buildSchema({
      resolvers: [PingResolver, ProductResolver, CategoryResolver,
        UserResolver, RecipeResolver],
      validate: false
    }),
    context: ({ req, res }) => ({ req, res })
  });

  server.applyMiddleware({ app, path: "/graphql" });

  return app;
}
