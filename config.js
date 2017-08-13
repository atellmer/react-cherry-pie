const PORT = 3000;
const ENV = process.env.NODE_ENV || 'development';
const ROOT_DIR = 'client';
const WEBPACK_ENTRY_DIR = `${ROOT_DIR}/src/index`;
const WEBPACK_OUTPUT_DIR = `${ROOT_DIR}/public/dist/`;
const WEBPACK_PUBLIC_PATH = 'dist';

const GRAPHQL_API_PORT = 4000;
const GRAPHQL_API_ENDPOINT = `http://localhost:${GRAPHQL_API_PORT}/graphql`;
const GRAPHQL_API_SUBSCRIPTIONS = `ws://localhost:${GRAPHQL_API_PORT}/subscriptions`;

module.exports = {
  PORT,
  ENV,
  ROOT_DIR,
  WEBPACK_ENTRY_DIR,
  WEBPACK_OUTPUT_DIR,
  WEBPACK_PUBLIC_PATH,
  GRAPHQL_API_PORT,
  GRAPHQL_API_ENDPOINT,
  GRAPHQL_API_SUBSCRIPTIONS
};
