// import realtimeInoutAlignslice from '@mock/data/realtime-inout-alignslice'

export default {
  '5cdeee0e-184c-a041-2658-040d62270e20': {
    name: '集团总览-今日分时客流/inout/flow',
    type: 'StaticDataset',
    source: 'StaticSource',
    data: '{"code":0,"msg":"ok","data":[{"time":"00:00","in":0,"out":0},{"time":"01:00","in":0,"out":0},{"time":"02:00","in":0,"out":0},{"time":"03:00","in":0,"out":0},{"time":"04:00","in":0,"out":0},{"time":"05:00","in":0,"out":0},{"time":"06:00","in":0,"out":0},{"time":"07:00","in":2380,"out":476},{"time":"08:00","in":2870,"out":448},{"time":"09:00","in":2590,"out":231},{"time":"10:00","in":3010,"out":385},{"time":"11:00","in":3738,"out":546},{"time":"12:00","in":1946,"out":3073},{"time":"13:00","in":2177,"out":315},{"time":"14:00","in":4816,"out":1169}]}',
  },
  'd515e368-ec4c-2cc8-be0d-dd1d83756d7c': {
    name: '集团总览-景区热度榜/scenic/hot',
    type: 'StaticDataset',
    source: 'StaticSource',
    data: '{"code":0,"msg":"ok","data":[{"scenicId":"460000197805012840","scenicName":"公就史论水制极广合","scenicPicture":"http://dummyimage.com/300x600","ticketCount":2309,"in":11663,"pct":6510,"carTotal":7416},{"scenicId":"370000199404242538","scenicName":"汪口","scenicPicture":"http://dummyimage.com/120x600","ticketCount":4616,"in":1025,"pct":2612,"carTotal":6360},{"scenicId":"410000199305196655","scenicName":"汪口","scenicPicture":"http://dummyimage.com/720x300","ticketCount":3150,"in":406,"pct":7112,"carTotal":3640}]}',
  },
  'ac94b95b-6940-e142-5d1c-981bf321e3fb': {
    name: '集团总览-客源分析/scenic/touristLocal',
    type: 'StaticDataset',
    source: 'StaticSource',
    data: '{"code":0,"msg":"ok","data":{"total":{"insideProvince":12183,"insideRate":82.23,"outsideProvince":1230,"outsideRate":0.45},"inside":[{"city":"电调次些温","count":12816},{"city":"报高少入金名","count":2839},{"city":"不理器没标三属须状","count":11472},{"city":"重很走运往度根热","count":7578},{"city":"满道议我角着存","count":12253}],"outside":[{"province":"海证切该加较里再象","count":12830},{"province":"工八然市实知划青","count":11402},{"province":"才见月易军产示没外识却","count":607},{"province":"多素但把新再养","count":47},{"province":"十标委酸可命山心运眼","count":13901}]}}',
  },
  'c67d5d5a-79b2-e79b-fcbb-af2a378c1dd2': {
    name: '景区总览-实时游客/inout/flowTrend',
    type: 'StaticDataset',
    source: 'StaticSource',
    data: '{"code":0,"msg":"ok","data":{"orderTicket":10795,"momOrderTicket":5837,"yoyOrderTicket":11143,"verifyTicket":1122,"refundTicket":4432}}',
  },
  '601f4de4-c253-d2a4-6fb2-b48e628f4fc8': {
    name: '景区总览-实时游客/inout/flowTrend',
    type: 'StaticDataset',
    source: 'StaticSource',
    data: '{"code":0,"msg":"ok","data":{"summary":{"touristFlow":13789,"momTouristFlow":11664,"yoyTouristFlow":6324,"weekTouristFlow":1518,"momWeekTouristFlow":13322,"yoyWeekTouristFlow":4944},"detail":[{"time":"02:00","in":3042,"out":5171},{"time":"03:00","in":11109,"out":4889},{"time":"04:00","in":9415,"out":11319},{"time":"05:00","in":13687,"out":4280},{"time":"06:00","in":13352,"out":1590}]}}',
  },
  '7d59ad87-7ba5-f7a9-4c19-6081a538485f': {
    name: '景区总览+集团总览-销售渠道/channel/detail',
    type: 'StaticDataset',
    source: 'StaticSource',
    data: '{"code":0,"msg":"ok","data":[{"channelId":"710000200007110514","channelName":"基做资","tickets":811,"amount":784,"rate":-11.1},{"channelId":"360000199311132143","channelName":"元级收","tickets":276,"amount":609,"rate":18},{"channelId":"330000201705186667","channelName":"与极但或","tickets":402,"amount":209,"rate":6.8}]}',
  },
  '171fb411-9c57-e334-9029-80641878c17f': {
    name: '景区总览+集团总览-产品排行/product/rank',
    type: 'StaticDataset',
    source: 'StaticSource',
    data: '{"code":0,"msg":"ok","data":[{"productId":"120000199004266016","productName":"历这证同水研只精劳格","count":5454,"amount":781975.5,"rate":50.21},{"productId":"820000198608117768","productName":"力前话育","count":7448,"amount":435240.21,"rate":-45},{"productId":"820000197104069163","productName":"些品九样记红不七品江质只","count":969,"amount":222061.3,"rate":-61.2}]}',
  },
  '052a59a8-83af-5d5f-fb0b-7b832aae60bb': {
    name: '预订分析-预订汇总和趋势分析/order/bookingOrderSummary',
    type: 'StaticDataset',
    source: 'StaticSource',
    data: '{"code":0,"msg":"ok","data":{"total":{"order":250464,"ticket":972751,"amount":202540.6},"detail":{"orderTrend":[{"time":"2023-05-12","order":150,"yoyOrder":130,"momOrder":20},{"time":"2023-05-13","order":30,"yoyOrder":30,"momOrder":120}],"ticketTrend":[{"time":"2023-05-12","ticket":396,"yoyTicket":687,"momTicket":371},{"time":"2023-05-13","ticket":818,"yoyTicket":287,"momTicket":326}],"amountTrend":[{"time":"2023-05-22","amount":50,"yoyAmount":30,"momAmount":20}]}}}',
  },
  'bc9847c3-a604-e4f8-c0de-5b7b0e964a80': {
    name: '预订分析-团单分析/order/bookingTeamSummary',
    type: 'StaticDataset',
    source: 'StaticSource',
    data: '{"code":0,"msg":"ok","data":{"total":{"team":967342,"teamTicket":172248.52,"teamVerify":154739},"detail":{"teamTrend":[{"time":"2023-05-12","team":480030.32,"yoyTeam":658532},{"time":"2023-05-13","team":173210.8,"yoyTeam":340197.3},{"time":"2023-05-14","team":253220.3,"yoyTeam":402544},{"time":"2023-05-15","team":606854.7,"yoyTeam":905238.1}],"teamTicketTrend":[{"time":"2023-05-12","ticket":920008.1,"yoyTicket":419956},{"time":"2023-05-13","ticket":123090,"yoyTicket":870156},{"time":"2023-05-14","ticket":12511.5,"yoyTicket":442198.3},{"time":"2023-05-12","ticket":294218.7,"yoyTicket":14979.1}],"teamAmountTrend":[{"time":"2023-05-12","amount":557820.4,"yoyAmount":331900},{"time":"2023-05-13","amount":971955.2,"yoyAmount":859524.4},{"time":"2023-05-14","amount":338002.62,"yoyAmount":480964.8}]}}}',
  },
  '8fa52dd0-6ce5-29d2-db30-84ec8ca58bdd': {
    name: '预订分析-销售渠道/channel/detai',
    type: 'StaticDataset',
    source: 'StaticSource',
    data: '{"code":0,"msg":"ok","data":[{"channelId":"310000198805041598","channelName":"应离也","tickets":655,"amount":745,"rate":-34.65},{"channelId":"440000201201186212","channelName":"运采保候","tickets":541,"amount":212,"rate":81.6},{"channelId":"530000202107312944","channelName":"道新斗者","tickets":908,"amount":119,"rate":12.6}]}',
  },
  'ccfd0131-f7dd-d7f8-48d6-a9a12ee54085': {
    name: '游客画像+集团总览-年龄分布/portrait/ageSummary',
    type: 'StaticDataset',
    source: 'StaticSource',
    data: '{"code":0,"msg":"ok","data":{"summary":{"total":6459,"male":9245,"female":1458},"list":[{"ageGroup":"0~8","male":7618,"female":3202},{"ageGroup":"9~17","male":907,"female":9613}]}}',
  },
  '81539044-d288-4fe9-a164-7c98e423d2f6': {
    name: '游客画像-同行人数/portrait/fellow',
    type: 'StaticDataset',
    source: 'StaticSource',
    data: '{"code":0,"msg":"ok","data":[{"name":"1人","count":7072,"rate":-90.4},{"name":"2人","count":9598,"rate":-92.44},{"name":"3人","count":9550,"rate":57.4}]}',
  },
  '3c834351-3bb2-718a-090a-589c51ccc7cc': {
    name: '游客画像-支付渠道/portrait/paymentMethod',
    type: 'StaticDataset',
    source: 'StaticSource',
    data: '{"code":0,"msg":"ok","data":[{"name":"二程位南","count":285752,"rate":-99.3},{"name":"化石平","count":618737,"rate":-66.07},{"name":"上段治","count":651384,"rate":-80.2}]}',
  },
  '4d7667ad-760e-94e6-444f-081dfc8cfc37': {
    name: '游客画像-市客源排名/portrait/city',
    type: 'StaticDataset',
    source: 'StaticSource',
    data: '{"code":0,"msg":"ok","data":[{"city":"赣州市","total":489022,"compareTotalRate":82.4,"rate":34.38},{"city":"嘉义县","total":928442,"compareTotalRate":-3.8,"rate":92.7},{"city":"云林县","total":138895,"compareTotalRate":96.7,"rate":7.1}]}',
  },
  '49cfa320-fc04-88ec-8ea3-8bd1351fe974': {
    name: '游客画像-省客源排名/portrait/province',
    type: 'StaticDataset',
    source: 'StaticSource',
    data: '{"code":0,"msg":"ok","data":[{"province":"河南省","total":119265,"compareTotalRate":46.78,"rate":9.76},{"province":"安徽省","total":767097,"compareTotalRate":-42.2,"rate":-12},{"province":"海南省","total":714028,"compareTotalRate":36.7,"rate":78}]}',
  },
  '837a13bc-209d-3427-fa1f-190f1a563d02': {
    name: '今日车辆/analysis/car',
    type: 'StaticDataset',
    source: 'StaticSource',
    data: '{"code":0,"msg":"ok","data":{"total":{"insideCarNumber":556897.6,"capacity":-89.5,"summary":145286.7},"detail":[{"timeRange":"02:00","insideCarNumber":5467,"oursideCarNumber":3734},{"timeRange":"03:00","insideCarNumber":287,"oursideCarNumber":3761},{"timeRange":"04:00","insideCarNumber":8168,"oursideCarNumber":13019}]}}',
  },
  'd534321c-135d-f6db-5df3-0b516833b8de': {
    name: '省内省外车辆数据/analysis/carLocation',
    type: 'StaticDataset',
    source: 'StaticSource',
    data: '{"code":0,"msg":"ok","data":{"insideCarList":[{"city":"天津市","count":1357,"rate":72.13},{"city":"怀化市","count":3374,"rate":-25.6},{"city":"临汾市","count":279,"rate":22.47},{"city":"平顶山市","count":5356,"rate":28.94},{"city":"商丘市","count":13746,"rate":-71.8}],"outsideCarList":[{"province":"北京","count":4560,"rate":30.3},{"province":"内蒙古自治区","count":10544,"rate":6.8},{"province":"山西省","count":13561,"rate":-3.8},{"province":"浙江省","count":7659,"rate":38.35},{"province":"新疆维吾尔自治区","count":692,"rate":-4.39}]}}',
  },
  '21cdb9b4-8073-2b3e-adbc-28d6dd2d5073': {
    name: '客流趋势/analysis/flowTrend',
    type: 'StaticDataset',
    source: 'StaticSource',
    data: '{"code":0,"msg":"ok","data":[{"timeRange":"2023-05-11","count":719886},{"timeRange":"2023-05-12","count":463818},{"timeRange":"2023-05-13","count":517230}]}',
  },
  '62d892f3-2f67-1451-1751-063bd8357e2c': {
    name: '客流预测/analysis/flowForecast',
    type: 'StaticDataset',
    source: 'StaticSource',
    data: '{"code":0,"msg":"ok","data":{"total":{"todayFlow":592257,"tomorrowFlow":86037,"thirdDayFlow":261958.5},"detail":[{"timeRange":"2023-05-10","count":550808.91},{"timeRange":"2023-05-11","count":466180.75},{"timeRange":"2023-05-12","count":627981.7}]}}',
  },
  '49da15da-9b05-2939-c689-8f0c77d083b7': {
    name: '产品列表',
    type: 'StaticDataset',
    source: 'StaticSource',
    data: '{"code":0,"msg":"ok","data":{"pagination":{"page":1,"pageSize":5,"total":11,"pages":6},"list":[{"productId":"12000020001129757X","productName":"要示共林斯量","amount":196639,"yoyAmount":-34.4,"count":472036.2,"yoyCount":-76.7,"amountTrend":[{"timeRange":"2023-01-01","ticketCount":172624},{"timeRange":"2023-01-02","ticketCount":102104},{"timeRange":"2023-01-03","ticketCount":457001}],"channelList":[{"channelId":"320000202111302782","channelName":"那空直始历表调王变积打转市半管","ticketCount":46083,"rate":93},{"channelId":"140000201605295959","channelName":"不最把连见且提","ticketCount":779079,"rate":80.52},{"channelId":"210000200010076734","channelName":"其道动音因南要政南律","ticketCount":142621,"rate":-37.8}]}]}}',
  },
  '11eec8dd-abc5-7363-28c9-77f635bcd29c': {
    name: '景区列表/scenic/list',
    type: 'StaticDataset',
    source: 'StaticSource',
    data: '{"code":0,"msg":"ok","data":[{"id":1,"name":"李坑","img":"http://dummyimage.com/100x100/4A7BF7","lng":117.93,"lat":29.32,"dataSource":101,"capacity":-5971645896522416},{"id":2,"name":"江岭","img":"http://dummyimage.com/100x100/4A7BF7","lng":118.03,"lat":29.45,"dataSource":102,"capacity":-550067009967932},{"id":3,"name":"汪口","img":"http://dummyimage.com/100x100/4A7BF7","lng":118,"lat":29.35,"dataSource":103,"capacity":-6309810632106752},{"id":4,"name":"思溪延村","img":"http://dummyimage.com/100x100/4A7BF7","lng":117.8,"lat":29.34,"dataSource":104,"capacity":3742683720456976},{"id":5,"name":"彩虹桥","img":"http://dummyimage.com/100x100/4A7BF7","lng":117.78,"lat":29.41,"dataSource":1015,"capacity":606604234993484},{"id":6,"name":"灵岩洞","img":"http://dummyimage.com/100x100/4A7BF7","lng":117.62,"lat":29.47,"dataSource":106,"capacity":1454919442692644},{"id":7,"name":"严田","img":"http://dummyimage.com/100x100/4A7BF7","lng":117.65,"lat":29.36,"dataSource":107,"capacity":1512733730582820}]}',
  },
  '4d179e92-7c94-99d1-79a5-1894cb2a27d0': {
    name: '活动监测-列表/activity_monitoring/show',
    type: 'StaticDataset',
    source: 'StaticSource',
    data: '{"code":0,"msg":"ok","data":[{"id":"410000198708291724","name":"题上开","start":"2010-04-11 14:43:34","end":"2015-03-05 02:43:31","compare":1,"handSetting":2,"compareStart":"1979-08-16 02:03:17","compareEnd":"2012-04-27 19:29:12"},{"id":"340000201212085157","name":"易反眼就满","start":"1981-07-20 16:56:28","end":"2014-01-31 01:36:12","compare":1,"handSetting":1,"compareStart":"2017-05-23 02:46:29","compareEnd":"1993-01-20 01:57:34"},{"id":"810000197903198410","name":"眼织主同","start":"1975-08-22 04:39:22","end":"1987-01-01 05:20:42","compare":1,"handSetting":2,"compareStart":"1998-01-20 06:38:19","compareEnd":"1977-08-02 10:42:39"},{"id":"990000199106229162","name":"集界满术复","start":"1994-05-17 05:05:05","end":"1979-07-07 14:10:24","compare":2,"handSetting":2,"compareStart":"1982-12-24 22:52:12","compareEnd":"1991-07-07 16:56:22"},{"id":"810000198601162601","name":"安使土温","start":"2017-09-18 08:02:18","end":"1990-01-10 08:47:03","compare":2,"handSetting":2,"compareStart":"1999-01-22 20:34:42","compareEnd":"1997-01-10 04:06:49"},{"id":"120000202207234422","name":"可飞龙地参","start":"2000-09-03 18:09:27","end":"1982-05-29 22:09:42","compare":1,"handSetting":1,"compareStart":"1990-09-01 23:40:21","compareEnd":"1976-09-14 03:40:38"},{"id":"320000197310047274","name":"把土没","start":"2005-05-04 04:47:24","end":"1991-04-22 00:10:10","compare":1,"handSetting":2,"compareStart":"1989-12-24 08:52:22","compareEnd":"1990-04-11 03:22:43"},{"id":"110000198902061147","name":"老建带力","start":"1973-09-22 17:26:40","end":"2011-05-23 20:22:29","compare":1,"handSetting":1,"compareStart":"2004-04-11 23:31:25","compareEnd":"1999-02-17 11:07:04"},{"id":"310000198101184056","name":"军府斯派交","start":"2018-08-05 18:49:15","end":"1979-07-01 23:14:36","compare":2,"handSetting":2,"compareStart":"1989-02-08 05:05:13","compareEnd":"1990-10-17 09:07:58"},{"id":"110000198812296014","name":"被来长","start":"1970-12-30 16:28:18","end":"1991-05-26 04:16:39","compare":2,"handSetting":1,"compareStart":"2010-07-21 11:24:54","compareEnd":"1984-07-24 09:04:24"}]}',
  },
  '6d102bbd-8af2-d6e2-0fa8-348d94835d81': {
    name: '活动监测-今日数据/activity_monitoring/orderSummary',
    type: 'StaticDataset',
    source: 'StaticSource',
    data: '{"code":0,"msg":"ok","data":{"orderTicket":6039,"verifyTicket":175,"refundTicket":785,"orderAmount":7604}}',
  },
  'f36ba5a4-369a-9d2f-a5f4-48e0a0bde443': {
    name: '活动监测-今日分时客流/activity_monitoring/timeSharingFlow',
    type: 'StaticDataset',
    source: 'StaticSource',
    data: '{"code":0,"msg":"ok","data":[{"time":"02:00","in":9140,"out":9969},{"time":"03:00","in":10456,"out":5180},{"time":"04:00","in":3594,"out":13911},{"time":"05:00","in":6620,"out":3323},{"time":"06:00","in":328,"out":8533}]}',
  },
  '88cbf6e6-77b0-67ed-f665-bd4fe3dcbee0': {
    name: '活动监测-日客流与活动总数据/activity_monitoring/flow',
    type: 'StaticDataset',
    source: 'StaticSource',
    data: '{"code":0,"msg":"ok","data":{"total":{"order":5218,"compareOrder":1877,"ticket":9256,"compareTicket":13853,"amount":8601,"compareAmount":7829},"detail":[{"timeRange":"2004-12-30","actual":175,"monitoring":13147,"compare":13084},{"timeRange":"1995-02-20","actual":12286,"monitoring":2564,"compare":871},{"timeRange":"1991-10-22","actual":13748,"monitoring":93,"compare":6583},{"timeRange":"2017-09-15","actual":13658,"monitoring":3259,"compare":467},{"timeRange":"1990-06-17","actual":4098,"monitoring":12547,"compare":9663}]}}',
  },
  // 'eabf053d-da07-4371-a74b-0242ac120000': {
  //     name: '静态数据',
  //     type: 'StaticDataset',
  //     source: 'StaticSource',
  //     params: JSON.stringify(realtimeInoutAlignslice.repsone)
  // },
  'eabf053d-da07-4371-a74b-0242ac120001': {
    name: '实时数据',
    type: 'BuiltInDataset',
    source: 'VScreenWS',
    duration: 5 * 60 * 1000,
    command: 'realtime.map.overview',
    // fields: [
    //     // 场馆选择器
    //     {
    //         name: 'scenic',
    //         type: 'VenueSelect',
    //         label: '所属场馆',
    //         required: true,
    //     },
    // ],
  },
  'eabf053d-da07-4371-a74b-0242ac120002': {
    name: '游客预警',
    type: 'BuiltInDataset',
    source: 'VScreenWS',
    duration: 5 * 60 * 1000,
    command: 'realtime.tourist.early-warning',
    // fields: [
    //     // 场馆选择器
    //     {
    //         name: 'scenic',
    //         type: 'VenueSelect',
    //         label: '所属场馆',
    //         required: true,
    //     },
    //     // 数值框
    //     {
    //         name: 'limit',
    //         type: 'Number',
    //         label: '记录数',
    //         required: true,
    //     },
    // ],
  },
  'eabf053d-da07-4371-a74b-0242ac120003': {
    name: '地区分布',
    type: 'BuiltInDataset',
    source: 'VScreenWS',
    duration: 5 * 60 * 1000,
    command: 'realtime.reserved.city.distribution',
    // fields: [
    //     // 场馆选择器
    //     {
    //         name: 'scenic',
    //         type: 'VenueSelect',
    //         label: '所属场馆',
    //         required: true,
    //     },
    //     // 数值框
    //     {
    //         name: 'limit',
    //         type: 'Number',
    //         label: '记录数',
    //         required: true,
    //     },
    // ],
  },
  'eabf053d-da07-4371-a74b-0242ac120004': {
    name: '地区分布',
    type: 'BuiltInDataset',
    source: 'VScreenWS',
    duration: 5 * 60 * 1000,
    command: 'realtime.overview',
    // fields: [
    //     // 场馆选择器
    //     {
    //         name: 'scenic',
    //         type: 'VenueSelect',
    //         label: '所属场馆',
    //         required: true,
    //     },
    //     // 数值框
    //     {
    //         name: 'limit',
    //         type: 'Number',
    //         label: '记录数',
    //         required: true,
    //     },
    // ],
  },
  'eabf053d-da07-4371-a74b-0242ac120005': {
    name: '地区分布',
    type: 'BuiltInDataset',
    source: 'VScreenWS',
    duration: 5 * 60 * 1000,
    command: 'realtime.reserved.age_gender.distribution',
    // fields: [
    //     // 场馆选择器
    //     {
    //         name: 'scenic',
    //         type: 'VenueSelect',
    //         label: '所属场馆',
    //         required: true,
    //     },
    //     // 数值框
    //     {
    //         name: 'limit',
    //         type: 'Number',
    //         label: '记录数',
    //         required: true,
    //     },
    // ],
  },
  'eabf053d-da07-4371-a74b-0242ac120006': {
    name: '地区分布',
    type: 'BuiltInDataset',
    source: 'VScreenWS',
    duration: 5 * 60 * 1000,
    command: 'realtime.inout.distribution',
    // fields: [
    //     // 场馆选择器
    //     {
    //         name: 'scenic',
    //         type: 'VenueSelect',
    //         label: '所属场馆',
    //         required: true,
    //     },
    //     // 数值框
    //     {
    //         name: 'limit',
    //         type: 'Number',
    //         label: '记录数',
    //         required: true,
    //     },
    // ],
  },
  'eabf053d-da07-4371-a74b-0242ac120007': {
    name: '地区分布',
    type: 'BuiltInDataset',
    source: 'VScreenWS',
    duration: 5 * 60 * 1000,
    command: 'realtime.pending.distribution',
    // fields: [
    //     // 场馆选择器
    //     {
    //         name: 'scenic',
    //         type: 'VenueSelect',
    //         label: '所属场馆',
    //         required: true,
    //     },
    //     // 数值框
    //     {
    //         name: 'limit',
    //         type: 'Number',
    //         label: '记录数',
    //         required: true,
    //     },
    // ],
  },
  'eabf053d-da07-4371-a74b-0242ac120008': {
    name: '地区分布',
    type: 'BuiltInDataset',
    source: 'VScreenWS',
    duration: 5 * 60 * 1000,
    command: 'realtime.product.popularity',
    // fields: [
    //     // 场馆选择器
    //     {
    //         name: 'scenic',
    //         type: 'VenueSelect',
    //         label: '所属场馆',
    //         required: true,
    //     },
    //     // 数值框
    //     {
    //         name: 'limit',
    //         type: 'Number',
    //         label: '记录数',
    //         required: true,
    //     },
    // ],
  },
  'eabf053d-da07-4371-a74b-0242ac120009': {
    name: '实时天气数据',
    type: 'BuiltInDataset',
    source: 'VScreenWS',
    duration: 5 * 60 * 1000,
    command: 'realtime.weather',
    // fields: [
    //     {
    //         name: 'location',
    //         type: 'CitySelect',
    //         label: '选择城市',
    //         required: true
    //     },
    //     {
    //         name: 'dataType',
    //         type: 'DataItemSelect',
    //         label: '选择查询的数据',
    //     }
    // ]
  },
  'eabf053d-da07-4371-a74b-0242ac120010': {
    name: '实时公告',
    type: 'BuiltInDataset',
    source: 'VScreenWS',
    duration: 5 * 60 * 1000,
    command: 'notice.list',
  },
  'eabf053d-da07-4371-a74b-0242ac120011': {
    name: '入园人数时间分布',
    type: 'BuiltInDataset',
    source: 'VScreenWS',
    duration: 5 * 60 * 1000,
    command: 'realtime.inout.alignslice',
    // fields: [
    //     // 场馆选择器
    //     {
    //         name: 'scenic',
    //         type: 'VenueSelect',
    //         label: '所属场馆',
    //         required: true,
    //     },
    //     // 数值框
    //     {
    //         name: 'span',
    //         type: 'Select',
    //         label: '时间区间',
    //         required: true,
    //     },
    // ],
  },
};
