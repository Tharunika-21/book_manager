const mongoose = require('mongoose');

// Connect to MongoDB (replace with your connection string)
mongoose.connect('YOUR_MONGODB_CONNECTION_STRING', {
  useNewUrlParser: true,
  useUnifiedTopology: true
});

