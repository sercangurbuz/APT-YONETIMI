import cors from 'cors';
import dotenv from 'dotenv';
import express from 'express';
import createApolloServer from './apollo';
import initKnex from './db/init';

dotenv.config();

const { PORT, CLIENT_HOST, NODE_ENV } = process.env;
const isDev = NODE_ENV !== 'production';

const startServer = () => {
  const app = express();

  /* -------------------------------------------------------------------------- */
  /*                                 Middlewares                                */
  /* -------------------------------------------------------------------------- */

  app.use('/imgs', express.static('uploads'));
  app.use(
    cors({
      credentials: true,
      origin: CLIENT_HOST,
    }),
  );

  /* -------------------------------------------------------------------------- */
  /*                  initialize knex instance depending on env                 */
  /* -------------------------------------------------------------------------- */

  initKnex({ isDev });

  /* -------------------------------------------------------------------------- */
  /*                   Create apollo instance with express app                  */
  /* -------------------------------------------------------------------------- */

  const { httpServer, apolloServer } = createApolloServer({ app, isDev });

  httpServer.listen(PORT, () => {
    console.log(`🚀 Server ready at ${apolloServer.graphqlPath}`);
    console.log(
      `🚀 Subscriptions ready at ws://localhost:${PORT}${apolloServer.subscriptionsPath}`,
    );
  });
};

/* -------------------------------------------------------------------------- */
/*                                    START                                   */
/* -------------------------------------------------------------------------- */

startServer();
