const Car = require('./cars-model')
const router = require('express').Router()
const {
    checkCarId,
    checkCarPayload,
    checkVinNumberUnique,
    checkVinNumberValid
} = require('./cars-middleware')

router.get('/api/cars', async (req, res, next) => {
    try {
        const cars = await Car.getAll()
        res.json(cars)
        next()
    } catch (err) {
        next(err)
    }
})

router.get('/api/cars/:id', checkCarId, async (req, res, next) => {
    try {
        const car = await Car.getById(req.params.id)
        res.json(car)
    } catch (err) {
        next(err)
    }
})

router.post('/api/cars',
    checkCarPayload,
    checkVinNumberValid,
    checkVinNumberUnique,
    async (req, res, next) => {
        try {
            const newCar = await Car.create(req.body)
            res.json(newCar)
        } catch (err) {
            next(err)
        }
    })

module.exports = router