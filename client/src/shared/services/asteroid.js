import { createClass } from 'asteroid';


const BASE_URL = 'localhost';
const PORT = '9000';
const API_URL = `${BASE_URL}:${PORT}`;
const config = { endpoint: `ws://${API_URL}/websocket` };

const AsteroidConstructor = createClass();
const asteroid = new AsteroidConstructor(config);

export default asteroid;
