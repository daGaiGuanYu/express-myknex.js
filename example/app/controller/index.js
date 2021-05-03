const Express = require('express')
const express = module.exports = Express()

express.use(Express.json())
express.use(Express.urlencoded())
require('./user')

const ExpressMyKnex = require('express-myknex')
express.use(ExpressMyKnex)

ExpressMyKnex.customResponse = function(rawData, req, res, next){
  if(req.method == 'POST') {
    res.redirect(req.path + '/index.html')
    return true
  } else if (req.method == 'DELETE') {
    res.json({ deleted: rawData })
    return true
  }
}

express.use(Express.static('public'))

express.listen(3000, () => {
  console.log('express listening')
})