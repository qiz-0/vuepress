module.exports = {
    "dynamic-title":{
        showIcon: "https://zyj_yida.gitee.io/source/img/ico/favicon.ico",
        showText: "欢迎回来！",
        hideIcon: "https://zyj_yida.gitee.io/source/img/ico/favicon.ico",
        hideText: "Wait ...",
        recoverTime: 2000
    },
    "vuepress-plugin-nuggets-style-copy":
       {
         copyText: "复制代码",
         tip: {
             content: "复制成功!"
        }
     },
      "vuepress-plugin-boxx":{},
      'meting': {
        auto: "https://music.163.com/#/my/m/music/playlist?id=7341602578", //你的歌单的链接，网页歌单链接
        meting: {
          server: "netease",  //歌单的平台、我这里是QQ音乐的平台
          type: "playlist",
          mid: "7341602578", //链接后面的id
        },          // 不配置该项的话不会出现全局播放器
        aplayer: {
          lrcType: 3,
          autoplay: true
        }
      }
}