module.exports = {
  title: 'My Awesome Phone',
  description: "Very Short Stories About My Awesome Phone, by Patrick J. Barabe",
  base: "/myawesomephone/",
  dest: "docs",
  themeConfig: {
    sidebar: [
      '/',
      ['/2010-09-23_my-phone-walked-into-a-bar.md', 'My Phone Walked Into A Bar'],
      ['/2010-09-24_10000-years-ago.md', '10,000 Years Ago'],
      ['/2010-09-25_one-day-my-phone.md', 'One Day My Phone'],
      ['/2010-09-26_47-cats-2-prize-bulls.md', '47 Cats, 2 Prize Bulls, And My Phone'],
      ['/2010-09-27_in-1957-on-a-rainy-day.md', 'In 1957 On A Rainy Day'],
      ['/2010-10-11_my-phone-and-christopher-columbus.md', 'My Phone And Christopher Columbus'],
      ['/2010-10-29_once-upon-a-time-my-phone.md', 'Once Upon A Time My Phone'],
      ['/2011-07-16_in-1910-my-phone.md', 'In 1910 My Phone']
    ],
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
