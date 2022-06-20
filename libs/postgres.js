const { Client } = require('pg')


async function getConnection(){
const cliente = new Client({
  host: 'localhost',
  port: 5432,
  user: 'aps01',
  password: '1234',
  database: 'alprosur'
})

await cliente.connect()
return cliente
}

module.exports = getConnection;
