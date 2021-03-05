/* eslint-disable no-console */
import 'reflect-metadata';
import { ApolloServer } from 'apollo-server-express';
import cors from 'cors';
import http from 'http';
import dotenv from 'dotenv';
import express from 'express';
import { PubSub } from 'apollo-server';
import path from 'path';

import typeDefs from './schema';
import resolvers from './resolvers';

export const pubsub = new PubSub();

dotenv.config();

const { PORT, CLIENT_HOST } = process.env;

const startServer = async () => {
  //await createConnection();

  const app = express();
  // serve images
  app.use('/imgs', express.static('uploads'));

  app.use(
    cors({
      credentials: true,
      origin: CLIENT_HOST,
    })
  );

  const server = new ApolloServer({
    introspection: true,
    playground: true,
    tracing: true,
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

  httpServer.listen(PORT, () => {
    console.log(`🚀 Server ready at ${server.graphqlPath}`);
    console.log(
      `🚀 Subscriptions ready at ws://localhost:${PORT}${server.subscriptionsPath}`
    );
  });
};

startServer();
