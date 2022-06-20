const { Pool } = require('pg')

const piscina = new Pool({
  host: 'localhost',
  port: 5432,
  user: 'aps01',
  password: '1234',
  database: 'alprosur'
})
module.exports = piscina;
