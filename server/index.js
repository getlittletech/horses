const Koa = require('koa')
const router = require('koa-router')()

function startServer() {
  const app = new Koa()
  router.get('/', ctx => {
    ctx.body = 'Hej!'
  })
  app.use(router.routes())
  app.listen(3000)
}

startServer()
