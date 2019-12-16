import config from 'dotenv';
import express from 'express';
import bodyParser from 'body-parser';
import logger from 'morgan';
import cors from 'cors';
import userRoutes from './routes/UserRoutes';
import sessionRoutes from './routes/SessionRoutes';

config.config();

const app = express();
const port = process.env.PORT || 8080;
app.use(cors());
app.use(logger('dev'));
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: false }));

app.use('/users', userRoutes);
app.use('/sessions', sessionRoutes);

app.listen(port, () => console.log(`App is running at port ${port}`));

export default app;
