const mongoose = require('mongoose');

require('dotenv').config();

const ConnectDatabase =  mongoose.connect(process.env.MONGO_URL);

module.exports = ConnectDatabase