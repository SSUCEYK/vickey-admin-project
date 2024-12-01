const { defineConfig } = require('@vue/cli-service')
module.exports = defineConfig({
  transpileDependencies: true
})

// module.exports = {
//   devServer: {
//     proxy: {
//       '/api': {
//         target: 'http://3.37.105.22:8080/', // 서버 주소
//         changeOrigin: true,
//       },
//     },
//   },
// };
