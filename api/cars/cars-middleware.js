const Car = require('./cars-model')

async function checkCarId(req, res, next) {
  try {
    const carId = await Car.getById(req.params.id)
    if (!carId) {
      return res.status(404).json({
        message: "No car with that ID"
      })
    }
    next()
  } catch (err) {
    next(err)
  }
}

function checkCarPayload(req, res, next) {
  const {
    vin,
    make,
    model,
    mileage
  } = req.body
  if (!vin) {
    res.status(400).json({
      message: 'vin is missing'
    })
  } else if (!make) {
    res.status(400).json({
      message: 'make is missing'
    })
  } else if (!model) {
    res.status(400).json({
      message: 'model is missing'
    })
  } else if (!mileage) {
    res.status(400).json({
      message: 'mileage is missing'
    })
  }
  next()
}

function checkVinNumberValid(req, res, next) {
  const { vin } = req.body
  if (vin.length !== 17) {
    res.status(400).json({
      message: `vin ${vin} is invalid`
    })
  }
  next()
}

async function checkVinNumberUnique(req, res, next) {
  try {
    const existingVin = await Car.getByVin(req.body.vin)
    if (!existingVin) {
      next()
    } else {
      res.status(400).json({
        message: `vin ${req.body.vin} already exists`
      })
    }
  } catch (err) {
    next(err)
  }
}

module.exports = {
  checkCarId,
  checkCarPayload,
  checkVinNumberValid,
  checkVinNumberUnique
}