const express = require('express');
const bookRouter = require('./routes/bookRouter');

const app = express();

app.use(express.json());
app.use('/books', bookRouter);


app.listen(9000, () => console.log('listen on 9000'));