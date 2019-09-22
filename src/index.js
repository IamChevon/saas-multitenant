import express from 'express';
import bodyParser from 'body-parser';
import routeController from './routes/route';

const port = 8000;

const app = express();

app.set('port', port);

app.use(bodyParser.json());

app.use('/', routeController);


app.listen(port, () => {
    console.log(`Appliation started on port: ${port}`);
});

