const express = require('express')
const app = express()
const authRoute = require('./routes/auth')



app.use('/api/user', authRoute)

const PORT = process.env.PORT || 5000

app.listen(PORT, () =>console.log(`server is listning on on ${PORT}` ) )