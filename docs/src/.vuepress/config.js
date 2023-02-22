const { description } = require('../../package')

module.exports = {
  /**
   * Ref：https://v1.vuepress.vuejs.org/config/#title
   */
  title: 'Vuepress Docs Boilerplate',
  /**
   * Ref：https://v1.vuepress.vuejs.org/config/#description
   */
  description: description,

  /**
   * Extra tags to be injected to the page HTML `<head>`
   *
   * ref：https://v1.vuepress.vuejs.org/config/#head
   */
  head: [
    ['meta', { name: 'theme-color', content: '#3eaf7c' }],
    ['meta', { name: 'apple-mobile-web-app-capable', content: 'yes' }],
    ['meta', { name: 'apple-mobile-web-app-status-bar-style', content: 'black' }]
  ],

  /**
   * Theme configuration, here is the default theme configuration for VuePress.
   *
   * ref：https://v1.vuepress.vuejs.org/theme/default-theme-config.html
   */
  themeConfig: {
    repo: '',
    editLinks: false,
    docsDir: '',
    editLinkText: '',
    lastUpdated: false,
    nav: [
      {
        text: 'vue',
        items: [
          { text: 'vue2', items: [
              { text: '生命周期', link: '/md/vue/vue2/生命周期' },
              { text: '$route和$router的区别', link: '/md/vue/vue2/$route和$router的区别' },
              { text: '对象和数组的依赖收集', link: '/md/vue/vue2/对象和数组的依赖收集' },
              { text: '虚拟dom', link: '/md/vue/vue2/虚拟dom' },
              { text: 'diff算法', link: '/md/vue/vue2/diff算法' },
              { text: 'key的作用', link: '/md/vue/vue2/key的作用' },
              { text: 'event-bus', link: '/md/vue/vue2/eventbus' },
              { text: 'keep-alive源码解析', link: '/md/vue/vue2/keep-alive源码解析' },
              { text: 'mixin源码解析', link: '/md/vue/vue2/mixin源码解析' },
              { text: 'nextTick源码解析', link: '/md/vue/vue2/nextTick源码解析' },
              { text: 'use源码解析', link: '/md/vue/vue2/use源码解析' },
              { text: 'vue-router源码解析', link: '/md/vue/vue2/vue-router源码解析' },
              { text: 'vue2不监听数组下标的原因', link: '/md/vue/vue2/vue2不监听数组下标的原因' },
            ] 
          },
          { text: 'vue3', items: [
            { text: '什么是受控组件', link: '/md/vue/vue3/什么是受控组件' },
            { text: '数组监听', link: '/md/vue/vue3/vue3为什么可以监听数组每个元素' },
          ] 
        },
        ],
      },
      {
        text: '数据库',
        items: [
          { text: 'clickhouse', link: '/md/database/clickhouse' }
        ],
      },
      {
        text: 'node',
        items: [
          { text: '事件循环', link: '/md/nodejs/eventLoop' },
          { text: '内存泄漏', link: '/md/nodejs/内存泄漏' },
          { text: 'express和koa', link: '/md/nodejs/exprss和koa的区别' },
        ],
      },
      {
        text: '浏览器',
        items: [
          { text: '浏览器工作原理', link: '/md/浏览器/浏览器工作原理' },
          { text: '浏览器缓存', link: '/md/浏览器/浏览器缓存' },
          { text: '浏览器渲染层理解', link: '/md/浏览器/浏览器渲染层理解' },
          { text: '浏览器渲染原理', link: '/md/浏览器/浏览器渲染原理' },
          { text: '垃圾回收机制', link: '/md/浏览器/垃圾回收机制' },
          { text: 'http缓存理解', link: '/md/浏览器/http缓存理解' },
          { text: '从输出ur到页面显示的过程', link: '/md/浏览器/从输出ur到页面显示的过程' },
          { text: 'http0.9', link: '/md/浏览器/http0.9' },
          { text: 'http1.0', link: '/md/浏览器/http1.0' },
          { text: 'http1.1', link: '/md/浏览器/http1.1' },
          { text: 'http2.0', link: '/md/浏览器/http2.0' },
          { text: 'http3.0', link: '/md/浏览器/http3.0' },
        ],
      },
      {
        text: '小程序',
        items: [
          { text: '小程序的优势', link: '/md/小程序/小程序的优势' },
          { text: 'webview及基础模块', link: '/md/小程序/1.webview及基础模块' },
          { text: 'PageFrame', link: '/md/小程序/2.PageFrame' },
        ],
      },
      {
        text: 'webpack',
        items: [
          { text: 'babel和plugin', link: '/md/webpack/babel和plugin' },
          { text: 'loader为什么从右往左执行', link: '/md/webpack/loader为什么从右往左执行' },
        ],
      },
      {
        text: '网络安全',
        items: [
          { text: 'xss', link: '/md/安全/xss攻击' },
          { text: 'csrf', link: '/md/安全/csrf攻击' },
        ],
      },
    ],
    sidebar: {
      '/md/database/': [{
        title: '数据库',
        collapsable: false,
        children: [
          'clickhouse'
        ],
      }],
      '/md/nodejs/': [
        {
          title: 'nodejs',
          collapsable: false,
          children: [
            { title: 'eventLoop', path: 'eventLoop'},
            { title: '内存泄漏', path: '内存泄漏'},
            { title: 'express和koa的区别', path: 'exprss和koa的区别'},
          ]
        }
      ],
      '/md/安全/': [
        {
          title: '安全',
          collapsable: false,
          children: [
            { title: 'xss', path: 'xss攻击'},
            { title: 'csrf', path: 'csrf攻击'},
          ]
        }
      ],
      '/md/小程序/': [
        {
          title: '小程序',
          collapsable: false,
          children: [
            { title: '小程序的优势', path: '小程序的优势'},
            { title: 'webview及基础模块', path: '1.webview及基础模块'},
            { title: 'PageFrame', path: '2.PageFrame'},
          ]
        }
      ],
      '/md/浏览器/': [
        {
          title: '浏览器',
          collapsable: false,
          children: [
            { title: '浏览器工作原理', path: '浏览器工作原理'},
            { title: '浏览器缓存', path: '浏览器缓存'},
            { title: '浏览器渲染层理解', path: '浏览器渲染层理解'},
            { title: '浏览器渲染原理', path: '浏览器渲染原理'},
            { title: '垃圾回收机制', path: '垃圾回收机制' },
            { title: 'http缓存理解', path: 'http缓存理解' },
            { title: '从输出ur到页面显示的过程', path: '从输出ur到页面显示的过程' },
            { title: 'http0.9', path: '/md/浏览器/http0.9' },
            { title: 'http1.0', path: '/md/浏览器/http1.0' },
            { title: 'http1.1', path: '/md/浏览器/http1.1' },
            { title: 'http2.0', path: '/md/浏览器/http2.0' },
            { title: 'http3.0', path: '/md/浏览器/http3.0' },
          ]
        }
      ],
      '/md/vue/': [
        {
          title: 'vue2',
          collapsable: false,
          children: [
            { title: '生命周期', path: 'vue2/生命周期' },
            { title: '$route和$router的区别', path: 'vue2/$route和$router的区别' },
            { title: '对象和数组的依赖收集', path: 'vue2/对象和数组的依赖收集' },
            { title: '虚拟dom', path: 'vue2/虚拟dom' },
            { title: 'diff算法', path: 'vue2/diff算法' },
            { title: 'key的作用', path: 'vue2/key的作用' },
            { title: 'event-bus', path: 'vue2/eventbus' },
            { title: 'keep-alive源码解析', path: 'vue2/keep-alive源码解析' },
            { title: 'mixin源码解析', path: 'vue2/mixin源码解析' },
            { title: 'nextTick源码解析', path: 'vue2/nextTick源码解析' },
            { title: 'use源码解析', path: 'vue2/use源码解析' },
            { title: 'vue-router源码解析', path: 'vue2/vue-router源码解析' },
            { title: 'vue2不监听数组下标的原因', path: 'vue2/vue2不监听数组下标的原因' },
          ]
        },
        {
          title: 'vue3',
          collapsable: false,
          children: [
            { title: '什么是受控组件', path: 'vue3/什么是受控组件' },
            { title: 'vue3为什么可以监听数组每个元素', path: 'vue3/vue3为什么可以监听数组每个元素' },
          ]
        }
      ],
      '/md/webpack/': [
        {
          title: 'webpack',
          collapsable: false,
          children: [
            { title: 'babel和plugin', path: 'babel和plugin'},
            { title: 'loader为什么从右往左执行', path: 'loader为什么从右往左执行'},
          ]
        }
      ],
    }
  },

  /**
   * Apply plugins，ref：https://v1.vuepress.vuejs.org/zh/plugin/
   */
  plugins: [
    '@vuepress/plugin-back-to-top',
    '@vuepress/plugin-medium-zoom',
  ]
}
