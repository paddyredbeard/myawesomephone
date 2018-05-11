module.exports = {
  title: 'My Awesome Phone by Patrick J. Barabe',
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
