module.exports = {
  title: 'My Awesome Phone',
  subtitle: 'No One Cares What Your Phone Can Do',
  description: 'No One Cares What Your Phone Can Do',
  base: '/myawesomephone/',
  dest: 'public',
  ga: 'UA-410258-4',
  themeConfig: {
    sidebarDepth: 0,
    sidebar: [
      {
        title: 'Stories',
        collapsable: false,
        children: [
          '/2010-09-23_my-phone-walked-into-a-bar',
          '/2010-09-24_10000-years-ago',
          '/2010-09-25_one-day-my-phone',
          '/2010-09-26_47-cats-2-prize-bulls',
          '/2010-09-27_in-1957-on-a-rainy-day',
          '/2010-10-11_my-phone-and-christopher-columbus',
          '/2010-10-29_once-upon-a-time-my-phone',
          '/2011-07-16_in-1910-my-phone'
        ]
      }
    ]
  },
  configureWebpack: {
    resolve: {
      alias: {
        '@alias': 'img'
      }
    }
  }
}
