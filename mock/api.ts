export default {
  // 支持值为 Object 和 Array
  'GET /products': { users: [1, 2] },

  // GET 可忽略
  '/users': { id: 1 },

  '/api/getdata': {
    option: {
      title: {
          text: '某站点用户访问来源',
          subtext: '纯属虚构',
          left: 'center'
      },
      tooltip: {
          trigger: 'item'
      },
      legend: {
          orient: 'vertical',
          left: 'left',
      },
      series: [
          {
              name: '访问来源',
              type: 'pie',
              radius: '50%',
              data: [
                  {value: 1048, name: '搜索引擎'},
                  {value: 735, name: '直接访问'},
                  {value: 580, name: '邮件营销'},
                  {value: 484, name: '联盟广告'},
                  {value: 300, name: '视频广告'}
              ],
              emphasis: {
                  itemStyle: {
                      shadowBlur: 10,
                      shadowOffsetX: 0,
                      shadowColor: 'rgba(0, 0, 0, 0.5)'
                  }
              }
          }
      ]
    }
  },

  '/api/geteditorcode': {code: '123'},
  // 支持自定义函数，API 参考 express@4
  'POST /users/create': (req, res) => {
    // 添加跨域请求头
    res.setHeader('Access-Control-Allow-Origin', '*');
    res.end('ok');
  },
}