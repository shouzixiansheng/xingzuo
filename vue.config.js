/**
 * Created by Administrator on 2019/3/17.
 */
module.exports = {
  lintOnSave: false,
  publicPath: process.env.NODE_ENV === 'production'
    ? './'
    : '/',
  // PublicPath:'/',
  // 输出文件目录
  outputDir: 'dist2',
  devServer: {
    port:'8181',
    open:true,
    proxy: {  //代理
      '/api': {
        target: 'http://web.juhe.cn:8080/',  // target host
        ws: true,  // proxy websockets
        changeOrigin: true,  // needed for virtual hosted sites  虚拟站点
        pathRewrite: {
          '^/api': ''  // rewrite path
        }
      },
    },  // 配置多个代理
  },

  pluginOptions: {
    'style-resources-loader': {
      preProcessor: 'less',
      patterns: []
    }
  }
};
