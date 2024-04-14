const { description } = require('../../package')

module.exports = {
  /**
   * Ref：https://v1.vuepress.vuejs.org/config/#title
   */
  title: 'Hi, I\'m Wailen',
  /**
   * Ref：https://v1.vuepress.vuejs.org/config/#description
   * 需要去node_modules/@vuepress/core/lib/clientlapp.js这个文件注释掉mode: 'history
   * 并打开base: './'
   */
  description: description,
  base:'./',  
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
        text: 'javascript',
        items: [
          { text: '遍历和迭代的理解', link: '/md/javascript/遍历和迭代的理解'},
          { text: '函数式编程', link: '/md/javascript/函数式编程'},
          { text: '解释型语言和编译型语言', link: '/md/javascript/解释型语言和编译型语言'},
          { text: '面向过程和面向对象', link: '/md/javascript/面向过程和面向对象'},
          { text: '设计模式理解', link: '/md/javascript/设计模式理解'},
          { text: '作用域和作用域链', link: '/md/javascript/作用域和作用域链'},
          { text: 'babel编译原理', link: '/md/javascript/babel编译原理'},
          { text: 'call,apply,bind区别', link: '/md/javascript/call,apply,bind区别'},
          { text: 'class类', link: '/md/javascript/class类'},
          { text: 'gzip原理', link: '/md/javascript/gzip原理'},
          { text: 'import和require的区别', link: '/md/javascript/import和require的区别'},
          { text: 'js变量提升', link: '/md/javascript/js变量提升'},
          { text: 'js的静态分析', link: '/md/javascript/js的静态分析'},
          { text: 'js的延迟加载及异步async和defer', link: '/md/javascript/js的延迟加载及异步async和defer'},
          { text: 'js继承', link: '/md/javascript/js继承'},
          { text: 'js中的this指向问题', link: '/md/javascript/js中的this指向问题'},
          { text: 'setInterval的理解', link: '/md/javascript/setInterval的理解'},
          { text: '上下文和this', link: '/md/javascript/上下文和this'},
        ]
      },
      {
        text: 'react',
        items: [
          { text: '生命周期', link: '/md/react/生命周期'},
          { text: '为什么只有一个根元素', link: '/md/react/为什么只有一个根元素'},
          { text: 'setState和useState', link: '/md/react/setState和useState'},
          { text: 'hooks', link: '/md/react/hooks'},
          { text: 'redux工作原理', link: '/md/react/redux工作原理'},
          { text: 'fiber的理解', link: '/md/react/fiber的理解'},
        ]
      },
      {
        text: 'vue',
        items: [
          { text: 'vue2', items: [
              { text: '生命周期', link: '/md/vue/vue2/生命周期' },
              { text: '数据更新全过程', link: '/md/vue/vue2/数据更新全过程' },
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
              { text: 'vuex为什么要有action和mutation', link: '/md/vue/vue2/vuex为什么要有action和mutation' },
            ] 
          },
          { text: 'vue3', items: [
            { text: '什么是受控组件', link: '/md/vue/vue3/什么是受控组件' },
            { text: 'pinia学习', link: '/md/vue/vue3/pinia学习' },
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
          { text: 'node的优缺点', link: '/md/nodejs/node的优缺点' },
          { text: '非阻塞IO模型', link: '/md/nodejs/非阻塞IO模型' },
          { text: 'BFF架构', link: '/md/nodejs/BFF架构' },
          { text: '事件循环', link: '/md/nodejs/eventLoop' },
          { text: '内存泄漏', link: '/md/nodejs/内存泄漏' },
          { text: 'express和koa', link: '/md/nodejs/exprss和koa的区别' },
          { text: 'express api 总结', link: '/md/nodejs/express api 总结' },
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
          { text: 'webpack打包优化', link: '/md/webpack/webpack打包优化' },
        ],
      },
      {
        text: 'git',
        items: [
          { text: 'merge和rebase', link: '/md/git/merge和rebase' },
        ],
      },
      {
        text: '算法',
        items: [
          { text: '数据结构', items: [ {text: '数据结构', link: '/md/算法/数据结构'}] },
          { text: '二叉树', items: [
              { text: '最大深度', link: '/md/算法/二叉树/找到最大深度' },
            ] 
          },
          { text: '链表', items: [
              { text: '合并两个有序链表', link: '/md/算法/链表/合并两个有序链表' },
              { text: '链表清除重复的结点', link: '/md/算法/链表/链表清除重复的结点' },
              { text: '链表删除重复结点', link: '/md/算法/链表/链表删除重复结点' },
            ]
          },
          { text: '排序算法', items: [
              { text: '插入排序', link: '/md/算法/排序算法/插入排序' },
              { text: '归并排序-数组中的逆序对', link: '/md/算法/排序算法/归并排序-数组中的逆序对' },
              { text: '归并排序', link: '/md/算法/排序算法/归并排序' },
              { text: '快速排序', link: '/md/算法/排序算法/快速排序' },
              { text: '冒泡排序', link: '/md/算法/排序算法/冒泡排序' },
              { text: '选择排序', link: '/md/算法/排序算法/选择排序' },
            ]
          },
          {
            text: '算法题', items: [
              { text: '大数相加', link: '/md/算法/大数相加' },
              { text: '回文子串', link: '/md/算法/回文子串' },
              { text: '精度计算', link: '/md/算法/精度计算' },
              { text: '判断是否回文', link: '/md/算法/判断是否回文' },
              { text: '三数求和问题', link: '/md/算法/三数求和问题' },
              { text: '数字转化为中文', link: '/md/算法/数字转化为中文' },
              { text: '数组在算法中的应用', link: '/md/算法/数组在算法中的应用' },
              { text: '双指针法', link: '/md/算法/双指针法' },
              { text: '贪心算法', link: '/md/算法/贪心算法' },
              { text: '洗牌算法', link: '/md/算法/洗牌算法' },
              { text: '找到字符串的所有目标子串', link: '/md/算法/找到字符串的所有目标子串' },
              { text: '找到字符串中的最小子串', link: '/md/算法/找到字符串中的最小子串' },
              { text: '整数反转', link: '/md/算法/整数反转' },
              { text: '字符串转换整数 (atoi)', link: '/md/算法/字符串转换整数' },
              { text: 'dfs深度优先遍历', link: '/md/算法/dfs深度优先遍历' },
            ]
          }
        ],
      },
      {
        text: '手写题',
        items: [
          { text: '防抖节流', link: '/md/手写题/防抖节流'},
          { text: '函数柯里化', link: '/md/手写题/函数柯里化'},
          { text: '浅拷贝与深拷贝', link: '/md/手写题/浅拷贝与深拷贝'},
          { text: '请求限流', link: '/md/手写题/请求限流'},
          { text: '事件循环', link: '/md/手写题/事件循环'},
          { text: '手写bind', link: '/md/手写题/手写bind'},
          { text: '装饰器模式', link: '/md/手写题/装饰器模式'},
          { text: 'compose', link: '/md/手写题/compose'},
          { text: 'delay', link: '/md/手写题/delay'},
          { text: 'instanceof', link: '/md/手写题/instanceof'},
          { text: 'new', link: '/md/手写题/new'},
          { text: 'new的原理和实现', link: '/md/手写题/new的原理和实现'},
          { text: 'promise手写', link: '/md/手写题/promise手写'},
          { text: 'require源码', link: '/md/手写题/require源码'},
          { text: 'ts', link: '/md/手写题/ts'},
          { text: 'vue3中的柯里化', link: '/md/手写题/vue3中的柯里化'},
          { text: '中断和恢复任务序列', link: '/md/手写题/中断和恢复任务序列'},
        ]
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
            { title: 'node的优缺点', path: 'node的优缺点' },
            { title: '非阻塞IO模型', path: '非阻塞IO模型' },
            { title: 'BFF架构', path: 'BFF架构' },
            { title: 'eventLoop', path: 'eventLoop'},
            { title: '内存泄漏', path: '内存泄漏'},
            { title: 'express和koa的区别', path: 'exprss和koa的区别'},
            { title: 'express api总结', path: 'express api 总结'},
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
            { title: '数据更新全过程', path: 'vue2/数据更新全过程' },
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
            { title: 'vuex为什么要有action和mutation', path: 'vue2/vuex为什么要有action和mutation' },
          ]
        },
        {
          title: 'vue3',
          collapsable: false,
          children: [
            { title: '什么是受控组件', path: 'vue3/什么是受控组件' },
            { title: 'pinia学习', path: 'vue3/pinia学习' },
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
            { title: 'webpack打包优化', path: 'webpack打包优化'},
          ]
        }
      ],
      '/md/算法/': [
          { title: '数据结构', 
            collapsable: false, 
            children: [
              { title: '数据结构', path: '数据结构' }
            ]
          },
          { title: '二叉树',
            collapsable: false,
            children: [
              { title: '最大深度', path: '二叉树/找到最大深度' },
            ] 
          },
          { title: '链表', collapsable: false, children: [
              { title: '合并两个有序链表', path: '链表/合并两个有序链表' },
              { title: '链表清除重复的结点', path: '链表/链表清除重复的结点' },
              { title: '链表删除重复结点', path: '链表/链表删除重复结点' },
            ]
          },
          { title: '排序算法', collapsable: false, children: [
              { title: '插入排序', path: '排序算法/插入排序' },
              { title: '归并排序-数组中的逆序对', path: '排序算法/归并排序-数组中的逆序对' },
              { title: '归并排序', path: '排序算法/归并排序' },
              { title: '快速排序', path: '排序算法/快速排序' },
              { title: '冒泡排序', path: '排序算法/冒泡排序' },
              { title: '选择排序', path: '排序算法/选择排序' },
            ]
          },
          {
            title: '算法题', collapsable: false, children: [
              { title: '大数相加', path: '大数相加' },
              { title: '回文子串', path: '回文子串' },
              { title: '精度计算', path: '精度计算' },
              { title: '判断是否回文', path: '判断是否回文' },
              { title: '三数求和问题', path: '三数求和问题' },
              { title: '数字转化为中文', path: '数字转化为中文' },
              { title: '数组在算法中的应用', path: '数组在算法中的应用' },
              { title: '双指针法', path: '双指针法' },
              { title: '贪心算法', path: '贪心算法' },
              { title: '洗牌算法', path: '洗牌算法' },
              { title: '找到字符串的所有目标子串', path: '找到字符串的所有目标子串' },
              { title: '找到字符串中的最小子串', path: '找到字符串中的最小子串' },
              { title: '整数反转', path: '整数反转' },
              { title: '字符串转换整数 (atoi)', path: '字符串转换整数' },
              { title: 'dfs深度优先遍历', path: 'dfs深度优先遍历' },
            ]
          }
      ],
      '/md/手写题/': [
        {
          title: '手写题',
          collapsable: false,
          children: [
            { title: '防抖节流', path: '防抖节流'},
            { title: '函数柯里化', path: '函数柯里化'},
            { title: '浅拷贝与深拷贝', path: '浅拷贝与深拷贝'},
            { title: '请求限流', path: '请求限流'},
            { title: '事件循环', path: '事件循环'},
            { title: '手写bind', path: '手写bind'},
            { title: '装饰器模式', path: '装饰器模式'},
            { title: 'compose', path: 'compose'},
            { title: 'delay', path: 'delay'},
            { title: 'instanceof', path: 'instanceof'},
            { title: 'new', path: 'new'},
            { title: 'new的原理和实现', path: 'new的原理和实现'},
            { title: 'promise手写', path: 'promise手写'},
            { title: 'require源码', path: 'require源码'},
            { title: 'ts', path: 'ts'},
            { title: 'vue3中的柯里化', path: 'vue3中的柯里化'},
            { title: '中断和恢复任务序列', path: '中断和恢复任务序列'},
          ]
        }
      ],
      '/md/javascript/': [
        {
          title: 'javascript',
          collapsable: false, 
          children: [
            { title: '遍历和迭代的理解', path: '遍历和迭代的理解'},
            { title: '函数式编程', path: '函数式编程'},
            { title: '解释型语言和编译型语言', path: '解释型语言和编译型语言'},
            { title: '面向过程和面向对象', path: '面向过程和面向对象'},
            { title: '设计模式理解', path: '设计模式理解'},
            { title: '作用域和作用域链', path: '作用域和作用域链'},
            { title: 'babel编译原理', path: 'babel编译原理'},
            { title: 'call,apply,bind区别', path: 'call,apply,bind区别'},
            { title: 'class类', path: 'class类'},
            { title: 'gzip原理', path: 'gzip原理'},
            { title: 'import和require的区别', path: 'import和require的区别'},
            { title: 'js变量提升', path: 'js变量提升'},
            { title: 'js的静态分析', path: 'js的静态分析'},
            { title: 'js的延迟加载及异步async和defer', path: 'js的延迟加载及异步async和defer'},
            { title: 'js继承', path: 'js继承'},
            { title: 'js中的this指向问题', path: 'js中的this指向问题'},
            { title: 'setInterval的理解', path: 'setInterval的理解'},
            { title: '上下文和this', path: '上下文和this'},
          ]
        },
      ],
      '/md/react/': [
        {
          title: 'react',
          collapsable: false, 
          children: [
            { title: '生命周期', path: '生命周期'},
            { title: '为什么只有一个根元素', path: '为什么只有一个根元素'},
            { title: 'setState和useState', path: 'setState和useState'},
            { title: 'hooks', path: 'hooks'},
            { title: 'redux工作原理', path: 'redux工作原理'},
            { title: 'fiber的理解', path: 'fiber的理解'},
          ]
        }
      ]
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
