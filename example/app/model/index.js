require('express-myknex')
const dbConfig = require('../../config/db')
const knex = require('knex')(dbConfig)
require('myknex').setKnex(knex)

require('express-myknex')
require('./user')
require('./pet')