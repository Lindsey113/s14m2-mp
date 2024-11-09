const knex = require('knex')

const db = knex({
  client: 'sqlite3',
  connection: {
    filename: './data/dealer.db3'
  },
  useNullAsDefault: true
});

function getAll() {
  return db('cars')
}

function getById(id) {
  return db('cars').where('id', id).first()
}

async function create(car) {
  const [id] = await db('cars').insert(car)
  return getById(id)
}

module.exports = {
  getAll,
  getById,
  create
}
