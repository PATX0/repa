import config from 'dotenv';
import express from 'express';
import bodyParser from 'body-parser';
import logger from 'morgan';
import userRoutes from './routes/UserRoutes';

config.config();

const app = express();
const port = process.env.PORT || 8080;

app.use(logger('dev'));
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: false }));

app.use('/users', userRoutes);

app.listen(port, () => console.log(`App is running at port ${port}`));

export default app;
