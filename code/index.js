global.MyKnexKnife = global.MyKnexKnife || {}
const model = global.MyKnexKnife.Express = {}

const go = {
  GET(model, req){
    return model.fetch(req.query)
  },
  POST(model, req){
    return model.upsert(req.body)
  },
  POST(model, req){
    return model.del(req.query)
  }
}
const methods = Object.keys(go)

module.exports = function(express){
  express.use(function(req, res, next){
    const { path, method } = req
    if(methods.includes(method) && model[path])
      go[method](model[path], req).then(function(list){
        res.json(list)
      })
    else
      next()
  })
}