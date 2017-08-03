const PORT = 3000;
const ENV = process.env.NODE_ENV;
const ROOT_DIR = 'client';
const WEBPACK_ENTRY_DIR = `${ROOT_DIR}/src/index`;
const WEBPACK_OUTPUT_DIR = `${ROOT_DIR}/public/dist/`;
const WEBPACK_PUBLIC_PATH = 'dist';


module.exports = {
  PORT,
  ENV,
  ROOT_DIR,
  WEBPACK_ENTRY_DIR,
  WEBPACK_OUTPUT_DIR,
  WEBPACK_PUBLIC_PATH
};
