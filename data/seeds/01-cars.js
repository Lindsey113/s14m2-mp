/**
 * @param { import("knex").Knex } knex
 * @returns { Promise<void> } 
 */

const cars = [
  {
    vin: '11111111111113333',
    make: 'Toyota',
    model: '4Runner',
    mileage: 215000,
    title: 'clean',
    transmission: 'automatic'
  },
  {
    vin: '73839304823943333',
    make: 'Hyundai',
    model: 'Accent',
    mileage: 234343,
    title: 'clean',
    transmission: 'manual'
  },
  {
    vin: '84848484848483333',
    make: 'Whatever',
    model: 'something',
    mileage: 838389,
    title: 'DIRTY',
    transmission: 'automatic'
  }
]
exports.seed = async function(knex) {
  await knex('cars').truncate()
  await knex('cars').insert(cars);
};
