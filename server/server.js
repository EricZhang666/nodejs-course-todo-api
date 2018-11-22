const express = require('express');
const bodyParser = require('body-parser');


const apiRouter = require('./routes/api');

const app = express();
app.use(bodyParser.json());

app.listen(3000, ()=>{
    console.log('Server listening to port 3000');
});

app.use('/api/v1',apiRouter);

// catch 404 and forward to error handler
app.use('*', function (req, res, next) {
    return res.status(404).send({ message: 'Page not found' })
  });

app.use((err, req, res, next) => {
    return res.status(err.status || 400).send({message: err.message ? err.message : err});
})

