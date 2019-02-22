const Koa = require('koa')
const router = require('koa-router')()
const axios = require('axios')

function startServer() {
  const app = new Koa()
  router.get('/', ctx => {
    ctx.body = 'Hej!'
  })
  
  router.get('/api/test', async ctx => {
    const result = await axios.get('https://www.atg.se/services/racinginfo/v1/api/products/V75')
    ctx.body = result.data
  })
  
  app.use(router.routes())
  app.listen(3001)
}

startServer()
