const { Sequelize } = require ('sequelize')
const { setupModels } = require("../Base de Datos/Modelo/index")

const host = 'localhost'
const port = 5432
const user = 'aps01'
const password = '1234'
const database = 'alprosur'

const USUARIO = encodeURIComponent(user)
const CONTRASEÑA = encodeURIComponent(password)

const URI = `postgres://${USUARIO}:${CONTRASEÑA}@${host}:${port}/${database}`
const secuela = new Sequelize(URI, {
  dialect: 'postgres',
  logging: console.log
})

setupModels(secuela)
secuela.sync()

module.exports = secuela
