const express = require('express')
const bodyParser = require('body-parser')
const path = require('path')
const morgan = require('morgan')

const app = express()
const port = process.env.PORT || 8080

app.use(bodyParser.json())
app.use(morgan('tiny'))
app.use('**/static',express.static(path.join(__dirname,'/build/static')))

app.get('/', (request, response) => {
    response.sendFile(path.join(__dirname,'/build/index.html'))
})

app.listen(port, () => {
    console.log(`Server started at port ${port}`)
})