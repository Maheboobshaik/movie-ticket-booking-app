const mongoose = require('mongoose');

const showSchema = new mongoose.Schema({
  theater: { type: String, required: true }, 
  language: {  type: String, required: true },
  show_timing: { 
    type: Date, 
    required: true 
  },
  available_seats: { 
    type: Number, 
    required: true, 
    min: 0 
  },
  unit_price: { 
    type: Number, 
    required: true, 
    min: 0 
  },
  // Optional: Adding a reference to the movie if needed
  movieId: { type: Number, required: true },
 
}, { timestamps: true }); // Adds createdAt and updatedAt fields

//module.exports = mongoose.model('Show', showSchema);
module.exports = showSchema;
