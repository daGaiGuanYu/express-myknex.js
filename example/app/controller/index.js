const express = module.exports = require('express')()

require('./user')

require('express-myknex')(express)

express.listen(3000, () => {
  console.log('express listening')
})