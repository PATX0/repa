const express = require('express');

const app = express();
const port = 8080;

app.get('/', (req, res) => {
  res.send({
    message: 'REPA API',
  });
});

app.listen(port, () => console.log(`App is running at port ${port}`));
