const proxy = require('http-proxy-middleware');

// 解决cors代理
module.exports = function(app) {
//   app.use(proxy('/api', { 
//       target: '', 
//       "secure": false,
//       "changeOrigin": true
//     }));
};