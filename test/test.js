/**
 * XadillaX created at 2014-10-21 15:27
 *
 * Copyright (c) 2014 Huaban.com, all rights
 * reserved.
 */
var fbbkJSON = require("../");

try {
    console.log(fbbkJSON.parse('[\
        {\
            name: "user_id",\
            alias: "userId",\
            primaryKey: true\
        },\
        { name: "username" },\
        { name: "password" },\
        { name: "email" },\
        { name: "urlname" },\
        { name: "created_at", alias: "createdAt"},\
        { name: "avatar" },\
        { name: "roles" },\
        { name: "rating" } \
    ]'));
} catch(e) {
    console.log(e.message);
}

var string = '{\
pn:"0",\
    logext:"&rs=0&uname=&ey=0&st=0&ty=3&ut=0&sc=0&lt=0&ec=0&so=0&wt=2555&se=0&s=0&tb=0&sp=0&qt=0&tm=0&gut=0&qf=3659",\
    queryEnc:"lol",\
    kw:"lol",\
    dispNum:"2319840",\
    filters:{\
    cond_order:[{title:"按相关性",old:"",surfix:"ty=0&nf=0&cl=0&du=0&pd=0&sc=0&order=0",status:"1"},{title:"按发布时间",old:"",surfix:"ty=0&nf=0&cl=0&du=0&pd=0&sc=0&order=1",status:"0"}],\
        cond_duration:[{title:"全部时长",old:"",surfix:"ty=0&nf=0&cl=0&du=0&pd=0&sc=0&order=0",status:"1"},{title:"长(30分钟以上)",old:"",surfix:"ty=0&nf=0&cl=0&du=1&pd=0&sc=0&order=0",status:"0"},{title:"中(10-30分钟)",old:"",surfix:"ty=0&nf=0&cl=0&du=2&pd=0&sc=0&order=0",status:"0"},{title:"短(0-10分钟)",old:"",surfix:"ty=0&nf=0&cl=0&du=3&pd=0&sc=0&order=0",status:"0"}],\
        cond_clarity:[{title:"全部清晰度",old:"",surfix:"ty=0&nf=0&cl=0&du=0&pd=0&sc=0&order=0",status:"1"},{title:"高清结果",old:"",surfix:"ty=0&nf=0&cl=1&du=0&pd=0&sc=0&order=0",status:"0"}],\
        cond_time:[{title:"全部发布时间",old:"",surfix:"ty=0&nf=0&cl=0&du=0&pd=0&sc=0&order=0",status:"1"},{title:"2小时以内",old:"",surfix:"ty=0&nf=0&cl=0&du=0&pd=1&sc=0&order=0",status:"0"},{title:"1天内",old:"",surfix:"ty=0&nf=0&cl=0&du=0&pd=2&sc=0&order=0",status:"0"},{title:"1周内",old:"",surfix:"ty=0&nf=0&cl=0&du=0&pd=3&sc=0&order=0",status:"0"},{title:"1月内",old:"",surfix:"ty=0&nf=0&cl=0&du=0&pd=4&sc=0&order=0",status:"0"},{title:"1年内",old:"",surfix:"ty=0&nf=0&cl=0&du=0&pd=5&sc=0&order=0",status:"0"}],\
        cond_site:[{title:"全部站点来源", old:"", surfix:"ty=0&nf=0&cl=0&du=0&pd=0&sc=0&order=0", status:"1"}, {title:"爱奇艺", old:"", surfix:"ty=0&nf=0&cl=0&du=0&pd=0&sc=1&order=0", status:"0"}, {title:"PPS", old:"", surfix:"ty=0&nf=0&cl=0&du=0&pd=0&sc=2&order=0", status:"0"}, {title:"搜狐", old:"", surfix:"ty=0&nf=0&cl=0&du=0&pd=0&sc=3&order=0", status:"0"}, {title:"腾讯", old:"", surfix:"ty=0&nf=0&cl=0&du=0&pd=0&sc=4&order=0", status:"2"}, {title:"乐视", old:"", surfix:"ty=0&nf=0&cl=0&du=0&pd=0&sc=5&order=0", status:"0"}, {title:"酷6", old:"", surfix:"ty=0&nf=0&cl=0&du=0&pd=0&sc=6&order=0", status:"0"}, {title:"凤凰", old:"", surfix:"ty=0&nf=0&cl=0&du=0&pd=0&sc=7&order=0", status:"0"}, {title:"迅雷看看", old:"", surfix:"ty=0&nf=0&cl=0&du=0&pd=0&sc=8&order=0", status:"0"}, {title:"第一视频", old:"", surfix:"ty=0&nf=0&cl=0&du=0&pd=0&sc=9&order=0", status:"2"}, {title:"CNTV", old:"", surfix:"ty=0&nf=0&cl=0&du=0&pd=0&sc=10&order=0", status:"2"}, {title:"电影网", old:"", surfix:"ty=0&nf=0&cl=0&du=0&pd=0&sc=11&order=0", status:"2"}, {title:"爆米花", old:"", surfix:"ty=0&nf=0&cl=0&du=0&pd=0&sc=12&order=0", status:"0"}, {title:"56", old:"", surfix:"ty=0&nf=0&cl=0&du=0&pd=0&sc=13&order=0", status:"0"}, {title:"新浪", old:"", surfix:"ty=0&nf=0&cl=0&du=0&pd=0&sc=14&order=0", status:"2"}, {title:"PPTV", old:"", surfix:"ty=0&nf=0&cl=0&du=0&pd=0&sc=15&order=0", status:"2"}, {title:"华数", old:"", surfix:"ty=0&nf=0&cl=0&du=0&pd=0&sc=16&order=0", status:"0"}, {title:"优酷", old:"", surfix:"ty=0&nf=0&cl=0&du=0&pd=0&sc=17&order=0", status:"2"}, {title:"土豆", old:"", surfix:"ty=0&nf=0&cl=0&du=0&pd=0&sc=18&order=0", status:"2"}, {title:"暴风", old:"", surfix:"ty=0&nf=0&cl=0&du=0&pd=0&sc=19&order=0", status:"2"}, {title:"hao123影视", old:"", surfix:"ty=0&nf=0&cl=0&du=0&pd=0&sc=20&order=0", status:"2"}]\
},\
data: [\
    {\
        isZt:"0",\
        pic: "http://t3.baidu.com/it/u=1774670763,2033685023&fm=20",\
        ti:"LOL YD解说 凶残鳄鱼第一视角教学  lol",\
        abstract: "<font color=#c60a00>LOL</font> YD解说 凶残鳄鱼第一视角教学  <font color=#c60a00>lol</font>",\
        url: "/link?url=dm_00pw_klemzFaU2vO4w7zo2Cc1yuX_dCEHtgd-yB9KvmEH_7cUDExVXhwf62rkxuKomwyTMYtwQ2JtNdeQCvLHOt6mtBsKSnss.",\
        link_sign: "3216878508,1297581846",\
        urlhash:"",\
        duration: "30:00",\
        duration_hour: "30:00",\
        srcShortUrlExt: "爱拍",\
        isHd:"0",\
        listNum:"1",\
        signKey:"1774670763,2033685023",\
\
        srcShortUrl:"www.aipai.com",\
        videoType:"1",\
        tm:"0",\
        type:"3",\
        tag: [{name: "英雄联盟",url: "http://video.baidu.com/v?word=%D3%A2%D0%DB%C1%AA%C3%CB&ct=301989888&pn=0&db=0&s=1" }]\
    },\
\
    {\
        isZt:"0",\
        pic: "http://t3.baidu.com/it/u=3575332962,470698868&fm=20",\
        ti:"lol搞笑视频 lol小苍坑爹集锦全集[高清]",\
        abstract: "<font color=#c60a00>lol</font>搞笑视频 <font color=#c60a00>lol</font>小苍坑爹集锦全集[高清]",\
        url: "/link?url=dm_00pw_klemzFaU2vO4w7zo2Cc1yuX_dCEHtgd-yB9KvmEHl45xZBFJUiQahl7Uz-v1iiCSqFY0fp8s8L4Fny_m1yO_uHYSVm9OurA..",\
        link_sign: "1958010757,1079657839",\
        urlhash:"",\
        duration: "09:19",\
        duration_hour: "09:19",\
        srcShortUrlExt: "搜狐",\
        isHd:"0",\
        listNum:"2",\
        signKey:"3575332962,470698868",\
\
        srcShortUrl:"my.tv.sohu.com",\
        videoType:"1",\
        tm:"0",\
        type:"3",\
        tag: []\
    },\
\
    {\
        isZt:"0",\
        pic: "http://t2.baidu.com/it/u=1744566221,1657094993&fm=20",\
        ti:"[起小点出品]LOL精彩TOP10 VOL29 只需一脚，胜负已定",\
        abstract: "[起小点出品]<font color=#c60a00>LOL</font>精彩TOP10 VOL29 只需一脚，胜...",\
        url: "/link?url=dm_00pw_klemzFaU2vO4w7zo2Cc1yuX_dCEHtgd-yB9KvmEH_7cUDGw1Onwf62rkxuKVIyjLuVNkQ9YRofIA5jqzo",\
        link_sign: "976766866,2923169599",\
        urlhash:"",\
        duration: "06:49",\
        duration_hour: "06:49",\
        srcShortUrlExt: "爱奇艺",\
        isHd:"1",\
        listNum:"3",\
        signKey:"1744566221,1657094993",\
\
        srcShortUrl:"www.iqiyi.com",\
        videoType:"1",\
        tm:"0",\
        type:"3",\
        tag: []\
    },\
\
    {\
        isZt:"0",\
        pic: "http://t1.baidu.com/it/u=2348024545,4121918160&fm=20",\
        ti:"lol小智解说熔岩巨兽",\
        abstract: "<font color=#c60a00>lol</font>小智解说熔岩巨兽",\
        url: "/link?url=dm_00pw_klemzFaU2vO4w7zo2Cc1yuX_dCEHtgd-yB9KvmEH_7cUDGw1Onwf62rkxuKVIyjLuVNwR-JpsfIA5jqzo",\
        link_sign: "691013857,2633782987",\
        urlhash:"",\
        duration: "24:49",\
        duration_hour: "24:49",\
        srcShortUrlExt: "爱奇艺",\
        isHd:"1",\
        listNum:"4",\
        signKey:"2348024545,4121918160",\
\
        srcShortUrl:"www.iqiyi.com",\
        videoType:"1",\
        tm:"0",\
        type:"3",\
        tag: [{name: "闯关攻略",url: "http://video.baidu.com/v?word=%B4%B3%B9%D8%B9%A5%C2%D4&ct=301989888&pn=0&db=0&s=1" },{name: "技能技巧",url: "http://video.baidu.com/v?word=%BC%BC%C4%DC%BC%BC%C7%C9&ct=301989888&pn=0&db=0&s=1" }]\
    },\
\
    {\
        isZt:"0",\
        pic: "http://t1.baidu.com/it/u=2335914603,437981208&fm=20",\
        ti:"LOL螳螂新皮肤",\
        abstract: "<font color=#c60a00>LOL</font>螳螂新皮肤",\
        url: "/link?url=dm_00pw_klemzFaU2vO4w7zo2Cc1yuX_dCEHtgd-yB9KvmEH-tNlYRFJEiQP7yr4z4P1NqVLoY_xt95U0VeQck7DDpKybQNun3YntqHjSWg..",\
        link_sign: "1635519552,1244078396",\
        urlhash:"",\
        duration: "03:29",\
        duration_hour: "03:29",\
        srcShortUrlExt: "酷6",\
        isHd:"0",\
        listNum:"5",\
        signKey:"2335914603,437981208",\
\
        srcShortUrl:"v.ku6.com",\
        videoType:"1",\
        tm:"0",\
        type:"3",\
        tag: []\
    },\
\
    {\
        isZt:"0",\
        pic: "http://t1.baidu.com/it/u=2789671142,3188986997&fm=20",\
        ti:"LOL 精彩时刻 第72集",\
        abstract: "<font color=#c60a00>LOL</font> 精彩时刻 第72集",\
        url: "/link?url=dm_00pw_klemzFaU2vO4w7zo2Cc1yuX_dCEHtgd-yB9KvmEH_7cUDR0oJhQG5lqNlo_1hpEbIY4tk6KM0VcQAgO_shLez",\
        link_sign: "2065156117,432623877",\
        urlhash:"",\
        duration: "02:14",\
        duration_hour: "02:14",\
        srcShortUrlExt: "56",\
        isHd:"0",\
        listNum:"6",\
        signKey:"2789671142,3188986997",\
\
        srcShortUrl:"www.56.com",\
        videoType:"1",\
        tm:"0",\
        type:"3",\
        tag: []\
    },\
\
    {\
        isZt:"0",\
        pic: "http://t1.baidu.com/it/u=1189141854,1266972033&fm=20",\
        ti:"小智解说lol飞天螳螂【！",\
        abstract: "小智解说<font color=#c60a00>lol</font>飞天螳螂【！",\
        url: "/link?url=dm_00pw_klemzFaU2vO4w7zo2Cc1yuX_dCEHtgd-yB9KvmEH-tMJdAVJTkEGk1bclyOFfsT7ZaJFB5p9o",\
        link_sign: "1973635888,620911881",\
        urlhash:"",\
        duration: "27:19",\
        duration_hour: "27:19",\
        srcShortUrlExt: "PPS",\
        isHd:"0",\
        listNum:"7",\
        signKey:"1189141854,1266972033",\
\
        srcShortUrl:"v.pps.tv",\
        videoType:"1",\
        tm:"0",\
        type:"3",\
        tag: [{name: "PPS视频",url: "http://video.baidu.com/v?word=PPS%CA%D3%C6%B5&ct=301989888&pn=0&db=0&s=1" }]\
    },\
\
    {\
        isZt:"0",\
        pic: "http://t2.baidu.com/it/u=2224739079,1048467793&fm=20",\
        ti:"英雄联盟LOL宣传片",\
        abstract: "英雄联盟<font color=#c60a00>LOL</font>宣传片",\
        url: "/link?url=dm_00pw_klemzFaU2vO4w7zo2Cc1yuX_dCEHtgd-yB9KvmEH-tNlYRFJEiQP7yr4z4P1W1jLbbYgf2cZrSNhnlJblsoKIee-B3YntqHjSWg..",\
        link_sign: "580558631,4270381781",\
        urlhash:"",\
        duration: "05:00",\
        duration_hour: "05:00",\
        srcShortUrlExt: "酷6",\
        isHd:"0",\
        listNum:"8",\
        signKey:"2224739079,1048467793",\
\
        srcShortUrl:"v.ku6.com",\
        videoType:"1",\
        tm:"0",\
        type:"3",\
        tag: []\
    },\
\
    {\
        isZt:"0",\
        pic: "http://t2.baidu.com/it/u=4147027873,3953063413&fm=20",\
        ti:"2014英雄联盟LOL国服LPL职业联赛S4国际资格赛冠军赛EDGvs皇族第3场",\
        abstract: "2014英雄联盟<font color=#c60a00>LOL</font>国服LPL职业联赛S4国际资格赛冠...",\
        url: "/link?url=dm_00pw_klemzFaU2vO4w7zo2Cc1yuX_dCEHtgd-yB9KvmEH_7cUDR0oJhQG5lqNlov1hpEbIb49nxrd9V_oEyO_shLez",\
        link_sign: "2453286602,894157066",\
        urlhash:"",\
        duration: "43:47",\
        duration_hour: "43:47",\
        srcShortUrlExt: "56",\
        isHd:"0",\
        listNum:"9",\
        signKey:"4147027873,3953063413",\
\
        srcShortUrl:"www.56.com",\
        videoType:"1",\
        tm:"0",\
        type:"3",\
        tag: []\
    },\
\
    {\
        isZt:"0",\
        pic: "http://t1.baidu.com/it/u=1028363739,1642878774&fm=20",\
        ti:"LOL副本终极BOSS维嘉",\
        abstract: "<font color=#c60a00>LOL</font>副本终极BOSS维嘉",\
        url: "/link?url=dm_00pw_klemzFaU2vO4w7zo2Cc1yuX_dCEHtgd-yB9KvmEH-tMJdAVJTkEGk1bclyOFft0XefpFB5p9o",\
        link_sign: "1984182127,1091425873",\
        urlhash:"",\
        duration: "01:14",\
        duration_hour: "01:14",\
        srcShortUrlExt: "PPS",\
        isHd:"0",\
        listNum:"10",\
        signKey:"1028363739,1642878774",\
\
        srcShortUrl:"v.pps.tv",\
        videoType:"1",\
        tm:"0",\
        type:"3",\
        tag: [{name: "PPS视频",url: "http://video.baidu.com/v?word=PPS%CA%D3%C6%B5&ct=301989888&pn=0&db=0&s=1" }]\
    },\
\
    {\
        isZt:"0",\
        pic: "http://t2.baidu.com/it/u=1906302196,3187774678&fm=20",\
        ti:"（小智lol第一视角）蛇女，中单暴君！ 小智解说lol",\
        abstract: "（小智<font color=#c60a00>lol</font>第一视角）蛇女，中单暴君！ 小智解说<font color=#c60a00>lol</font>",\
        url: "/link?url=dm_00pw_klemzFaU2vO4w7zo2Cc1yuX_dCEHtgd-yB9KvmEH_7cUDExVXhwf62rkxuKomzCTMXNBH25tnceICrLDOp4usZN3Im9OurA..",\
        link_sign: "1640510664,1311064963",\
        urlhash:"",\
        duration: "18:33",\
        duration_hour: "18:33",\
        srcShortUrlExt: "爱拍",\
        isHd:"0",\
        listNum:"11",\
        signKey:"1906302196,3187774678",\
\
        srcShortUrl:"www.aipai.com",\
        videoType:"1",\
        tm:"0",\
        type:"3",\
        tag: [{name: "英雄联盟",url: "http://video.baidu.com/v?word=%D3%A2%D0%DB%C1%AA%C3%CB&ct=301989888&pn=0&db=0&s=1" }]\
    },\
\
    {\
        isZt:"0",\
        pic: "http://t2.baidu.com/it/u=2491338810,2094219899&fm=20",\
        ti:"LOL英雄新手教学视频蛮族之王泰达米尔",\
        abstract: "<font color=#c60a00>LOL</font>英雄新手教学视频蛮族之王泰达米尔",\
        url: "/link?url=dm_00pw_klemzFaU2vO4w7zo2Cc1yuX_dCEHtgd-yB9KvmEHl45xZBFJUiQahl7Uz-v1iiG7uCdtM5pNtdIFky_i3x-_tGYSVm9OurA..",\
        link_sign: "508511980,1209895026",\
        urlhash:"",\
        duration: "07:34",\
        duration_hour: "07:34",\
        srcShortUrlExt: "搜狐",\
        isHd:"0",\
        listNum:"12",\
        signKey:"2491338810,2094219899",\
\
        srcShortUrl:"my.tv.sohu.com",\
        videoType:"1",\
        tm:"0",\
        type:"3",\
        tag: []\
    },\
\
    {\
        isZt:"0",\
        pic: "http://t1.baidu.com/it/u=3855824463,3378552145&fm=20",\
        ti:"英雄联盟：LOL安妮，新手教程",\
        abstract: "英雄联盟：<font color=#c60a00>LOL</font>安妮，新手教程",\
        url: "/link?url=dm_00pw_klemzFaU2vO4w7zo2Cc1yuX_dCEHtgd-yB9KvmEH_7cUDGw1Onwf62rkxuKVIyjLuVNwQooJibIA5jqzo",\
        link_sign: "804080071,2631033616",\
        urlhash:"",\
        duration: "20:00",\
        duration_hour: "20:00",\
        srcShortUrlExt: "爱奇艺",\
        isHd:"1",\
        listNum:"13",\
        signKey:"3855824463,3378552145",\
\
        srcShortUrl:"www.iqiyi.com",\
        videoType:"1",\
        tm:"0",\
        type:"3",\
        tag: [{name: "闯关攻略",url: "http://video.baidu.com/v?word=%B4%B3%B9%D8%B9%A5%C2%D4&ct=301989888&pn=0&db=0&s=1" },{name: "技能技巧",url: "http://video.baidu.com/v?word=%BC%BC%C4%DC%BC%BC%C7%C9&ct=301989888&pn=0&db=0&s=1" }]\
    },\
\
    {\
        isZt:"0",\
        pic: "http://t1.baidu.com/it/u=3347044837,1063640805&fm=20",\
        ti:"LOL新英雄沙漠皇帝 阿兹尔中单试玩",\
        abstract: "<font color=#c60a00>LOL</font>新英雄沙漠皇帝 阿兹尔中单试玩",\
        url: "/link?url=dm_00pw_klemzFaU2vO4w7zo2Cc1yuX_dCEHtgd-yB9KvmEH-tNlYRFJEiQP7yr4z4P1hvVjwC-BHoK1lVp9llaPCoaLvWPCB3YntqHjSWg..",\
        link_sign: "1926124845,1995735340",\
        urlhash:"",\
        duration: "25:26",\
        duration_hour: "25:26",\
        srcShortUrlExt: "酷6",\
        isHd:"0",\
        listNum:"14",\
        signKey:"3347044837,1063640805",\
\
        srcShortUrl:"v.ku6.com",\
        videoType:"1",\
        tm:"0",\
        type:"3",\
        tag: []\
    },\
\
    {\
        isZt:"0",\
        pic: "http://t3.baidu.com/it/u=617978009,2048566347&fm=20",\
        ti:"LOL电视台一日节目秀 lol英雄联盟",\
        abstract: "<font color=#c60a00>LOL</font>电视台一日节目秀 <font color=#c60a00>lol</font>英雄联盟",\
        url: "/link?url=dm_00pw_klemzFaU2vO4w7zo2Cc1yuX_dCEHtgd-yB9KvmEH_7cUDR0oJhQG5lqNkoP1hpEbIb8Vk1pV9VeoIzu_shLez",\
        link_sign: "3187876950,2466740549",\
        urlhash:"",\
        duration: "06:27",\
        duration_hour: "06:27",\
        srcShortUrlExt: "56",\
        isHd:"0",\
        listNum:"15",\
        signKey:"617978009,2048566347",\
\
        srcShortUrl:"www.56.com",\
        videoType:"1",\
        tm:"0",\
        type:"3",\
        tag: []\
    },\
\
    {\
        isZt:"0",\
        pic: "http://t3.baidu.com/it/u=1071406576,1618890745&fm=20",\
        ti:"lol黄金段位 lol最新SKT T1 MaRin 瑞兹lol",\
        abstract: "<font color=#c60a00>lol</font>黄金段位 <font color=#c60a00>lol</font>最新SKT T1 MaRin 瑞兹<font color=#c60a00>lol</font>",\
        url: "/link?url=dm_00pw_klemzFaU2vO4w7zo2Cc1yuX_dCEHtgd-yB9KvmEH-tMJdAVJTkEGk1bclyOFfsVLQf5FB5p9o",\
        link_sign: "2108178174,1366497354",\
        urlhash:"",\
        duration: "28:57",\
        duration_hour: "28:57",\
        srcShortUrlExt: "PPS",\
        isHd:"0",\
        listNum:"16",\
        signKey:"1071406576,1618890745",\
\
        srcShortUrl:"v.pps.tv",\
        videoType:"1",\
        tm:"0",\
        type:"3",\
        tag: []\
    },\
\
    {\
        isZt:"0",\
        pic: "http://t1.baidu.com/it/u=1632509641,1762952600&fm=20",\
        ti:"lol小苍解说第一视角光辉女郎lol解说а",\
        abstract: "<font color=#c60a00>lol</font>小苍解说第一视角光辉女郎<font color=#c60a00>lol</font>解说а",\
        url: "/link?url=dm_00pw_klemzFaU2vO4w7zo2Cc1yuX_dCEHtgd-yB9KvmEH_7cUDExVXhwf62rkxuKomwyTMXOZG2KFVf-cSoLDOp4uqY83Im9OurA..",\
        link_sign: "475040663,163152446",\
        urlhash:"",\
        duration: "30:00",\
        duration_hour: "30:00",\
        srcShortUrlExt: "爱拍",\
        isHd:"0",\
        listNum:"17",\
        signKey:"1632509641,1762952600",\
\
        srcShortUrl:"www.aipai.com",\
        videoType:"1",\
        tm:"0",\
        type:"3",\
        tag: [{name: "英雄联盟",url: "http://video.baidu.com/v?word=%D3%A2%D0%DB%C1%AA%C3%CB&ct=301989888&pn=0&db=0&s=1" }]\
    },\
\
    {\
        isZt:"0",\
        pic: "http://t2.baidu.com/it/u=29914638,375092959&fm=20",\
        ti:"英雄联盟lol最新宣传片",\
        abstract: "英雄联盟<font color=#c60a00>lol</font>最新宣传片",\
        url: "/link?url=dm_00pw_klemzFaU2vO4w7zo2Cc1yuX_dCEHtgd-yB9KvmEHl45xZBFJUiQahl7Uz-v1iiCSqFYweo8cxLYFiyfG0wu_qHYSVm9OurA..",\
        link_sign: "1850720305,895865933",\
        urlhash:"",\
        duration: "03:12",\
        duration_hour: "03:12",\
        srcShortUrlExt: "搜狐",\
        isHd:"0",\
        listNum:"18",\
        signKey:"29914638,375092959",\
\
        srcShortUrl:"my.tv.sohu.com",\
        videoType:"1",\
        tm:"0",\
        type:"3",\
        tag: []\
    },\
\
    {\
        isZt:"0",\
        pic: "http://t1.baidu.com/it/u=818856126,968256726&fm=20",\
        ti:"LOL极限逃生 波比",\
        abstract: "<font color=#c60a00>LOL</font>极限逃生 波比",\
        url: "/link?url=dm_00pw_klemzFaU2vO4w7zo2Cc1yuX_dCEHtgd-yB9KvmEH_7cUDGw1Onwf62rkxuKVIyjLuV8VA5Zk0cIA5jqzo",\
        link_sign: "962410291,2500017520",\
        urlhash:"",\
        duration: "02:29",\
        duration_hour: "02:29",\
        srcShortUrlExt: "爱奇艺",\
        isHd:"0",\
        listNum:"19",\
        signKey:"818856126,968256726",\
\
        srcShortUrl:"www.iqiyi.com",\
        videoType:"1",\
        tm:"0",\
        type:"3",\
        tag: []\
    },\
\
    {\
        isZt:"0",\
        pic: "http://t1.baidu.com/it/u=4015649100,1689197269&fm=20",\
        ti:"【爱应用视频】英雄联盟 LOL 新英雄沙漠皇帝",\
        abstract: "【爱应用视频】英雄联盟 <font color=#c60a00>LOL</font> 新英雄沙漠皇帝",\
        url: "/link?url=dm_00pw_klemzFaU2vO4w7zo2Cc1yuX_dCEHtgd-yB9KvmEH_7cUDR0oJhQG5lqNpoP1hpEbIb8Vm1pl9VdQAg-_shLez",\
        link_sign: "3777430653,2937161568",\
        urlhash:"",\
        duration: "03:58",\
        duration_hour: "03:58",\
        srcShortUrlExt: "56",\
        isHd:"0",\
        listNum:"20",\
        signKey:"4015649100,1689197269",\
\
        srcShortUrl:"www.56.com",\
        videoType:"1",\
        tm:"0",\
        type:"3",\
        tag: []\
    }\
]\
}{\
pn:"0",\
    logext:"&rs=0&uname=&ey=0&st=0&ty=3&ut=0&sc=0&lt=0&ec=0&so=0&wt=2555&se=0&s=0&tb=0&sp=0&qt=0&tm=0&gut=0&qf=3659",\
    queryEnc:"lol",\
    kw:"lol",\
    dispNum:"2319840",\
    filters:{\
    cond_order:[{title:"按相关性",old:"",surfix:"ty=0&nf=0&cl=0&du=0&pd=0&sc=0&order=0",status:"1"},{title:"按发布时间",old:"",surfix:"ty=0&nf=0&cl=0&du=0&pd=0&sc=0&order=1",status:"0"}],\
        cond_duration:[{title:"全部时长",old:"",surfix:"ty=0&nf=0&cl=0&du=0&pd=0&sc=0&order=0",status:"1"},{title:"长(30分钟以上)",old:"",surfix:"ty=0&nf=0&cl=0&du=1&pd=0&sc=0&order=0",status:"0"},{title:"中(10-30分钟)",old:"",surfix:"ty=0&nf=0&cl=0&du=2&pd=0&sc=0&order=0",status:"0"},{title:"短(0-10分钟)",old:"",surfix:"ty=0&nf=0&cl=0&du=3&pd=0&sc=0&order=0",status:"0"}],\
        cond_clarity:[{title:"全部清晰度",old:"",surfix:"ty=0&nf=0&cl=0&du=0&pd=0&sc=0&order=0",status:"1"},{title:"高清结果",old:"",surfix:"ty=0&nf=0&cl=1&du=0&pd=0&sc=0&order=0",status:"0"}],\
        cond_time:[{title:"全部发布时间",old:"",surfix:"ty=0&nf=0&cl=0&du=0&pd=0&sc=0&order=0",status:"1"},{title:"2小时以内",old:"",surfix:"ty=0&nf=0&cl=0&du=0&pd=1&sc=0&order=0",status:"0"},{title:"1天内",old:"",surfix:"ty=0&nf=0&cl=0&du=0&pd=2&sc=0&order=0",status:"0"},{title:"1周内",old:"",surfix:"ty=0&nf=0&cl=0&du=0&pd=3&sc=0&order=0",status:"0"},{title:"1月内",old:"",surfix:"ty=0&nf=0&cl=0&du=0&pd=4&sc=0&order=0",status:"0"},{title:"1年内",old:"",surfix:"ty=0&nf=0&cl=0&du=0&pd=5&sc=0&order=0",status:"0"}],\
        cond_site:[{title:"全部站点来源", old:"", surfix:"ty=0&nf=0&cl=0&du=0&pd=0&sc=0&order=0", status:"1"}, {title:"爱奇艺", old:"", surfix:"ty=0&nf=0&cl=0&du=0&pd=0&sc=1&order=0", status:"0"}, {title:"PPS", old:"", surfix:"ty=0&nf=0&cl=0&du=0&pd=0&sc=2&order=0", status:"0"}, {title:"搜狐", old:"", surfix:"ty=0&nf=0&cl=0&du=0&pd=0&sc=3&order=0", status:"0"}, {title:"腾讯", old:"", surfix:"ty=0&nf=0&cl=0&du=0&pd=0&sc=4&order=0", status:"2"}, {title:"乐视", old:"", surfix:"ty=0&nf=0&cl=0&du=0&pd=0&sc=5&order=0", status:"0"}, {title:"酷6", old:"", surfix:"ty=0&nf=0&cl=0&du=0&pd=0&sc=6&order=0", status:"0"}, {title:"凤凰", old:"", surfix:"ty=0&nf=0&cl=0&du=0&pd=0&sc=7&order=0", status:"0"}, {title:"迅雷看看", old:"", surfix:"ty=0&nf=0&cl=0&du=0&pd=0&sc=8&order=0", status:"0"}, {title:"第一视频", old:"", surfix:"ty=0&nf=0&cl=0&du=0&pd=0&sc=9&order=0", status:"2"}, {title:"CNTV", old:"", surfix:"ty=0&nf=0&cl=0&du=0&pd=0&sc=10&order=0", status:"2"}, {title:"电影网", old:"", surfix:"ty=0&nf=0&cl=0&du=0&pd=0&sc=11&order=0", status:"2"}, {title:"爆米花", old:"", surfix:"ty=0&nf=0&cl=0&du=0&pd=0&sc=12&order=0", status:"0"}, {title:"56", old:"", surfix:"ty=0&nf=0&cl=0&du=0&pd=0&sc=13&order=0", status:"0"}, {title:"新浪", old:"", surfix:"ty=0&nf=0&cl=0&du=0&pd=0&sc=14&order=0", status:"2"}, {title:"PPTV", old:"", surfix:"ty=0&nf=0&cl=0&du=0&pd=0&sc=15&order=0", status:"2"}, {title:"华数", old:"", surfix:"ty=0&nf=0&cl=0&du=0&pd=0&sc=16&order=0", status:"0"}, {title:"优酷", old:"", surfix:"ty=0&nf=0&cl=0&du=0&pd=0&sc=17&order=0", status:"2"}, {title:"土豆", old:"", surfix:"ty=0&nf=0&cl=0&du=0&pd=0&sc=18&order=0", status:"2"}, {title:"暴风", old:"", surfix:"ty=0&nf=0&cl=0&du=0&pd=0&sc=19&order=0", status:"2"}, {title:"hao123影视", old:"", surfix:"ty=0&nf=0&cl=0&du=0&pd=0&sc=20&order=0", status:"2"}]\
},\
data: [\
    {\
        isZt:"0",\
        pic: "http://t3.baidu.com/it/u=1774670763,2033685023&fm=20",\
        ti:"LOL YD解说 凶残鳄鱼第一视角教学  lol",\
        abstract: "<font color=#c60a00>LOL</font> YD解说 凶残鳄鱼第一视角教学  <font color=#c60a00>lol</font>",\
        url: "/link?url=dm_00pw_klemzFaU2vO4w7zo2Cc1yuX_dCEHtgd-yB9KvmEH_7cUDExVXhwf62rkxuKomwyTMYtwQ2JtNdeQCvLHOt6mtBsKSnss.",\
        link_sign: "3216878508,1297581846",\
        urlhash:"",\
        duration: "30:00",\
        duration_hour: "30:00",\
        srcShortUrlExt: "爱拍",\
        isHd:"0",\
        listNum:"1",\
        signKey:"1774670763,2033685023",\
\
        srcShortUrl:"www.aipai.com",\
        videoType:"1",\
        tm:"0",\
        type:"3",\
        tag: [{name: "英雄联盟",url: "http://video.baidu.com/v?word=%D3%A2%D0%DB%C1%AA%C3%CB&ct=301989888&pn=0&db=0&s=1" }]\
    },\
\
    {\
        isZt:"0",\
        pic: "http://t3.baidu.com/it/u=3575332962,470698868&fm=20",\
        ti:"lol搞笑视频 lol小苍坑爹集锦全集[高清]",\
        abstract: "<font color=#c60a00>lol</font>搞笑视频 <font color=#c60a00>lol</font>小苍坑爹集锦全集[高清]",\
        url: "/link?url=dm_00pw_klemzFaU2vO4w7zo2Cc1yuX_dCEHtgd-yB9KvmEHl45xZBFJUiQahl7Uz-v1iiCSqFY0fp8s8L4Fny_m1yO_uHYSVm9OurA..",\
        link_sign: "1958010757,1079657839",\
        urlhash:"",\
        duration: "09:19",\
        duration_hour: "09:19",\
        srcShortUrlExt: "搜狐",\
        isHd:"0",\
        listNum:"2",\
        signKey:"3575332962,470698868",\
\
        srcShortUrl:"my.tv.sohu.com",\
        videoType:"1",\
        tm:"0",\
        type:"3",\
        tag: []\
    },\
\
    {\
        isZt:"0",\
        pic: "http://t2.baidu.com/it/u=1744566221,1657094993&fm=20",\
        ti:"[起小点出品]LOL精彩TOP10 VOL29 只需一脚，胜负已定",\
        abstract: "[起小点出品]<font color=#c60a00>LOL</font>精彩TOP10 VOL29 只需一脚，胜...",\
        url: "/link?url=dm_00pw_klemzFaU2vO4w7zo2Cc1yuX_dCEHtgd-yB9KvmEH_7cUDGw1Onwf62rkxuKVIyjLuVNkQ9YRofIA5jqzo",\
        link_sign: "976766866,2923169599",\
        urlhash:"",\
        duration: "06:49",\
        duration_hour: "06:49",\
        srcShortUrlExt: "爱奇艺",\
        isHd:"1",\
        listNum:"3",\
        signKey:"1744566221,1657094993",\
\
        srcShortUrl:"www.iqiyi.com",\
        videoType:"1",\
        tm:"0",\
        type:"3",\
        tag: []\
    },\
\
    {\
        isZt:"0",\
        pic: "http://t1.baidu.com/it/u=2348024545,4121918160&fm=20",\
        ti:"lol小智解说熔岩巨兽",\
        abstract: "<font color=#c60a00>lol</font>小智解说熔岩巨兽",\
        url: "/link?url=dm_00pw_klemzFaU2vO4w7zo2Cc1yuX_dCEHtgd-yB9KvmEH_7cUDGw1Onwf62rkxuKVIyjLuVNwR-JpsfIA5jqzo",\
        link_sign: "691013857,2633782987",\
        urlhash:"",\
        duration: "24:49",\
        duration_hour: "24:49",\
        srcShortUrlExt: "爱奇艺",\
        isHd:"1",\
        listNum:"4",\
        signKey:"2348024545,4121918160",\
\
        srcShortUrl:"www.iqiyi.com",\
        videoType:"1",\
        tm:"0",\
        type:"3",\
        tag: [{name: "闯关攻略",url: "http://video.baidu.com/v?word=%B4%B3%B9%D8%B9%A5%C2%D4&ct=301989888&pn=0&db=0&s=1" },{name: "技能技巧",url: "http://video.baidu.com/v?word=%BC%BC%C4%DC%BC%BC%C7%C9&ct=301989888&pn=0&db=0&s=1" }]\
    },\
\
    {\
        isZt:"0",\
        pic: "http://t1.baidu.com/it/u=2335914603,437981208&fm=20",\
        ti:"LOL螳螂新皮肤",\
        abstract: "<font color=#c60a00>LOL</font>螳螂新皮肤",\
        url: "/link?url=dm_00pw_klemzFaU2vO4w7zo2Cc1yuX_dCEHtgd-yB9KvmEH-tNlYRFJEiQP7yr4z4P1NqVLoY_xt95U0VeQck7DDpKybQNun3YntqHjSWg..",\
        link_sign: "1635519552,1244078396",\
        urlhash:"",\
        duration: "03:29",\
        duration_hour: "03:29",\
        srcShortUrlExt: "酷6",\
        isHd:"0",\
        listNum:"5",\
        signKey:"2335914603,437981208",\
\
        srcShortUrl:"v.ku6.com",\
        videoType:"1",\
        tm:"0",\
        type:"3",\
        tag: []\
    },\
\
    {\
        isZt:"0",\
        pic: "http://t1.baidu.com/it/u=2789671142,3188986997&fm=20",\
        ti:"LOL 精彩时刻 第72集",\
        abstract: "<font color=#c60a00>LOL</font> 精彩时刻 第72集",\
        url: "/link?url=dm_00pw_klemzFaU2vO4w7zo2Cc1yuX_dCEHtgd-yB9KvmEH_7cUDR0oJhQG5lqNlo_1hpEbIY4tk6KM0VcQAgO_shLez",\
        link_sign: "2065156117,432623877",\
        urlhash:"",\
        duration: "02:14",\
        duration_hour: "02:14",\
        srcShortUrlExt: "56",\
        isHd:"0",\
        listNum:"6",\
        signKey:"2789671142,3188986997",\
\
        srcShortUrl:"www.56.com",\
        videoType:"1",\
        tm:"0",\
        type:"3",\
        tag: []\
    },\
\
    {\
        isZt:"0",\
        pic: "http://t1.baidu.com/it/u=1189141854,1266972033&fm=20",\
        ti:"小智解说lol飞天螳螂【！",\
        abstract: "小智解说<font color=#c60a00>lol</font>飞天螳螂【！",\
        url: "/link?url=dm_00pw_klemzFaU2vO4w7zo2Cc1yuX_dCEHtgd-yB9KvmEH-tMJdAVJTkEGk1bclyOFfsT7ZaJFB5p9o",\
        link_sign: "1973635888,620911881",\
        urlhash:"",\
        duration: "27:19",\
        duration_hour: "27:19",\
        srcShortUrlExt: "PPS",\
        isHd:"0",\
        listNum:"7",\
        signKey:"1189141854,1266972033",\
\
        srcShortUrl:"v.pps.tv",\
        videoType:"1",\
        tm:"0",\
        type:"3",\
        tag: [{name: "PPS视频",url: "http://video.baidu.com/v?word=PPS%CA%D3%C6%B5&ct=301989888&pn=0&db=0&s=1" }]\
    },\
\
    {\
        isZt:"0",\
        pic: "http://t2.baidu.com/it/u=2224739079,1048467793&fm=20",\
        ti:"英雄联盟LOL宣传片",\
        abstract: "英雄联盟<font color=#c60a00>LOL</font>宣传片",\
        url: "/link?url=dm_00pw_klemzFaU2vO4w7zo2Cc1yuX_dCEHtgd-yB9KvmEH-tNlYRFJEiQP7yr4z4P1W1jLbbYgf2cZrSNhnlJblsoKIee-B3YntqHjSWg..",\
        link_sign: "580558631,4270381781",\
        urlhash:"",\
        duration: "05:00",\
        duration_hour: "05:00",\
        srcShortUrlExt: "酷6",\
        isHd:"0",\
        listNum:"8",\
        signKey:"2224739079,1048467793",\
\
        srcShortUrl:"v.ku6.com",\
        videoType:"1",\
        tm:"0",\
        type:"3",\
        tag: []\
    },\
\
    {\
        isZt:"0",\
        pic: "http://t2.baidu.com/it/u=4147027873,3953063413&fm=20",\
        ti:"2014英雄联盟LOL国服LPL职业联赛S4国际资格赛冠军赛EDGvs皇族第3场",\
        abstract: "2014英雄联盟<font color=#c60a00>LOL</font>国服LPL职业联赛S4国际资格赛冠...",\
        url: "/link?url=dm_00pw_klemzFaU2vO4w7zo2Cc1yuX_dCEHtgd-yB9KvmEH_7cUDR0oJhQG5lqNlov1hpEbIb49nxrd9V_oEyO_shLez",\
        link_sign: "2453286602,894157066",\
        urlhash:"",\
        duration: "43:47",\
        duration_hour: "43:47",\
        srcShortUrlExt: "56",\
        isHd:"0",\
        listNum:"9",\
        signKey:"4147027873,3953063413",\
\
        srcShortUrl:"www.56.com",\
        videoType:"1",\
        tm:"0",\
        type:"3",\
        tag: []\
    },\
\
    {\
        isZt:"0",\
        pic: "http://t1.baidu.com/it/u=1028363739,1642878774&fm=20",\
        ti:"LOL副本终极BOSS维嘉",\
        abstract: "<font color=#c60a00>LOL</font>副本终极BOSS维嘉",\
        url: "/link?url=dm_00pw_klemzFaU2vO4w7zo2Cc1yuX_dCEHtgd-yB9KvmEH-tMJdAVJTkEGk1bclyOFft0XefpFB5p9o",\
        link_sign: "1984182127,1091425873",\
        urlhash:"",\
        duration: "01:14",\
        duration_hour: "01:14",\
        srcShortUrlExt: "PPS",\
        isHd:"0",\
        listNum:"10",\
        signKey:"1028363739,1642878774",\
\
        srcShortUrl:"v.pps.tv",\
        videoType:"1",\
        tm:"0",\
        type:"3",\
        tag: [{name: "PPS视频",url: "http://video.baidu.com/v?word=PPS%CA%D3%C6%B5&ct=301989888&pn=0&db=0&s=1" }]\
    },\
\
    {\
        isZt:"0",\
        pic: "http://t2.baidu.com/it/u=1906302196,3187774678&fm=20",\
        ti:"（小智lol第一视角）蛇女，中单暴君！ 小智解说lol",\
        abstract: "（小智<font color=#c60a00>lol</font>第一视角）蛇女，中单暴君！ 小智解说<font color=#c60a00>lol</font>",\
        url: "/link?url=dm_00pw_klemzFaU2vO4w7zo2Cc1yuX_dCEHtgd-yB9KvmEH_7cUDExVXhwf62rkxuKomzCTMXNBH25tnceICrLDOp4usZN3Im9OurA..",\
        link_sign: "1640510664,1311064963",\
        urlhash:"",\
        duration: "18:33",\
        duration_hour: "18:33",\
        srcShortUrlExt: "爱拍",\
        isHd:"0",\
        listNum:"11",\
        signKey:"1906302196,3187774678",\
\
        srcShortUrl:"www.aipai.com",\
        videoType:"1",\
        tm:"0",\
        type:"3",\
        tag: [{name: "英雄联盟",url: "http://video.baidu.com/v?word=%D3%A2%D0%DB%C1%AA%C3%CB&ct=301989888&pn=0&db=0&s=1" }]\
    },\
\
    {\
        isZt:"0",\
        pic: "http://t2.baidu.com/it/u=2491338810,2094219899&fm=20",\
        ti:"LOL英雄新手教学视频蛮族之王泰达米尔",\
        abstract: "<font color=#c60a00>LOL</font>英雄新手教学视频蛮族之王泰达米尔",\
        url: "/link?url=dm_00pw_klemzFaU2vO4w7zo2Cc1yuX_dCEHtgd-yB9KvmEHl45xZBFJUiQahl7Uz-v1iiG7uCdtM5pNtdIFky_i3x-_tGYSVm9OurA..",\
        link_sign: "508511980,1209895026",\
        urlhash:"",\
        duration: "07:34",\
        duration_hour: "07:34",\
        srcShortUrlExt: "搜狐",\
        isHd:"0",\
        listNum:"12",\
        signKey:"2491338810,2094219899",\
\
        srcShortUrl:"my.tv.sohu.com",\
        videoType:"1",\
        tm:"0",\
        type:"3",\
        tag: []\
    },\
\
    {\
        isZt:"0",\
        pic: "http://t1.baidu.com/it/u=3855824463,3378552145&fm=20",\
        ti:"英雄联盟：LOL安妮，新手教程",\
        abstract: "英雄联盟：<font color=#c60a00>LOL</font>安妮，新手教程",\
        url: "/link?url=dm_00pw_klemzFaU2vO4w7zo2Cc1yuX_dCEHtgd-yB9KvmEH_7cUDGw1Onwf62rkxuKVIyjLuVNwQooJibIA5jqzo",\
        link_sign: "804080071,2631033616",\
        urlhash:"",\
        duration: "20:00",\
        duration_hour: "20:00",\
        srcShortUrlExt: "爱奇艺",\
        isHd:"1",\
        listNum:"13",\
        signKey:"3855824463,3378552145",\
\
        srcShortUrl:"www.iqiyi.com",\
        videoType:"1",\
        tm:"0",\
        type:"3",\
        tag: [{name: "闯关攻略",url: "http://video.baidu.com/v?word=%B4%B3%B9%D8%B9%A5%C2%D4&ct=301989888&pn=0&db=0&s=1" },{name: "技能技巧",url: "http://video.baidu.com/v?word=%BC%BC%C4%DC%BC%BC%C7%C9&ct=301989888&pn=0&db=0&s=1" }]\
    },\
\
    {\
        isZt:"0",\
        pic: "http://t1.baidu.com/it/u=3347044837,1063640805&fm=20",\
        ti:"LOL新英雄沙漠皇帝 阿兹尔中单试玩",\
        abstract: "<font color=#c60a00>LOL</font>新英雄沙漠皇帝 阿兹尔中单试玩",\
        url: "/link?url=dm_00pw_klemzFaU2vO4w7zo2Cc1yuX_dCEHtgd-yB9KvmEH-tNlYRFJEiQP7yr4z4P1hvVjwC-BHoK1lVp9llaPCoaLvWPCB3YntqHjSWg..",\
        link_sign: "1926124845,1995735340",\
        urlhash:"",\
        duration: "25:26",\
        duration_hour: "25:26",\
        srcShortUrlExt: "酷6",\
        isHd:"0",\
        listNum:"14",\
        signKey:"3347044837,1063640805",\
\
        srcShortUrl:"v.ku6.com",\
        videoType:"1",\
        tm:"0",\
        type:"3",\
        tag: []\
    },\
\
    {\
        isZt:"0",\
        pic: "http://t3.baidu.com/it/u=617978009,2048566347&fm=20",\
        ti:"LOL电视台一日节目秀 lol英雄联盟",\
        abstract: "<font color=#c60a00>LOL</font>电视台一日节目秀 <font color=#c60a00>lol</font>英雄联盟",\
        url: "/link?url=dm_00pw_klemzFaU2vO4w7zo2Cc1yuX_dCEHtgd-yB9KvmEH_7cUDR0oJhQG5lqNkoP1hpEbIb8Vk1pV9VeoIzu_shLez",\
        link_sign: "3187876950,2466740549",\
        urlhash:"",\
        duration: "06:27",\
        duration_hour: "06:27",\
        srcShortUrlExt: "56",\
        isHd:"0",\
        listNum:"15",\
        signKey:"617978009,2048566347",\
\
        srcShortUrl:"www.56.com",\
        videoType:"1",\
        tm:"0",\
        type:"3",\
        tag: []\
    },\
\
    {\
        isZt:"0",\
        pic: "http://t3.baidu.com/it/u=1071406576,1618890745&fm=20",\
        ti:"lol黄金段位 lol最新SKT T1 MaRin 瑞兹lol",\
        abstract: "<font color=#c60a00>lol</font>黄金段位 <font color=#c60a00>lol</font>最新SKT T1 MaRin 瑞兹<font color=#c60a00>lol</font>",\
        url: "/link?url=dm_00pw_klemzFaU2vO4w7zo2Cc1yuX_dCEHtgd-yB9KvmEH-tMJdAVJTkEGk1bclyOFfsVLQf5FB5p9o",\
        link_sign: "2108178174,1366497354",\
        urlhash:"",\
        duration: "28:57",\
        duration_hour: "28:57",\
        srcShortUrlExt: "PPS",\
        isHd:"0",\
        listNum:"16",\
        signKey:"1071406576,1618890745",\
\
        srcShortUrl:"v.pps.tv",\
        videoType:"1",\
        tm:"0",\
        type:"3",\
        tag: []\
    },\
\
    {\
        isZt:"0",\
        pic: "http://t1.baidu.com/it/u=1632509641,1762952600&fm=20",\
        ti:"lol小苍解说第一视角光辉女郎lol解说а",\
        abstract: "<font color=#c60a00>lol</font>小苍解说第一视角光辉女郎<font color=#c60a00>lol</font>解说а",\
        url: "/link?url=dm_00pw_klemzFaU2vO4w7zo2Cc1yuX_dCEHtgd-yB9KvmEH_7cUDExVXhwf62rkxuKomwyTMXOZG2KFVf-cSoLDOp4uqY83Im9OurA..",\
        link_sign: "475040663,163152446",\
        urlhash:"",\
        duration: "30:00",\
        duration_hour: "30:00",\
        srcShortUrlExt: "爱拍",\
        isHd:"0",\
        listNum:"17",\
        signKey:"1632509641,1762952600",\
\
        srcShortUrl:"www.aipai.com",\
        videoType:"1",\
        tm:"0",\
        type:"3",\
        tag: [{name: "英雄联盟",url: "http://video.baidu.com/v?word=%D3%A2%D0%DB%C1%AA%C3%CB&ct=301989888&pn=0&db=0&s=1" }]\
    },\
\
    {\
        isZt:"0",\
        pic: "http://t2.baidu.com/it/u=29914638,375092959&fm=20",\
        ti:"英雄联盟lol最新宣传片",\
        abstract: "英雄联盟<font color=#c60a00>lol</font>最新宣传片",\
        url: "/link?url=dm_00pw_klemzFaU2vO4w7zo2Cc1yuX_dCEHtgd-yB9KvmEHl45xZBFJUiQahl7Uz-v1iiCSqFYweo8cxLYFiyfG0wu_qHYSVm9OurA..",\
        link_sign: "1850720305,895865933",\
        urlhash:"",\
        duration: "03:12",\
        duration_hour: "03:12",\
        srcShortUrlExt: "搜狐",\
        isHd:"0",\
        listNum:"18",\
        signKey:"29914638,375092959",\
\
        srcShortUrl:"my.tv.sohu.com",\
        videoType:"1",\
        tm:"0",\
        type:"3",\
        tag: []\
    },\
\
    {\
        isZt:"0",\
        pic: "http://t1.baidu.com/it/u=818856126,968256726&fm=20",\
        ti:"LOL极限逃生 波比",\
        abstract: "<font color=#c60a00>LOL</font>极限逃生 波比",\
        url: "/link?url=dm_00pw_klemzFaU2vO4w7zo2Cc1yuX_dCEHtgd-yB9KvmEH_7cUDGw1Onwf62rkxuKVIyjLuV8VA5Zk0cIA5jqzo",\
        link_sign: "962410291,2500017520",\
        urlhash:"",\
        duration: "02:29",\
        duration_hour: "02:29",\
        srcShortUrlExt: "爱奇艺",\
        isHd:"0",\
        listNum:"19",\
        signKey:"818856126,968256726",\
\
        srcShortUrl:"www.iqiyi.com",\
        videoType:"1",\
        tm:"0",\
        type:"3",\
        tag: []\
    },\
\
    {\
        isZt:"0",\
        pic: "http://t1.baidu.com/it/u=4015649100,1689197269&fm=20",\
        ti:"【爱应用视频】英雄联盟 LOL 新英雄沙漠皇帝",\
        abstract: "【爱应用视频】英雄联盟 <font color=#c60a00>LOL</font> 新英雄沙漠皇帝",\
        url: "/link?url=dm_00pw_klemzFaU2vO4w7zo2Cc1yuX_dCEHtgd-yB9KvmEH_7cUDR0oJhQG5lqNpoP1hpEbIb8Vm1pl9VdQAg-_shLez",\
        link_sign: "3777430653,2937161568",\
        urlhash:"",\
        duration: "03:58",\
        duration_hour: "03:58",\
        srcShortUrlExt: "56",\
        isHd:"0",\
        listNum:"20",\
        signKey:"4015649100,1689197269",\
\
        srcShortUrl:"www.56.com",\
        videoType:"1",\
        tm:"0",\
        type:"3",\
        tag: []\
    }\
],a:{}\
}';
console.log(fbbkJSON.parse(string));
