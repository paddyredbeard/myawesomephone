module.exports = {
  title: 'My Awesome Phone',
  description: "Very Short Stories About My Awesome Phone",
  base: "/myawesomephone/",
  dest: "docs",
  themeConfig: {
    lastUpdated: 'Last Updated'
  },
  configureWebpack: {
    resolve: {
      alias: {
        '@alias': 'img'
      }
    }
  }
}
