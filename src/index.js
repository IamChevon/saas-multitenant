import express from 'express';
import bodyParser from 'body-parser';
import routeController from './routes/route';

import './env';
import * as userService from './services/users';
import { connectAllDb } from './connectionManager';
import * as connectionResolver from './middlewares/connectionResolver';


const port = 8000;

const app = express();

app.set('port', port);

app.use(bodyParser.json());

connectAllDb();

app.use(connectionResolver.resolve);

app.use('/', routeController);

// API Route for getting users
app.get('/users', userService.getAll);


app.listen(port, () => {
    console.log(`Appliation started on port: ${port}`);
});

