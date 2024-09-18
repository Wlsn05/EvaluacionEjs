const routes = require('express').Router()
const fs = require('fs');
const path = require('path');
const bodyParser = require('body-parser');
//const phones = require('./../data/phones');
const country = require ('./../data/country')
const { title } = require('process');

let phones = []

routes.get('/', (req, res) => {
    return res.render('index', { 'title': 'Pagina inicial' , phones:phones})
})
routes.get('/new-record', (req, res) => {
    return res.render('new-record', { 'title': "Agregar teléfono",
        departments:country.departments,
        towns:country.towns
})
})
routes.post('/new-record', (req, res) => {
    console.log(req.body)
    const { id, name, value, dpto, town } = req.body
    const dptoa = country.departments.find( record => record.code == dpto).name
    const towna = country.towns.find(record => record.code == town).name
    const city =towna.concat('-',dptoa)
    console.log(`${id} ${name} ${value} ${dpto} ${town}`)
    let newRecord = {id, name, value, city}
    console.log(newRecord)
    phones.push(newRecord)

    res.redirect('/')
})
routes.get('/about', (req, res) => {
    return res.render('about', { 'title': "About us" })
})


module.exports = routes