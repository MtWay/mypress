module.exports = {
  title: 'mt',
  description: 'Just playing around',
  // 'markdown.anchor': {
  //   permalink: true, permalinkBefore: true, permalinkSymbol: '#'
  // },
  markdown: {
    externalLinks: {
      target: '_blank',
    },
    toc: {
      includeLevel: [0, 1]
    }
  },
  themeConfig: {
    // sidebar: [
    //   '/',
    //   '/bar',
    //   ['/foo', 'Explicit link text']
    // ],
    // sidebar:'auto',
    sidebarDepth:1,
    // displayAllHeaders: true,
    // 添加导航栏
    nav: [
      { text: 'foo', link: '/foo/' },
      { text: 'bar', link: '/bar/' },
      // { text: 'js', link: '/zhihu/' },
      {
        text: 'github',
        // 这里是下拉列表展现形式。
        items: [
          { text: 'focus-outside', link: 'https://github.com/txs1992/focus-outside' },
          { text: 'stylus-converter', link: 'https://github.com/txs1992/stylus-converter' }
        ]
      }
    ],
    // 为以下路由添加侧边栏
    sidebar: {
      '/foo/': [
        '',     /* /foo/ */
        'one',  /* /foo/one.html */
        // 'two'   /* /foo/two.html */
      ],

      '/bar/': [
        '',      /* /bar/ */
        'three', /* /bar/three.html */
        'three1'   /* /bar/four.html */
      ],

      // fallback,必须放最后
      '/': [
        '',        /* / */
        'contact', /* /contact.html */
        'about',    /* /about.html */
        'codeView'
        // '/bar/'
      ]
    }
    //   sidebar: ['/', '/git', '/vue']
  }
}