const mongoose = require('mongoose');
const UserSchema = new mongoose.Schema({
    username: String,
    firts_name: String,
    second_name: String,
    first_surname: String,
    second_surname: String,
    state: String,
    gender: String,
    birthday: String,
    registration_date: String,
});

module.exports = UserSchema;