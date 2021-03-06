const path = require('path');
function resolve (dir) {
    return path.join(__dirname, dir)
}
module.exports = {
    lintOnSave: true,
    chainWebpack: (config)=>{
        config.resolve.alias
            .set('@', resolve('src'))
            .set('assets',resolve('src/assets'))
            .set('components',resolve('src/components'))
            .set('views',resolve('src/views'))
    },
    devServer: {
        host: 'localhost', // ip
       // host: '  192.168.137.1',
       // host: '192.168.0.188', // ip
       // host: '192.168.4.220', // ip
        port: 8080, // 设置端口号
        https: false, // https:{type:Boolean}
        open: true, //配置自动启动浏览器
        proxy:null/*{
            '/api': {
                target: 'http://192.168.4.223:8360', //API服务器的地址
                changeOrigin: true, // 虚拟的站点需要更管origin
                /!*pathRewrite: {
                    '^/api': '/'
                }*!/
            }
        }  //设置代理*/
    }
}
