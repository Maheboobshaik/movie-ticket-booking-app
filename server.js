const mongoose = require("mongoose");

require('dotenv').config();  
//connectDB();
const express = require('express');
const cors = require('cors');



const app = express();

app.use(express.json());


const corsOptions = {
  origin: 'http://localhost:3000', // Allow the React app (frontend) origin
  methods: 'GET, POST, PUT, DELETE', // Allow the HTTP methods needed
  allowedHeaders: [
    'Content-Type', 
    'Authorization', 
    'Cache-Control',  // Allow Cache-Control header
  ], 
  credentials: true, // Allow credentials like cookies, tokens, etc.
};

app.use(cors(corsOptions)); 

const PORT = process.env.PORT || 8085;
mongoose.connect('mongodb://localhost:27017/moviesdb', {
    useNewUrlParser: true,
    useUnifiedTopology: true,
  })
  .then(() => console.log('Connected to MongoDB'))
  .catch((err) => console.error('MongoDB connection error:', err));
  

// Default route
app.get("/", (req, res) => {
  res.json({ message: "Welcome to Upgrad Movie booking application development." });
});


// Import route files
const movieRoutes = require('./routes/movieroutes');
const genreRoutes = require('./routes/genreroutes');
const artistRoutes = require('./routes/artistroutes');
const userRoutes = require('./routes/userroutes');
const auth=require('./middleware/auth');

app.use('/api', movieRoutes);
app.use('/api/genres', genreRoutes);
app.use('/api/artists', artistRoutes);
app.use('/api', userRoutes);


app.get('/api/protected', auth ,(req,res)=>{
  res.json({message:"welcome to a protected route"});
})

// Start the server
app.listen(PORT, () => {
    console.log(`Server running at http://localhost:${PORT}`);
});
