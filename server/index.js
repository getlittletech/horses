const Koa = require('koa')
const router = require('koa-router')()

const racingInfo = require('./routes/racingInfo')

function startServer() {
  const app = new Koa()

  router.get('/api/racinginfo', racingInfo.validate, racingInfo.handle)
  router.get('/api/racinginfo/:gameType', racingInfo.validate, racingInfo.handle)

  const port = 3001
  app.use(router.routes())
  app.listen(port)

  console.log('Server started, listening to port: ', port)
}

startServer()
