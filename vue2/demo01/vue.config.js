module.exports = {
  lintOnSave: false ,
  devServer: {
    //proxy: 'http://localhost:80'
    proxy: {
      '/api': {
        target: 'http://localhost:80' ,
        ws: true ,
        changeOrigin: true
      }
    }
  }
}