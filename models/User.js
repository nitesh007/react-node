import { Schema } from 'mongoose';

const mongoose = require('mongoose');
const {schema} = mongoose;

const userSchema = new Schema({
    googleId: String
});
mongoose.model('users',userSchema);