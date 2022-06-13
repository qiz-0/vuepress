const nav = require("./config/nav");
const pluginsConf = require('./plugins/index')

module.exports = {
  base: "/",
  title: '安然处之',
  description: "苟利国",
  head: [
    ["link", { rel: "icon", href: "/favicon.ico" }],
    ["script", {"language": "javascript","type": "text/javascript","src": "https://cdn.bootcdn.net/ajax/libs/jquery/3.5.1/jquery.min.js"}],
    ["script", {"language": "javascript","type": "text/javascript","src": "/js/mouseClick.js"}],
    ["script", {"language": "javascript","type": "text/javascript","src": "/js/bg.js"}],
    // ["script", {"language": "javascript","type": "text/javascript","src": "/js/sakura.js"}],
    ["meta", {name: "viewport",content: "width=device-width,initial-scale=1,user-scalable=no"}]
  ],
  theme: "reco",
  markdown: {
    lineNumbers: true
  },
  themeConfig: {
    //不使用腾讯404公益
    noFoundPageByTencent: false,
    //首页样式
    back:{
      isRandom: true, //是否采用随机模式
      bgImage: 'https://cdn.jsdelivr.net/gh/qiz-0/blog_img/1.jpg',  //首页背景图
      bgUrls: [
          'https://cdn.jsdelivr.net/gh/qiz-0/blog_img/1.jpg',
          'https://cdn.jsdelivr.net/gh/qiz-0/blog_img/3.jpg',
          'https://cdn.jsdelivr.net/gh/qiz-0/blog_img/2.jpg',
          'https://cdn.jsdelivr.net/gh/qiz-0/blog_img/4.jpg',
          'https://cdn.jsdelivr.net/gh/qiz-0/blog_img/5.jpg',
          'https://cdn.jsdelivr.net/gh/qiz-0/blog_img/5.jpg',
          'https://cdn.jsdelivr.net/gh/qiz-0/blog_img/6.jpg',
          'https://cdn.jsdelivr.net/gh/qiz-0/blog_img/7.jpg',
          'https://cdn.jsdelivr.net/gh/qiz-0/blog_img/9.jpg',
          'https://cdn.jsdelivr.net/gh/qiz-0/blog_img/8.png',
          'https://cdn.jsdelivr.net/gh/qiz-0/blog_img/10.jpg',
          'https://cdn.jsdelivr.net/gh/qiz-0/blog_img/18.jpg',
          // 'https://cdn.jsdelivr.net/gh/qiz-0/blog_img/00.jpg',
        ] //随机模式下图片的随机数组
  },
    indexTitle:"人生来来往往，来日并不方长。",
    indexDes:"Life comes and goes, but the future is not long.",
    //是否全屏样式 true，false
    fullscreen: true,
    //全屏模式下才应用 分类图片 不填或者默认为随机
    categoryPic: null,
    tagPic: null,
    timePic: null,
    modePicker: false,
    mode: 'light',
    type: "blog",
    // 博客设置
    blogConfig: {
      // subSidebar: 'auto',
      // home: '/',
      category: {
        location: 2, // 在导航栏菜单中所占的位置，默认2
        text: "文章" // 默认 “分类”Category
      },
      tag: {
        location: 3, // 在导航栏菜单中所占的位置，默认3
        text: "标签" // 默认 “标签”Tag
      },
      socialLinks: [     // 信息栏展示社交信息
        { icon: 'reco-github', link: 'https://github.com/qiz-0' },
        { icon: 'reco-bilibili', link: 'https://www.bilibili.com/video/BV1D34y1m7Lz?spm_id_from=333.337.search-card.all.click' }
       ],
    },
    nav,
    logo: '/logo.png',
    authorAvatar: '/head2.jpg', //作者头像
    // valineConfig: {
    //   appId: 'xxxxxx',// your appId
    //   appKey: 'xxxxxxxx', // your appKey
    //   recordIP:true,
    //   placeholder:'Yida同学需要你的评论...',
    //   visitor:true,
    // },
    // 搜索设置
    search: true,
    searchMaxSuggestions: 10,
    // 自动形成侧边导航
    sidebar: "auto",
    // 最后更新时间
    lastUpdated: "Last Updated",
    // 作者
    author: "刘大麻子",
    // 备案号
    record: '鲁ICP备2022002715号-2',
    recordLink: 'https://beian.miit.gov.cn',
    cyberSecurityRecord: '萌ICP备20229979号',
    cyberSecurityLink: 'https://icp.gov.moe/?keyword=20229979',
    // 项目开始时间
    startYear: "2022",
    friendLink: [
      {
        title: "午后南杂",
        desc: "Enjoy when you can, and endure when you must.",
        email: "1156743527@qq.com",
        link: "https://www.recoluan.com",
      },
      {
        title: "vuepress-theme-reco",
        desc: "A simple and beautiful vuepress Blog & Doc theme.",
        avatar:
          "https://vuepress-theme-reco.recoluan.com/icon_vuepress_reco.png",
        link: "https://vuepress-theme-reco.recoluan.com",
      },
      {
        title: '张益达',
        desc: '张益达',
        link: 'https://zyj_yida.gitee.io/'
      }
    ],
    //首页格言
    mottos: [{
      "zh": "人生来来往往，来日并不方长。",
      "en": "Life comes and goes, but the future is not long."
      },
      {
        "zh": "他心里的苦越多，一丝甜就能填满。",
        "en": "The more bitterness in his heart, the sweetness can fill it."
      },
      {
        "zh": "梦想不会逃跑，会逃跑的永远都是自己。",
        "en": "Dream will not run away, will always be their own escape."
      },
      {
        "zh": "涉江而过，芙蓉千朵。诗也简单，心也简单。",
        "en": "Crossing the river, there are thousands of Hibiscus. Poetry is simple, heart is simple."
      },
      {
        "zh": "一别两三年，忽然又夏天。",
        "en": "Two or three years later, it was summer again."
      }, {
        "zh": "未成定局的事就不要弄的人尽皆知。",
        "en": "Don't do anything that's not settled but everyone knows it."
      },
      {
        "zh": "也许明天的我会痛恨自己，但今夜的我仍在前行。",
        "en": "I might hate myself tomorrow, but I'm on my way tonight."
      }
    ],
  },
  plugins: pluginsConf
 };
