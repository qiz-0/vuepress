module.exports = [
  //Home
  { text: "主页", link: "/", icon: "reco-home" }, 
  //TimeLine
  { text: "时间轴", link: "/timeline/", icon: "reco-date" },
  //Contact
  {
    text: "工具", 
    icon: "  reco-menu",
    items: [
      { text: "图床", link: "https://sm.ms/home/picture", icon: "reco-other" }, 
      { text: "NginX配置", link: "https://www.digitalocean.com/community/tools/nginx?global.app.lang=zhCN", icon: "reco-other" }, 
      { text: "html/excel转md", link: "https://products.aspose.app/cells/zh/conversion/xlsx-to-md", icon: "reco-other" }, 
      { text: "炫猿导航", link: "https://xydh.fun/", icon: "reco-other" }, 
      { text: "音乐解锁", link: "https://demo.unlock-music.dev", icon: "reco-other" }, 
      { text: "Iwara", link: "https://www.iwara.tv/", icon: "reco-other" }, 
      
    ],
  },
  {
    text: 'menu',
    icon: "reco-account",
    items: [
      {  
        items: [
          { text: "jellyfin", link: "http://je.wosb.cc", icon: "reco-other" }, 
          {text: "QL",link: "http://ql.wosb.cc ",icon: "reco-other"},
          {text: "NextCloud",link: "https://nc.wosb.cc",icon: "reco-other",},
        ] 
      },
      { 
      text: 'IPv6/内网', 
      items: [  
          { text: "目录索引", link: "https://www.wosb.cc/snap2out/index.html", icon: "reco-other" }, 
          {text: "speedtest",link: "http://speed.wosb.cc ",icon: "reco-other"},
          {text: "迅雷群晖版",link: "http://xl.wosb.cc",icon: "reco-other",},
          {text: "alist",link: "http://alist.wosb.cc ",icon: "reco-other"},
        ] 
      }
    ]
  },
  {
    text: "关于", 
    icon: "reco-message",
    items: [
      { text: "关于我", link: "/about/", icon: "reco-account" }, 
      {
        text: "GitHub",
        link: "https://github.com/qiz-0",
        icon: "reco-github",
      },
      {
        text: "Bilbili",
        link: "https://www.bilibili.com/video/BV1D34y1m7Lz?spm_id_from=333.337.search-card.all.click",
        icon: "reco-bilibili",
      },
    ],
  },
];
