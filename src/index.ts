import bodyParser from 'body-parser';
import Server from './server';
import router from './router';

const port: number = 3000;
const server = new Server(port);
server.init();

server.app.use(bodyParser.json());
server.app.use(router);

server.start();