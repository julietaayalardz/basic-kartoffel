const chalk = require('chalk')
const express = require('express')

const app = express()
app.listen(3000, () => console.log('Listening at port 3000'))
app.use(express.static('../client'))
app.use(express.json({limit: '1mb'}))

app.post('/api', (request,response) => {
    console.log(chalk.greenBright('Request received!'))
    console.log(request.body)
    response.json({
        status: 'success',
        info: 'coordinates received correctly'
    })
})