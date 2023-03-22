const express = require('express')
const app = express()
const dotenv = require('dotenv')

const cors = require('cors')
app.use(cors())
app.use(express.json())

dotenv.config({ path: './config.env' })
const PORT = process.env.PORT || 5000;
require('./db/conn')
app.use(require('./router/router'))


app.listen(PORT, () => {
    console.log(`Server is open at localhost:${PORT}`);
})
