global.MyKnexKnife = global.MyKnexKnife || {}
const model = global.MyKnexKnife.Express = {}

const handle = {
  GET(model, req){
    return model.fetch(req.query)
  },
  POST(model, req){
    if(!req.body.id)
      delete req.body.id // 有时候 id 会为空串
    return model.upsert(req.body)
  },
  DELETE(model, req){
    return model.del(req.body)
  }
}
const methods = Object.keys(handle)

exports = module.exports = function(req){
  const { path, method } = req
  if(methods.includes(method) && model[path])
    return handle[method](model[path], req)
}