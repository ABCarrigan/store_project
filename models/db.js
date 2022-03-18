const mongoose = require('mongoose')
// allows us to connect to mongoose db
mongoose.connect(process.env.MONGO_URI, {
    useNewUrlParser: true,
    useUnifiedTopology: true
  })

module.exports = mongoose.connection