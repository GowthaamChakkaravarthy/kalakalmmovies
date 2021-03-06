import mongoose from 'mongoose';

const Schema = mongoose.Schema;
const ObjectId = Schema.ObjectId;

var RegisterUserSchema = mongoose.Schema({
    name: {
        type: String,
        default:""
    },
    password: {
        type: String,
        default: "",
    },
    email :{
      type: String,
      default: "",
    },
    bio: {
        type: String,
        required: true,
    },
    
    CreatedAt: { type: Date, default: Date.now }
});

var users = mongoose.model("users", RegisterUserSchema);
module.exports = users;
