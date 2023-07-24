const mongoose = require('mongoose');
const stargate_mongoose = require('stargate-mongoose');
const driver = stargate_mongoose.driver;

// mongoose.set('autoCreate', true);
// mongoose.set('autoIndex', false);
// mongoose.set('toJSON', { virtuals: true });
// mongoose.set('toObject', { virtuals: true });

//override the default native driver
mongoose.setDriver(driver);



//Set up mongoose & end points definition
mongoose.connect('http://localhost:8181/v1/photography', {
    username: 'cassandra',
    password: 'cassandra',
    authUrl: 'http://localhost:8081/v1/auth'
});

// Export the mongoose instance
// need to locate above the models. Sort of circular dependency issue.
module.exports = mongoose;

// Models
require('./Category');
require('./Recipe');

