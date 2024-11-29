const mongoose = require('mongoose');


const dbConfig = {
  url: 'mongodb://localhost:27017/moviesdb', 
};

const connectDB = async () => {
  try {
    await mongoose.connect(dbConfig.url, { useNewUrlParser: true, useUnifiedTopology: true });
    console.log('MongoDB connected successfully');
  } catch (err) {
    console.error('Database connection error:', err);
   process.exit(1);
  }
};

module.exports = connectDB;
//module.exports = dbConfig;
