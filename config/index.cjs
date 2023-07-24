/* eslint-disable */

/**
 * 此项目配置为方便新人使用，已缩减至最简配置。
 * 如若想使用更多功能，请查考文档中的 【3. config参数说明】 
 * 自行添加属性，以支持更多个性化功能
 */
const USER_CONFIG = {

  // 使用微信测试号：公众号APP_ID
  APP_ID: '',

  // 使用微信测试号：公众号APP_SECRET
  APP_SECRET: '',

  PROVINCE: '河南',
  CITY: '商水',

  USERS: [
    {
      // 想要发送的人的名字
      name: '小乖',
      // 使用微信测试号：扫码关注你的微信测试号后生成的一段字符串，在测试号后台能看到
      id: 'oICwl6WZKcbBeLJXc9iv1QQY1q_8',
      // 使用微信测试号：你想对他发送的模板消息的模板ID
      useTemplateId: '6yjNTSF-kVUqMJe1UdEBhzL0G_mt6XE5Y2cU6h6c9eg',
      // 新历生日, 仅用作获取星座运势, 格式必须为MM-DD
      horoscopeDate: '10-07',
      festivals: [
        // 注意：此条配置日期为阴历日期，因为`type`中 “生日” 之前有 * 符号
        {
          type: '*生日', name: '小乖', year: '2001', date: '10-07',
        },
        // 注意：此条配置日期为阳历日期，因为`type`中 “生日” 之前没有 * 符号
        {
          type: '生日', name: '小乖', year: '2001', date: '11-19',
        },
        {
          type: '节日', name: '相识纪念日', year: '2022', date: '01-01',
        },
      ],
      // 我们在一起已经有xxxx天了的配置
      customizedDateList: [
        // 在一起的日子
        { keyword: 'love_day', date: '2022-01-12' },
        // 结婚纪念日
        { keyword: 'marry_day', date: '2022-01-12' },
      ],
    },
  ],


  // 【推送完成提醒】模板id, 用来看自己有没有发送成功的那个模板
  CALLBACK_TEMPLATE_ID: '425gD3k6A_E9pu7XiMHZrsnA6b38Yl-nywLsl0cblsg',

  CALLBACK_USERS: [
    {
      name: '夏笙',
      // 使用微信测试号：自己的微信id，扫码关注你的微信测试号后生成的一段字符串，在测试号后台能看到
      id: 'oICwl6eHqj8NP1mRC1tIf69dlf5k',
    }
  ],

}

module.exports = USER_CONFIG

