const express = require('express')
const bodyParser = require('body-parser');

const path = require('path')
const app = express()


app.use(express.static(path.join(__dirname,'public')))
//setters
app.set('PORT', process.env.port||3000 ) 
app.set('views',path.join(__dirname, 'views'))
app.set('view engine', 'ejs')

//middleware
app.use(bodyParser.json())
app.use(bodyParser.urlencoded({extended:false}))
app.use('/', require('./routes/index')) // "/" prefijo de la ruta general


app.listen(app.get('PORT'), () => console.log(`Server ready at ${app.get('PORT')}`))