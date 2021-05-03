export default new Proxy({}, {
  get(tar, method){
    return (url, data) => {
      const option = { method }
      const json = ['delete', 'post'].includes(method)
      if(json){
        option.headers = {
          'Content-Type': json && 'application/json;charset=utf-8'
        }
        option.body = JSON.stringify(data)
      }

      return fetch(url, option).then(res => res.json())
    }
  }
})