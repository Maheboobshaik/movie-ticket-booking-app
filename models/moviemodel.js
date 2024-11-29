const mongoose = require('mongoose');


const { Schema }=mongoose;
//const  Artist = require('./artistmodel');
const artistSchema=require('./artistmodel');
const showSchema = require('./showmodel'); 

const movieSchema = new Schema({
  movieid: { type: Number, required: true },
  title: { type: String, required: true },
  published: { type: Boolean, required: true },
  released: { type: Boolean, required: true },
  poster_url: { type: String, required: true },
  release_date: { type: Date, required: true },  // Store as Date for better querying
  publish_date: { type: Date, required: true },  // Store as Date for better querying
  artists:[artistSchema], // Nested Artist schema
  genres: { type: [String], required: true },
  duration: { type: Number, required: true },  // Duration in minutes
  critic_rating: { type: Number, required: true },
  trailer_url: { type: String, required: true },
  wiki_url: { type: String, required: true },
  story_line: { type: String, required: true },
  shows: [showSchema] // Nested Show schema
});

module.exports = mongoose.model('Movie', movieSchema);

