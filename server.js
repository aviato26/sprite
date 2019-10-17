
const express = require('express');
const app = express();

app.use(express.static('clientside'))

app.listen(3000, console.log('server is running'))
