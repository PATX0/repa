const express = require('express');

const app = express();
const port = 8080;

app.use('/users', require('./routes/user.routes'));

app.listen(port, () => console.log(`App is running at port ${port}`));
