const mongoose = require('mongoose')
const DB = process.env.DATABASE_URL;

mongoose.connect(DB).then(() => {
    console.log('database is connected')

}).catch((err) => {
    console.log('database is not connected'+err)
    
})