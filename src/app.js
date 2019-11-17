import config from 'dotenv';
import express from 'express';
import bodyParser from 'body-parser';
import logger from 'morgan';

config.config();

const app = express();
const port = process.env.PORT || 8000;

app.use(logger('dev'));
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: false }));

// app.use('/users', require('./routes/user.routes'));

app.listen(port, () => console.log(`App is running at port ${port}`));

export default app;
