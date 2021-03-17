import { ApolloServer } from 'apollo-server-express';
import http from 'http';
import { Express } from 'express';
import { PubSub } from 'apollo-server';
import depthLimit from 'graphql-depth-limit';

import typeDefs from './schema';
import resolvers from './resolvers';

export const pubsub = new PubSub();

export default ({ app, isDev }: { app: Express; isDev: boolean }) => {
  const server = new ApolloServer({
    introspection: isDev,
    playground: isDev,
    validationRules: [depthLimit(10)],
    //tracing: isDev,
    typeDefs,
    resolvers,
    uploads: {
      maxFileSize: 10000000, // 10 MB
      maxFiles: 20,
    },
    context() {
      return {};
    },
  });

  server.applyMiddleware({ app });

  const httpServer = http.createServer(app);
  server.installSubscriptionHandlers(httpServer);

  return { apolloServer: server, httpServer };
};
