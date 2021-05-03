global.MyKnexKnife = global.MyKnexKnife || {}
const model = global.MyKnexKnife.Express = {}

const handle = {
  GET(model, req){
    return model.fetch(req.query)
  },
  POST(model, req){
    if(!req.body.id)
      delete req.body.id
    return model.upsert(req.body)
  },
  DELETE(model, req){
    return model.del(req.body)
  }
}
const methods = Object.keys(handle)

exports = module.exports = function(req, res, next){
  const { path, method } = req
  if(methods.includes(method) && model[path])
    handle[method](model[path], req).then(function(result){
      if(exports.customResponse) // 生产项目中，直接指定后，调用而不判断
        var responsed = exports.customResponse(result, req, res, next)
      if(!responsed)
        res.json(result)
    })
  else
    next()
}