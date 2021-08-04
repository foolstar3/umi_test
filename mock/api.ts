export default {
  // 支持值为 Object 和 Array
  'GET /products': { users: [1, 2] },

  // GET 可忽略
  '/users': { id: 1 },

  // 支持自定义函数，API 参考 express@4
  'POST /users/create': (req, res) => {
    // 添加跨域请求头
    res.setHeader('Access-Control-Allow-Origin', '*');
    res.end('ok');
  },
}