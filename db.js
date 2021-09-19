'use strict'

const db = {};
//Models/tables
db.users = require('./models/users.js');
db.profiles = require('./models/profile.js');

db.users.hasOne(db.profiles);

module.exports = db;