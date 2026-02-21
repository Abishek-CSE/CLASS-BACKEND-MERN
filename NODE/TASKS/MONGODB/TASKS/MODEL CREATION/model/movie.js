import mongoose from "mongoose";
const movieSchema = new mongoose.Schema({
    MovieName:{type:String},
    Director:{type:String},
    Actor:{type:String},
    Actress:{type:String}
},{timestamps:true})
const moviedatamodel = mongoose.model("MOVIEDATA",movieSchema)
export default moviedatamodel