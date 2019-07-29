const router = require('koa-router')()
const axios = require('axios');
// 请求轮播数据接口
router.get('/slidelist', async (ctx)=> {
  const url = `http://c.y.qq.com/musichall/fcgi-bin/fcg_yqqhomepagerecommend.fcg`;
  const params = {
    uin: 0,
    platform: 'h5',
    needNewCode: 1,
    format: 'json',
    inCharset: 'utf8',
    outCharset: 'utf-8',
    notice: 0,
    g_tk: 5381
  }
  const { data } = await axios.get(url, { params })
  if(data.code === 0){
    ctx.body = data.data;
  }
});

module.exports = router;