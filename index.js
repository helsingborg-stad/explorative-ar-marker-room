const express = require('express')
const app = express()

app.set('view engine', 'pug')
app.use(express.static('public'))

app.get('/', (req, res) => {
    const projects = {
        markers: [{
            url: '/markers/3x3/1.png'
        }]
    }

    res.render('index', projects)
  })

app.listen(process.env.PORT || 3000)