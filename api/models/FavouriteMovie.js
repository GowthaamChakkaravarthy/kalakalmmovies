import mongoose from 'mongoose';

const Schema = mongoose.Schema;
const ObjectId = Schema.ObjectId;

var FavouriteMovieSchema = mongoose.Schema({
    original_title: {
        type: String,
        default:""
    },
    poster_path: {
        type: String,
        default: "",
    },
    backdrop_path :{
      type: String,
      default: "",
    },
    movieid : {
        type: Number,
        required: true,
    },
    
    CreatedAt: { type: Date, default: Date.now }
});

var favouritemovie = mongoose.model("favouritemovie", FavouriteMovieSchema);
module.exports = favouritemovie;
