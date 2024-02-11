const mongoose = require('mongoose')

const connectDB = (url) => {
  return mongoose.connect('mongodb+srv://RaghavMONGO:RaghavMONGO@cluster0.ogmyrwz.mongodb.net/?retryWrites=true&w=majority', {
    useNewUrlParser: true,
    useUnifiedTopology: true,
  })
}

module.exports = connectDB
