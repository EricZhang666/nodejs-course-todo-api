const mongoose = require('mongoose');

mongoose.Promise = global.Promise;
mongoose.connect(process.eventNames.MONGODB_URI || 'mongodb://localhost:27017/TodoApp', { useNewUrlParser: true });

module.exports = {mongoose};