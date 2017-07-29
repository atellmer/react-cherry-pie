import { mocks } from 'mock-browser';
import injectTapEventPlugin from 'react-tap-event-plugin';


injectTapEventPlugin();
const mock = new mocks.MockBrowser();

global.__DEVELOPMENT__ = false;
global.__TESTING__ = true;
global.__PRODUCTION__ = false;
global.document = mock.getDocument();
global.window = mock.getWindow();
global.localStorage = mock.getLocalStorage();
