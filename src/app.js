import express from 'express';
import bodyParser from 'body-parser';

const app = express();
const port = process.env.PORT || 8000;

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: false }));


app.use('/users', require('./routes/user.routes'));

app.listen(port, () => console.log(`App is running at port ${port}`));
