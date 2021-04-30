const express = require('./index')

express.get('/user', function(req, res){
  res.json({ name: 1 })
})