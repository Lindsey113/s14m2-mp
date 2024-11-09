const Car = require('./cars-model')
const router = require('express').Router()

router.get('/api/cars', (req, res) => {
    console.log(Car.getAll())
})