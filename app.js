const Koa = require('koa')
const app = new Koa()
const views = require('koa-views')
const json = require('koa-json')
const onerror = require('koa-onerror')
const bodyparser = require('koa-bodyparser')
const logger = require('koa-logger')
const proxy = require('koa-server-http-proxy')

const index = require('./routes/index')
const users = require('./routes/users')
const slider = require('./routes/slider')

// error handler
onerror(app)

// 设置 proxy
// 1. 代理 推荐热门列表
app.use(
  proxy('/splcloud', {
    target: 'http://c.y.qq.com',
    changeOrigin: true,
    headers: {
      referer: 'http://c.y.qq.com/',
      host: 'c.y.qq.com'
    }
  })
)

// 2. 代理 推荐 热门歌曲列表
app.use(
  proxy('/qzone', {
    target: 'https://c.y.qq.com',
    changeOrigin: true,
    headers: {
      referer: 'https://c.y.qq.com/',
      host: 'c.y.qq.com'
    }
  })
)

// 3. 代理 歌手列表 | 歌曲列表
app.use(
  proxy('/v8', {
    target: 'https://c.y.qq.com',
    changeOrigin: true
  })
)

// 4. 代理 请求排行列表数据 | 请求排行每一列表歌曲数据
app.use(
  proxy('/v8', {
    target: 'https://c.y.qq.com',
    changeOrigin: true,
    headers: {
      referer: 'https://c.y.qq.com/',
      host: 'c.y.qq.com'
    }
  })
)

// 5. 代理 歌曲播放源
app.use(
  proxy('/cgi-bin', {
    target: 'https://u.y.qq.com',
    changeOrigin: true,
    headers: {
      referer: 'https://u.y.qq.com/',
      host: 'u.y.qq.com'
    }
  })
)

// 6. 代理 请求搜索内容
app.use(
  proxy('/soso', {
    target: 'https://c.y.qq.com',
    changeOrigin: true,
    headers: {
      referer: 'https://c.y.qq.com/',
      host: 'c.y.qq.com'
    }
  })
)

// 7. 代理 请求歌词内容
app.use(
  proxy('/lyric', {
    target: 'https://c.y.qq.com',
    changeOrigin: true,
    headers: {
      referer: 'https://c.y.qq.com/',
      host: 'c.y.qq.com'
    }
  })
)

// middlewares
app.use(
  bodyparser({
    enableTypes: ['json', 'form', 'text']
  })
)
app.use(json())
app.use(logger())
app.use(require('koa-static')(__dirname + '/public'))

app.use(
  views(__dirname + '/views', {
    extension: 'ejs'
  })
)

// logger
app.use(async (ctx, next) => {
  const start = new Date()
  await next()
  const ms = new Date() - start
  console.log(`${ctx.method} ${ctx.url} - ${ms}ms`)
})

// routes
app.use(index.routes(), index.allowedMethods())
app.use(users.routes(), users.allowedMethods())
app.use(slider.routes(), slider.allowedMethods())

// error-handling
app.on('error', (err, ctx) => {
  console.error('server error', err, ctx)
})

app.listen(8088)
